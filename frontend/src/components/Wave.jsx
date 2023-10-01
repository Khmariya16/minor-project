import React, { useState } from 'react';

const Wave = () => {
    const [color, setColor] = useState('#000');
    const [size, setSize] = useState(10);
    const [height, setHeight] = useState(500);

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
        width="${size}"
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
                <input type="range" min={10} max={500} value={size} onChange={updateSize} />
                <input type="range" min={100} max={200} value={height} onChange={updateHeight} />
                <div>
                    <svg
                        width={size}
                        height={height}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d={`M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z`} fill={color} />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Wave;
