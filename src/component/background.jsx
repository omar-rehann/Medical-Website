import doctor from "../img/frist.png"
import "../styles/all.css"
import "../styles/back.css"
import anmationone from "../img/logo1.png"
import anmationtwo from "../img/logo2.png"
import anmationthree from "../img/logo3.png"
import anmationfour from "../img/logo4.png"





function BackGround(){
    return(
        <>
       <div className="back m-2">
         <div className="row  align-items-center  ">
             <div className="col-md-6">
                <div className="text">
                    <h4>We Provide All Health Care Solution</h4>
                    <h1>Protect Your Health And </h1>
                    <h1>Take Care To Of Your Health</h1>
                    <button>Read More</button>

                </div>

            </div>
            <div className="col-md-6">
                <div className="image">
                    <img src={doctor}  alt="" />
                    
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
export default BackGround