import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 85,
    effort: 6,
    lossless: false
  },
  jpeg: {
    quality: 90,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    progressive: true
  }
};

async function optimizeImage(inputPath, outputDir) {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const ext = path.extname(inputPath).toLowerCase();
    
    console.log(`🔄 Otimizando: ${inputPath}`);
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    const outputs = [];
    
    const webpPath = path.join(outputDir, `${filename}.webp`);
    await image
      .webp(OPTIMIZATION_CONFIG.webp)
      .toFile(webpPath);
    outputs.push({ format: 'WebP', path: webpPath });
    
    const webpHdPath = path.join(outputDir, `${filename}@2x.webp`);
    await image
      .resize(Math.round(metadata.width * 1.5), Math.round(metadata.height * 1.5), {
        kernel: sharp.kernel.lanczos3,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ ...OPTIMIZATION_CONFIG.webp, quality: 90 })
      .toFile(webpHdPath);
    outputs.push({ format: 'WebP HD', path: webpHdPath });
    
    // 3. Versão mobile (menor)
    const webpMobilePath = path.join(outputDir, `${filename}-mobile.webp`);
    await image
      .resize(800, null, {
        kernel: sharp.kernel.lanczos3,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp(OPTIMIZATION_CONFIG.webp)
      .toFile(webpMobilePath);
    outputs.push({ format: 'WebP Mobile', path: webpMobilePath });
    
    // 4. Fallback otimizado no formato original
    let fallbackPath;
    if (ext === '.png') {
      fallbackPath = path.join(outputDir, `${filename}-optimized.png`);
      await image
        .png(OPTIMIZATION_CONFIG.png)
        .toFile(fallbackPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      fallbackPath = path.join(outputDir, `${filename}-optimized.jpg`);
      await image
        .jpeg(OPTIMIZATION_CONFIG.jpeg)
        .toFile(fallbackPath);
    }
    
    if (fallbackPath) {
      outputs.push({ format: 'Fallback', path: fallbackPath });
    }
    
    // Mostrar resultados
    console.log('✅ Versões geradas:');
    for (const output of outputs) {
      const size = (fs.statSync(output.path).size / 1024 / 1024).toFixed(2);
      console.log(`   ${output.format}: ${size}MB`);
    }
    
    return outputs;
    
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
    return [];
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de imagens...\n');
  
  // Criar diretório de saída
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'optimized');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Lista de imagens para otimizar
  const imagesToOptimize = [
    path.join(__dirname, '..', 'public', 'procurriculum.png'),
    path.join(__dirname, '..', 'public', 'netartitech.png'),
    path.join(__dirname, '..', 'public', 'Sistb.png'),
    path.join(__dirname, '..', 'ChatGPT Image 2 de jul. de 2025, 19_50_16.png')
  ];
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Processar cada imagem
  for (const imagePath of imagesToOptimize) {
    if (fs.existsSync(imagePath)) {
      const originalSize = fs.statSync(imagePath).size;
      totalOriginalSize += originalSize;
      
      const outputs = await optimizeImage(imagePath, outputDir);
      
      // Calcular tamanho otimizado (usar WebP como referência)
      const webpOutput = outputs.find(o => o.format === 'WebP');
      if (webpOutput) {
        totalOptimizedSize += fs.statSync(webpOutput.path).size;
      }
      
    } else {
      console.log(`⚠️  Imagem não encontrada: ${imagePath}`);
    }
  }
  
  // Estatísticas finais
  const savings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log('🎉 Otimização concluída!');
  console.log(`📁 Imagens otimizadas salvas em: ${outputDir}`);
  console.log(`📊 Tamanho original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📊 Tamanho otimizado: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`🎯 Economia de espaço: ${savings}%`);
}

// Executar se chamado diretamente
main().catch(console.error); 