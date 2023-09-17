import React, { useState } from 'react';

const GraphicCust = () => {
  const [color, setColor] = useState('#000');
  const [size, setSize] = useState(10);
  const [height, setHeight] = useState(100);

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

  const getSvgCode = () => {
    return `<svg
        width="100%"
        height="${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z" fill="${color}" />
      </svg>`;
  }

  return (
    <>
      <div className="sidebar">
        {/* Logo at the top */}
        <div className="sidebar-logo">
          <img src="emo.jpg" alt="Logo" />
        </div>
        <a href="#">Customizer</a>
        <div className="dropdown">
          <a href="#">customization tools</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
            <a href="#">Option 4</a>
            <a href="#">Option 5</a>
          </div>
        </div>
        
        {/* Social Icons at the bottom */}
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div style={{ marginLeft: 250, padding: 20 }}>
        {/* Your main content goes here */}
        <h1 className='display-3 cust'>CUSTOMIZER</h1>
        <hr />
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
          
          <svg width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 10,90 90,90" fill={color} />
          </svg>

          {/* RECTANGLE */}
          <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="60" fill={color} />
          </svg>

          {/* ELLIPSE */}
          <svg width="120" height="80" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="40" rx="40" ry="20" fill={color} />
          </svg>

          {/* LINE */}
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="10" x2="90" y2="90" stroke={color} stroke-width="2" />
          </svg>

          {/* STAR */}
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 61.8,35.3 90.4,35.3 68.2,57.5 79.6,82.7 50,66 20.4,82.7 31.8,57.5 9.6,35.3 38.2,35.3" fill={color} />
          </svg>

        </div>
      </div>
    </>
  );
}

export default GraphicCust;
