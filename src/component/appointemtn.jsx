import "../styles/book.css";
import mobile from "../img/mobile.png";
import girl from "../img/girl.png";
import location from "../img/loction.png";
import setting from "../img/setting.png";
import truee from "../img/true.png";
import anmationtwo from "../img/logo2.png"


function Book() {
  return (
    <>
      <div className="book container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <form className="booking-form">
              <h2 className="form-title">Book Appointments</h2>

              <select className="form-select form-select-lg mb-3">
                <option selected>Select Departments</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select className="form-select form-select-lg mb-3">
                <option selected>Select Doctor</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <input type="text" placeholder="Your Name" />
              <input type="password" placeholder="Your Password" />
              <textarea rows={3} placeholder="Your Message"></textarea>

              <button className="btn-book">Appointments Now</button>
            </form>
          </div>
          <div className="col-md-6 position-relative text-center">
            <div className="mobile-wrapper">
              <img src={mobile} alt="mobile" className="mobile" />
              <img src={location} alt="location" className="around-img img1" />
              <img src={girl} alt="girl" className="around-img img2" />
              <img src={truee} alt="true" className="around-img img3" />
              <img src={setting} alt="setting" className="around-img img4" />
            </div>
          </div>
        </div>
          <div className="anmation">
                   
                    <div className="image second">
                        <img src={anmationtwo} alt="" />
                    </div>
                     
                  
                </div>
      </div>
    </>
  );
}

export default Book;
