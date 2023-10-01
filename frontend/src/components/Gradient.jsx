import React, { useState } from 'react';

const GradientExample = () => {
  const [gradientColor, setGradientColor] = useState('red');

  const [colorList, setColorList] = useState(['#f00', '#00f', '#0f0']);

  const handleGradientColorChange = (event) => {
    setGradientColor(event.target.value);
  };

  const addNewColor = (color = '#000') => {
    setColorList([...colorList, color]);
  }

  return (
    <div>
      <div></div>
      <svg width={'100%'} height={300} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Define a linear gradient with dynamic color */}
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {
              colorList.map((color, index) => (
                <stop offset={(100 / colorList.length * index) + "%"} stopColor={color} />
              ))
            }
            {/* <stop offset="0%" stopColor={gradientColor} />
            <stop offset="50%" stopColor="green" />
            <stop offset="100%" stopColor="blue" /> */}
          </linearGradient>
        </defs>

        {/* Apply the linear gradient to a rectangle */}
        <rect x="10" y="10" width="100%" height="300" fill="url(#myGradient)" />


        {/* You can add more elements here with the same gradient */}
      </svg>
      <button onClick={addNewColor}>Add Color to gradient</button>
      {
        colorList.map((color, index) => (
          <input
            type="color"
            value={color}
            onChange={(e) => {
              const newColorList = [...colorList];
              newColorList[index] = e.target.value;
              setColorList(newColorList);
            }}
          />
        ))
      }
    </div>
  );
};

export default GradientExample;
