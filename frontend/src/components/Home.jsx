import React from 'react'



const Home = () => {
  return (
    <div>

      <main>
        {/* HEADER */}
        <div className="intro">
          <h1>A Web Developer</h1>
          <p>I am a web developer and I love to create websites.</p>
          <button>Learn More</button>
        </div>


        {/* ROW 1 */}
        <div className="row">
          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-atom" />
                <p className="work-heading">Projects</p>
                <p className="work-text">
                  I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-skiing" />
                <p className="work-heading">Skills</p>
                <p className="work-text">
                  I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-ethernet" />
                <p className="work-heading">Network</p>
                <p className="work-text">
                  I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-atom" />
                <p className="work-heading">Projects</p>
                <p className="work-text">
                  I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-skiing" />
                <p className="work-heading">Skills</p>
                <p className="work-text">
                  I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="achievements">
              <div className="work">
                <i className="fas fa-ethernet" />
                <p className="work-heading">Network</p>
                <p className="work-text">
                  I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* ABOUT 1*/}
        <div className="about-me">
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
        <div className="about-me">
          <div className="about-me-text">
            <h2>Change Color of Individual  <br />
              SVG Elements</h2>
            <p>
              our SVG Editor is at your service with a user-friendly interface <br />
              and instant color modification capabilities. <br />
              Transform your SVG files into captivating works of art with ease.
            </p>
          </div>
          <img
            src="https://static-assets.pixelied.com/features/svg-editor/toolkit2-graphic.webp?v=1"
            alt="me"

          />
        </div>


        {/* ABOUT 3*/}
        <div className="about-me">
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

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card card-block">

                <img
                  src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and e-commerce
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card card-block">

                <img
                  src="https://static.pexels.com/photos/7357/startup-photos.jpg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                <p className="card-text">
                  This is a company that builds websites, web .
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card card-block">

                <img
                  src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and e-commerce
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card card-block">

                <img
                  src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and e-commerce
                  solutions.
                </p>
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