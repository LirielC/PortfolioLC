import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw',
  quality = 'high', // 'high', 'medium', 'mobile'
  lazy = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  // Gerar URLs otimizadas baseadas no src original
  const getOptimizedUrls = (originalSrc) => {
    const filename = originalSrc.split('/').pop().split('.')[0]
    const basePath = import.meta.env.BASE_URL + 'images/optimized/'
    
    const urls = {
      webp: {
        high: `${basePath}${filename}@2x.webp`,
        medium: `${basePath}${filename}.webp`,
        mobile: `${basePath}${filename}-mobile.webp`
      },
      fallback: {
        high: `${basePath}${filename}-optimized.png`,
        medium: `${basePath}${filename}-optimized.png`,
        mobile: `${basePath}${filename}-optimized.png`
      },
      original: originalSrc
    }
    
    return urls
  }

  const urls = getOptimizedUrls(src)

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!lazy) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [lazy])

  // Detectar suporte a WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  const getImageSrc = () => {
    if (hasError) return urls.original
    
    const useWebP = supportsWebP()
    const formatUrls = useWebP ? urls.webp : urls.fallback
    
    switch (quality) {
      case 'high':
        return formatUrls.high
      case 'mobile':
        return formatUrls.mobile
      default:
        return formatUrls.medium
    }
  }

  const getSrcSet = () => {
    if (hasError) return ''
    
    const useWebP = supportsWebP()
    const formatUrls = useWebP ? urls.webp : urls.fallback
    
    return `
      ${formatUrls.mobile} 800w,
      ${formatUrls.medium} 1200w,
      ${formatUrls.high} 1800w
    `.trim()
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Placeholder */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-theme-secondary/10 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-theme-tertiary/30 border-t-theme-accent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Skeleton loader */}
      {!isInView && (
        <div className="absolute inset-0 bg-theme-secondary/5 flex items-center justify-center">
          <div className="w-12 h-12 text-theme-tertiary/50">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <picture>
          {/* WebP sources */}
          <source
            type="image/webp"
            srcSet={getSrcSet()}
            sizes={sizes}
          />
          
          {/* Fallback image */}
          <motion.img
            src={getImageSrc()}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            sizes={sizes}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-theme-secondary/10 flex items-center justify-center">
          <div className="text-center text-theme-tertiary">
            <div className="w-12 h-12 mx-auto mb-2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-xs">Imagem não encontrada</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage 