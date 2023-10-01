import React, { useState } from 'react'

const Shapes = () => {
    const [color, setColor] = useState('#000');
    const [size, setSize] = useState(10);
    const [height, setHeight] = useState(100);

    const toolList = ['Waves', 'Gradient', 'Shapes', 'Pattern', 'Text'];
    const [selShape, setSelShape] = useState('triangle');

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
        width="1400"
        height="${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 100 C100 200 400 0 500 100 L500 0 L0 0 Z" fill="${color}" />
      </svg>`;
    }

    const shapes = {
        'triangle': (
            <svg width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 10,90 90,90" fill={color} />
            </svg>
        ),
        'rectangle': (
            <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="60" fill={color} />
            </svg>
        ),
        'tree': (
            <svg width={200} height={200} viewBox="-100 -100 200 200">
                <g transform="translate(0 5)">
                    <g>
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(72)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(-72)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(144)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(-144)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                </g>
            </svg>
        ),
        'circle': (
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill={color} />
            </svg>
        ),
        'star': (
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 61.8,35.3 90.4,35.3 68.2,57.5 79.6,82.7 50,66 20.4,82.7 31.8,57.5 9.6,35.3 38.2,35.3" fill={color} />
            </svg>
        ),
        'ellipse': (
            <svg width={500} height={500} xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="60" cy="40" rx="40" ry="20" fill={color} />
            </svg>
        ),
        'tree': (
            <svg width={500} height={500} viewBox="-100 -100 200 200">
                        <polygon points="0,0 80,120 -80,120" fill="#234236" />
                        <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
                        <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
                        <rect x={-20} y={120} width={40} height={30} fill="brown" />
                    </svg>
        ),
        'man' :(
            <svg
                        className="gingerbread"
                        width={500}
                        height={500}
                        viewBox="-100 -100 200 200"
                    >
                        <circle className="body" cx={0} cy={-50} r={30} />
                        <circle className="eye" cx={-12} cy={-55} r={3} />
                        <circle className="eye" cx={12} cy={-55} r={3} />
                        <rect className="mouth" x={-10} y={-40} width={20} height={5} rx={2} />
                        <line className="limb" x1={-40} y1={-10} x2={40} y2={-10} />
                        <line className="limb" x1={-25} y1={50} x2={0} y2={-15} />
                        <line className="limb" x1={25} y1={50} x2={0} y2={-15} />
                        <circle className="button" cx={0} cy={-10} r={5} />
                        <circle className="button" cx={0} cy={10} r={5} />
                    </svg>
        ),
        'frozen' : (
            <svg width={500} height={500} viewBox="-100 -100 200 200">
                        <defs>
                            <path
                                id="branch"
                                d="
  M 0 0 L 0 -90
  M 0 -20 L 20 -34
  M 0 -20 L -20 -34
  M 0 -40 L 20 -54
  M 0 -40 L -20 -54
  M 0 -60 L 20 -74
  M 0 -60 L -20 -74"
                                stroke="black"
                                strokeWidth={5}
                            />
                        </defs>
                        <use href="#branch" />
                        <use href="#branch" transform="rotate(60)" />
                        <use href="#branch" transform="rotate(120)" />
                        <use href="#branch" transform="rotate(180)" />
                        <use href="#branch" transform="rotate(240)" />
                        <use href="#branch" transform="rotate(300)" />
                    </svg>
        ),
    
    }


    return (
        <div>
            <div style={{ padding: 20 }}>

                <div>
                    <textarea className='form-control w-100' rows={5} value={getSvgCode()} />
                    <input type="color" onChange={updateColor} />
                    <input type="range" min={10} max={100} value={size} onChange={updateSize} />
                    <input type="range" min={100} max={1000} value={height} onChange={updateHeight} />

                    <div className='row'>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Choose Shapes

                                    <div className="row">
                                        {
                                            Object.keys(shapes).map((shape) => (
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="shape">
                                                                {shape}
                                                            </div>
                                                            <button onClick={() => {
                                                                setSelShape(shape)
                                                            }} className="btn btn-primary">Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div>
                                {shapes[selShape]}
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Shapes