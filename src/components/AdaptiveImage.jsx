import React, { useState } from 'react';

export const AdaptiveImage = ({ srcList, alt, className, fallbackSrc, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sources = (Array.isArray(srcList) ? srcList : [srcList]).filter(Boolean);
  const allSources = [...sources, fallbackSrc].filter(Boolean);

  const handleError = () => {
    if (currentIndex < allSources.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const currentSrc = allSources[currentIndex] || fallbackSrc;

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
