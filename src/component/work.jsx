import "../styles/work.css"
import anmationone from "../img/logo1.png"
import anmationtwo from "../img/logo2.png"
import anmationthree from "../img/logo3.png"
import anmationfour from "../img/logo4.png"


function Work(){
    return(
        <>
        <div className="work">
            <div className="continer">
                <h2>Working Process</h2>
                <h1>How we works?</h1>
            </div>
           <div className="content">
  <div className="row g-2 m-2">

    <div className="col-md-4">
      <div className="card">
        <h1>01</h1>
        <h2>Make Appointment</h2>
        <p>Book your appointment easily with our professional medical staff and experts.</p>
        <div className="buutons">
          <button>View More</button>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <h1>02</h1>
        <h2>Take Treatment</h2>
        <p>Receive personalized treatment and care using the latest medical technologies.</p>
        <div className="buutons">
          <button>View More</button>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <h1>03</h1>
        <h2>Registration</h2>
        <p>Register quickly and manage your medical profile securely with us.</p>
        <div className="buutons">
          <button>View More</button>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <h1>04</h1>
        <h2>Health Checkup</h2>
        <p>Comprehensive health checkups to help you monitor your wellness regularly.</p>
        <div className="buutons">
          <button>View More</button>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <h1>05</h1>
        <h2>Emergency Care</h2>
        <p>24/7 emergency support and professional medical attention when needed most.</p>
        <div className="buutons">
          <button>View More</button>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card">
        <h1>06</h1>
        <h2>Laboratory Test</h2>
        <p>Accurate lab testing and diagnostics to ensure the best medical outcomes.</p>
        <div className="buutons">
          <button>View More</button>
        </div>
      </div>
    </div>

  </div>
</div>
  <div className="anmation">
            <div className="image frist">
                <img src={anmationone} alt="" />
            </div>
            <div className="image second">
                <img src={anmationtwo} alt="" />
            </div>
             <div className="image three">
                <img src={anmationthree} alt="" />
            </div>
             <div className="image four">
                <img src={anmationfour} alt="" />
            </div>
          
        </div>

        </div>
        </>
    )
}
export default Work