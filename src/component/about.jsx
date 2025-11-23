import "../styles/about.css"
import "../styles/all.css"
import imgone from "../img/aboutone.jpg"
import imgtwo from "../img/abouttwo.jpg";
import circle from "../img/circle.png"
import square from "../img/sqaure.png"
import squaretwo from "../img/sqauretwo.png"
import  sea from "../img/logo5.png"

function About(){
    return(
        <>
        <div className="about">
            <div className="row g-2   align-items-center  ">
                <div className="col-md-7">
                    <div className="image_frist d-flex flex-wrap flex-md-nowrap">
                        <img src={imgone} className="frist" alt="" />
                        <img src={imgtwo} className="second" alt="" />


                    </div>
                    <div className="image_second d-flex ">
    <div className="number">
  <h1>100+</h1>
  <h1>Qualified Doctors</h1>
</div>
<div className="number">
  <h1>5k+</h1>
  <h1>Successful Treatments</h1>
</div>



                    </div>

                </div>
                <div className="col-md-5">
                   <div className="text">
                     <h5>About</h5>
                    <h1>The Great Place Of Medical Hospital Center</h1>
                    <p><p>Our hospital combines trusted medical advice with advanced technology to deliver exceptional patient care.</p></p>
                    <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                    <p>We deliver personalized health advice supported by innovative technologies to enhance every patient's journey.</p>
                   </div>
                  <div className="container my-5">
  <div className="row g-4 justify-content-center">
    <div className="col-lg-6">
      <div className="row g-3 g-md-4">
        {/* Emergency Help */}
        <div className="col-12 col-md-12">
          <div className="icon-box text-center p-4 rounded-3 shadow-sm hover-bg">
            <i className="fa-solid fa-truck-medical fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">Emergency Help</h5>
            <p className="text-muted small">24/7 ambulance service</p>
          </div>
        </div>

        {/* Qualified Doctors */}
        <div className="col-12 col-md-12">
          <div className="icon-box text-center p-4 rounded-3 shadow-sm hover-bg">
            <i className="fa-solid fa-stethoscope fs-1 text-success mb-3"></i>
            <h5 className="fw-bold">Qualified Doctors</h5>
            <p className="text-muted small">Expert medical team</p>
          </div>
        </div>

        
      </div>
    </div>

    <div className="col-lg-6">
      <div className="row g-3 g-md-4">
        <div className="col-12 col-md-12">
          <div className="icon-box text-center p-4 rounded-3 shadow-sm hover-bg">
            <i className="fa-solid fa-heart-pulse fs-1 text-danger mb-3"></i>
            <h5 className="fw-bold">Free Check-up</h5>
            <p className="text-muted small">Regular health tests</p>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="icon-box text-center p-4 rounded-3 shadow-sm hover-bg">
            <i className="fa-solid fa-headset fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">24/7 Support</h5>
            <p className="text-muted small">Always here to help</p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* الزر في المنتصف تحت الكل */}
  <div className="text-center mt-5">
    <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow">
      Read More
    </button>
  </div>
</div>

                </div>
            </div>
            <div className="anmation">
                <div className="anone">
                    <img src={circle} alt="" />
                </div>
                 <div className="antwo">
                    <img src={square} alt="" />
                </div>
                 <div className="anthree">
                    <img src={squaretwo} alt="" />
                </div>
                 <div className="anfour">
                    <img src={sea} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default About