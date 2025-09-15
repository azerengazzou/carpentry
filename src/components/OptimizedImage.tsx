import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={style}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className={`${className} absolute inset-0 bg-stone-200 animate-pulse`} style={style} />
      )}
    </div>
  );
};

export default OptimizedImage;