import React from 'react';

// Custom hook to differentiate text segments
export const useTextDifferentiation = (description) => {
  const renderSegments = description.map((segment, index) => {
    if (typeof segment === 'object') {
      return (
        <span
          key={segment.key}
          custom={index}
          className="mr-1.5 text-theme-accent font-bold capitalize"
        >
          {segment.text}
        </span>
      );
    } else {
      return (
        <span key={index} custom={index} className="mr-1.5 font-thin normal-case text-theme-muted">
          {segment}
        </span>
      );
    }
  });

  return renderSegments;
};