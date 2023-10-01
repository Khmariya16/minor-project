import React, { useState } from 'react';

const GradientExample = () => {
  const [gradientColor, setGradientColor] = useState('red');

  const handleGradientColorChange = (event) => {
    setGradientColor(event.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={gradientColor}
        onChange={handleGradientColorChange}
      />
      <svg width={400} height={200} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Define a linear gradient with dynamic color */}
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColor} />
            <stop offset="50%" stopColor="green" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>

        {/* Apply the linear gradient to a rectangle */}
        <rect x="10" y="10" width="180" height="80" fill="url(#myGradient)" />

        {/* Apply the linear gradient to a circle */}
        <circle cx="300" cy="60" r="40" fill="url(#myGradient)" />

        {/* You can add more elements here with the same gradient */}
      </svg>
    </div>
  );
};

export default GradientExample;
