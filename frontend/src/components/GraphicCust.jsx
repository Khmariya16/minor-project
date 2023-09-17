import React, { useState } from 'react';
import Wave from './Wave';

const GraphicCust = () => {


  const toolList = ['Waves', 'Gradient', 'Shapes'];
  const [selTool, setSelTool] = useState('');

  const displaySelTool = () => {
    if (selTool === 'Waves') {
      return <Wave />
    }
    else if (selTool === 'Gradient') {
      return <Wave />
    }
    else if (selTool === 'Shapes') {
      return <Wave />
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-dark vh-100">
            <div className="card-body">
              <div className="sidebar-logo">
                <img src="emo.jpg" alt="Logo" />
              </div>
              <a href="#">Customizer</a>


              <select onChange={(e) => {
                setSelTool(e.target.value)
              }} className='form-control'>
                <option value="">No Option Selected</option>
                {
                  toolList.map((tool) => (
                    <option value={tool}>{tool}</option>
                  )
                  )
                }
              </select>

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
          </div>
        </div>
        <div className="col-md-9">
          <h1 className='display-3 cust'>CUSTOMIZER</h1>
          <hr />
          {displaySelTool()}
        </div>
      </div>
    </>
  );
}

export default GraphicCust;
