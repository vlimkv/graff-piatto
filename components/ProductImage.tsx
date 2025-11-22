// components/ProductImage.tsx

"use client";

import React from 'react';

const API_URL = 'http://localhost:4000';

interface ProductImageProps {
  imageUrl?: string | null;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function ProductImage({ 
  imageUrl, 
  alt, 
  className = "w-full h-full object-cover",
  containerClassName = "relative w-full h-full"
}: ProductImageProps) {
  
  if (!imageUrl) {
    return (
      <div className={`${containerClassName} flex items-center justify-center bg-[#F5F1E5]`}>
        <svg 
          className="w-20 h-20 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={1}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <img
        src={`${API_URL}${imageUrl}`}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </div>
  );
}

// Экспорт для использования в других компонентах
export { API_URL };