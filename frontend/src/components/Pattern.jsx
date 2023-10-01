import React from 'react';

const Pattern = () => {
  return (
    <svg width={400} height={200} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* First Pattern */}
        <pattern id="Pattern1" width={100} height={100} patternUnits="userSpaceOnUse">
          <circle fill="blue" cx={50} cy={50} r={25} />
          <circle r={25} />
          {/* top left */}
          <circle cx={100} r={25} />
          {/* top right */}
          <circle cy={100} r={25} />
          {/* bottom left */}
          <circle cx={100} cy={100} r={25} />
          {/* bottom right */}
        </pattern>

        {/* Second Pattern */}
        <pattern id="Pattern2" width={10} height={10} patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="10" y2="10" stroke="black" strokeWidth="1" />
        </pattern>

        {/* Third Pattern */}
        <pattern id="patternId" width="120" height="80" patternUnits="userSpaceOnUse" patternTransform="scale(1) rotate(0)">
          <rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,1)" />
          <path
            d="M-50.129,12.685C-33.346,12.358-16.786,4.918,0,5c16.787,0.082,43.213,10,60,10s43.213-9.918,60-10c16.786-0.082,33.346,7.358,50.129,7.685"
            strokeWidth="1"
            stroke="hsla(258.5,59.4%,59.4%,1)"
            fill="none"
          />
          <path
            d="M-50.129,32.685C-33.346,32.358-16.786,24.918,0,25c16.787,0.082,43.213,10,60,10s43.213-9.918,60-10c16.786-0.082,33.346,7.358,50.129,7.685"
            strokeWidth="1"
            stroke="hsla(339.6,82.2%,51.6%,1)"
            fill="none"
          />
          <path
            d="M-50.129,52.685C-33.346,52.358-16.786,44.918,0,45c16.787,0.082,43.213,10,60,10s43.213-9.918,60-10c16.786-0.082,33.346,7.358,50.129,7.685"
            strokeWidth="1"
            stroke="hsla(198.7,97.6%,48.4%,1)"
            fill="none"
          />
          <path
            d="M-50.129,72.685C-33.346,72.358-16.786,64.918,0,65c16.787,0.082,43.213,10,60,10s43.213-9.918,60-10c16.786-0.082,33.346,7.358,50.129,7.685"
            strokeWidth="1"
            stroke="hsla(47,80.9%,61%,1)"
            fill="none"
          />
        </pattern>


        
      </defs>

      {/* Use the first pattern */}
      <rect x="0" y="0" width="200" height="200" fill="url(#Pattern1)" />

      {/* Use the second pattern */}
      <rect x="200" y="0" width="200" height="200" fill="url(#Pattern2)" />

      {/* Use the third pattern */}
      <rect x="0" y="200" width="400" height="200" fill="url(#patternId)" />
    </svg>
  );
};

export default Pattern;
