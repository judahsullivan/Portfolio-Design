import React from 'react';

function StringSplitter({ strings, mD, dT, animationName }) {
  let characters = [];

  if (Array.isArray(strings)) {
    // If strings is an array of strings
    characters = strings.flatMap((str) => str.split(''));
  } else if (typeof strings === 'string') {
    // If strings is a single string
    characters = strings.split('');
  }

  return (
    <div className={`space-x-${mD} lg:space-x-${dT}`}>
      {characters.map((char, index) => (
        <span className="overflow-hidden mr-1 inline-block" key={index}>
          <span className={`inline-block ${animationName}`}>{char}</span>
        </span>
      ))}
    </div>
  );
}

export default StringSplitter;
