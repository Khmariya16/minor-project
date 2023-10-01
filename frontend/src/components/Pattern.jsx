import React, { useState } from 'react';



const Pattern = () => {
  const [color, setColor] = useState('#000');
  const [size, setSize] = useState(10);
  const [height, setHeight] = useState(100);


  const updateColor = (e) => {
    setColor(e.target.value);
  };

  const updateSize = (e) => {
    setSize(parseInt(e.target.value));
  };

  const updateHeight = (e) => {
    setHeight(parseInt(e.target.value));
  };


  const getSvgCode = () => {
    return `<svg
    width="100%"
    height="${height}"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z" fill="${color}" />
  </svg>`;
  };
  return (
    <div style={{ padding: 20 }}>
      <div>
        <textarea className="form-control w-100" rows={5} value={getSvgCode()} readOnly />
        <input type="color" value={color} onChange={updateColor} />
        <input type="range" min={10} max={100} value={size} onChange={updateSize} />
        <input type="range" min={100} max={1000} value={height} onChange={updateHeight} />
        <svg width={400} height={200} xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* First Pattern */}
            <pattern id="Pattern1" width={100} height={100} patternUnits="userSpaceOnUse">
              <circle fill={color} cx={50} cy={50} r={25} />
              <circle r={25} fill={color} />
              {/* top left */}
              <circle cx={100} r={25} fill={color} />
              {/* top right */}
              <circle cy={100} r={25} fill={color} />
              {/* bottom left */}
              <circle cx={100} cy={100} r={25} fill={color} />
              {/* bottom right */}
            </pattern>

            {/* Second Pattern */}
            <pattern id="Pattern2" width={10} height={10} patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="10" y2="10" stroke={color} strokeWidth="1" />
            </pattern>

            <pattern
              id="stripes"
              x={0}
              y={0}
              width={20}
              height={20}
              patternunits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={20} height={20} fill={color}>
                <line x1={0} y1={0} x2={20} y2={20} stroke="black" strokewidth={2}></line>
              </rect>
            </pattern>





          </defs>

          {/* Use the first pattern */}
          <rect x="0" y="0" width="200" height="200" fill="url(#Pattern1)" />

          {/* Use the second pattern */}
          <rect x="200" y="0" width="200" height="200" fill="url(#Pattern2)" />
            
            {/* Use the third pattern */}
          <rect x="200" y="0" width="200" height="200" fill="url(#stripes)" />




        </svg>
      </div>
    </div>
  );
};

export default Pattern;
