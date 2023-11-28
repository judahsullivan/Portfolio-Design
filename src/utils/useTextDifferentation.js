import React from 'react';

export const useTextDifferentiation = (description) => {
  const renderSegments = description.map((segment, index) => {
    if (typeof segment === 'object') {
      return (
        <span key={segment.key} custom={index} className="mr-1.5  font-bold ">
          {segment.text}
        </span>
      );
    } else {
      return (
        <span key={index} custom={index} className=" mr-1.5 font-thin normal-case  text-theme-base">
          {segment}
        </span>
      );
    }
  });

  return renderSegments;
};
