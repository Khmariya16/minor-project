import React, { useState } from 'react'

const GraphicCust = () => {

  const [color, setColor] = useState('#000');
  const [size, setSize] = useState(10);
  const [height, setHeight] = useState(100);

  const [radius, setRadius] = useState(0);

  const updateColor = (e) => {
    const val = e.target.value;
    setColor(val);
  }

  const updateSize = (e) => {
    const val = e.target.value;
    setSize(parseInt(val));
  }

  const updateHeight = (e) => {
    const val = e.target.value;
    setHeight(parseInt(val));
  }

  const updateRadius = (e) => {
    const val = e.target.value;
    setRadius(parseInt(val));
  }


  const getSvgCode = () => {
    return `<svg
    width="100%"
    height="${height}"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z" fill="${color}" />
  </svg>`
  }


  return (
   
    
    
    <div>





      <textarea className='form-control w-100' rows={5} value={getSvgCode()} />
      <input type="color" onChange={updateColor} />
      <input type="range" min={10} max={100} value={size} onChange={updateSize} />
      <input type="range" min={100} max={1000} value={height} onChange={updateHeight} />
      <svg>
        <circle cx={50} cy={50} r={size} fill={color} />
      </svg>
      <svg
        width="100%"
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z" fill={color} />

        
      </svg>
    </div>
  )
}

export default GraphicCust