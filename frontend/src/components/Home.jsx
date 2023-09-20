import React from 'react'



const Home = () => {
  return (
    <div>

      <main>
        {/* HEADER */}
        <div className="intro">
          <h3>ALL-IN-ONE DESIGN SOFTWARE SUIT</h3>
          <p>A rich assortment of online editing tools, brimming with templates, <br />
              icons, illustrations, and more for your creative projects.</p>
          <button>Create</button>
        </div>

        {/* heading of rows */}
        <div style={{ background: 'linear-gradient( #ddd6f3 , #faaca8)' }}>
        <div className="container ">
          <h4 className="display-4 text-center heads">
            SVG Editor with More Customizations
          </h4>
        </div>


        {/* ROW 1 */}
        <div className="container">
        <div className="row rows">
          <div className="col-md-4">
            <div className="achievements ">
              <div className="work">
                <i className="fas fa-atom" />
                <p className="work-heading">Crop</p>
                <p className="work-text">
                Crop out unnecessary elements from your SVG to improve its composition using the crop tool.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-skiing" />
                <p className="work-heading">Border</p>
                <p className="work-text">
                Add a border of specific color and width to your SVG to highlight the icon
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-ethernet" />
                <p className="work-heading">Drop Shadow</p>
                <p className="work-text">
                Drop shadows from SVG images to induce a sense of three-dimensional depth.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* ROW 2 */}
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-atom" />
                <p className="work-heading">Rotate</p>
                <p className="work-text">
                Use the rotate tool to spin around SVG elements left or right and play around with perspectives.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-skiing" />
                <p className="work-heading">Opacity</p>
                <p className="work-text">
                Adjust the visibility of SVG files using the opacity tool to increase or decrease their prominence.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-ethernet" />
                <p className="work-heading">Flip</p>
                <p className="work-text">
                Flip and mirror SVG files upside down or sideways to obtain perfect orientation using the flip tool.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        


        {/* ABOUT 1*/}
        <div className="about-me me">
          <div className="about-me-text">
            <h2>Free Online SVG Editor <br />
              Tool</h2>
            <p>
              <h4>"Unlock Your Creativity with Our Free Online SVG Creator! <br /></h4>

              Are you looking for a hassle-free way to bring your ideas to life <br />
              through stunning vector graphics? <br />
              Look no further! Our Free Online SVG Creator empowers <br />
              you to design and craft beautiful SVG (Scalable Vector Graphics) <br />

            </p>
          </div>
          <img
            src="https://static-assets.pixelied.com/features/svg-editor/toolkit1-graphic.webp?v=1"
            alt="me"
          />
        </div>


        {/* ABOUT 2*/}
        <div className="about-me me">
          <div className="about-me-text">
            <h2>Change Color of Individual  <br />
              SVG Elements</h2> <br />
            <p>
              our SVG Editor is at your service with a user-friendly interface <br />
              and instant color modification capabilities. <br />
              Transform your SVG files into <br /> captivating works of art with ease.
            </p>
          </div>
          <img
            src="https://static-assets.pixelied.com/features/svg-editor/toolkit2-graphic.webp?v=1"
            alt="me"

          />
        </div>


        {/* ABOUT 3*/}
        <div className="about-me me">
          <div className="about-me-text">
            <h2>Merge, Rotate & Resize <br />
              Multiple SVG Files</h2><br />
            <p>
              <h4>Unleash Your Imagination: Merge, Resize,
                Colorize,
                <br /></h4>

              You can merge several SVGs together, change <br />
              their sizes and colors individually or in bulk, <br />
              rotate and orient them as required, and create a whole new entity!
            </p>
          </div>
          <img
            src="https://static-assets.pixelied.com/features/svg-editor/toolkit4-graphic.webp?v=1"
            alt="me"
            className='myimg3'
          />
        </div>

        <hr />


        {/* HOW TO EDIT */}


        <div _ngcontent-serverapp-c85="" class="d-flex flex-column align-items-center">
          <h2 _ngcontent-serverapp-c85=""> How to edit an SVG file in 4 steps </h2>
          <p _ngcontent-serverapp-c85="" class="sub-text"> Edit SVG files online without the need for complex software to create and modify flash icons and create something extraordinary. Use Pixelied's online SVG maker and editor tool to get this done in moments. Here's how.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3">

              <div className="card mt-5">
                <div className="card-header"><button>step1</button></div>
                <img src="https://static-assets.pixelied.com/features/svg-editor/step1-graphic.webp?v=1"

                  className="card-img-top img-fluid"
                  alt="Card Image 1" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 1</h5>
                  <p className="card-text">This is some sample text for Card 1.</p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header"><button>step2</button></div>
                <img src="https://static-assets.pixelied.com/features/svg-editor/step2-graphic.webp?v=1"
                  className="card-img-top img-fluid"
                  alt="Card Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 2</h5>
                  <p className="card-text">This is some sample text for Card 2.</p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header"><button>step3</button></div>
                <img src="https://static-assets.pixelied.com/features/svg-editor/step3-graphic.webp?v=1"
                  className="card-img-top img-fluid"
                  alt="Card Image 3" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">This is some sample text for Card 3.</p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header"><button>step4</button></div>
                <img src="https://static-assets.pixelied.com/features/svg-editor/step4-graphic.webp?v=1"
                  className="card-img-top img-fluid"
                  alt="Card Image 4" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 4</h5>
                  <p className="card-text">This is some sample text for Card 4.</p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <hr />

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}



      </main>


    </div>

  )
}

export default Home