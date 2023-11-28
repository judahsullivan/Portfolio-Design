import React from 'react';

export const useTextDifferentiation = (description) => {
  const renderSegments = description.map((segment, index) => {
    if (typeof segment === 'object') {
      return (
        <span key={segment.key} custom={index} className="!capitalize font-bold text-theme-accent">
          {segment.text}
        </span>
      );
    } else {
      return (
        <span key={index} custom={index} className="font-normal  text-theme-base">
          {segment}
        </span>
      );
    }
  });

  return renderSegments;
};
