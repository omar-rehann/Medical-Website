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
                   <div className="row">
                    <div className="col-md-6">
                        <div className="icon">
                            <div className="box frist">
                                <i className="fa-solid fa-truck-medical frist"></i>
                                <h4>Emergency Help</h4>
                                
                            </div>
                            <div className="box second">
                                <i className="fa-solid fa-stethoscope"></i>
                                <h4>Qualified Doctors</h4>
                                
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="icon">
                            <div className="box three">
                                <i className="fa-solid fa-user-tie"></i>
                                <h4>Best Professionals</h4>
                                
                            </div>
                            <div className="box four">
                                <i className="fa-solid fa-notes-medical"></i>
                                <h4>Medical Treatment</h4>
                                
                            </div>

                        </div>

                    </div>
                    <button>Read More</button>
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