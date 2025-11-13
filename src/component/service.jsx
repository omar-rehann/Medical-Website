import "../pagesstyles/aboutpages.css";

import Navbar from "../component/navbar"

import ThreeCards from "../component/cards"
import Doctor from "../component/doctor"
import News from "../component/news"
import Footer from "../component/footer"

function Service(){
    return(
        <>
        <Navbar/>
          <div className="pageone">
        <div className="container">
          <div className="banner-content">
            <h1>Services</h1>
            <div className="breadcrumb">
              <span><i class="fa-solid fa-house"></i> Home </span>
              <span className="separator">  /  </span>
              <span className="current"> Services </span>
            </div>
          </div>
        </div>
      </div>
      <div className="boxes py-5 bg-light">
  <div className="container">
    <div className="row g-4">
      
      {/* Diagnostics */}
      <div className="col-md-6 col-lg-6">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-primary text-white d-flex align-items-center justify-content-center">
            <i className="fas fa-stethoscope fa-3x"></i>
          </div>
          <div className="text p-4">
            <h2 className="h4 fw-bold text-primary mb-3">Advanced Diagnostics</h2>
            <p className="text-muted mb-4">
              State-of-the-art MRI, CT scans, X-rays, and laboratory tests with 24-hour results.
            </p>
            <button className="btn btn-outline-primary rounded-pill px-4 hover-bg-primary hover-text-white transition">
              View More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Treatment */}
      <div className="col-md-6 col-lg-6">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-success text-white d-flex align-items-center justify-content-center">
            <i className="fas fa-prescription-bottle-alt fa-3x"></i>
          </div>
          <div className="text p-4">
            <h2 className="h4 fw-bold text-success mb-3">Personalized Treatment</h2>
            <p className="text-muted mb-4">
              Custom treatment plans by expert doctors using latest medical protocols.
            </p>
            <button className="btn btn-outline-success rounded-pill px-4 hover-bg-success hover-text-white transition">
              View More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Surgery */}
      <div className="col-md-6 col-lg-4">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-danger text-white d-flex align-items-center justify-content-center">
            <i className="fas fa-scalpel fa-3x"></i>
          </div>
         
        </div>
        
      </div>

      {/* Emergency */}
      <div className="col-md-6 col-lg-12">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-warning text-dark d-flex align-items-center justify-content-center">
            <i className="fas fa-ambulance fa-3x"></i>
          </div>
          <div className="text p-4">
            <h2 className="h4 fw-bold text-warning mb-3">24/7 Emergency Care</h2>
            <p className="text-muted mb-4">
              Fully equipped ER with trauma specialists available round the clock.
            </p>
            <button className="btn btn-outline-warning rounded-pill px-4 hover-bg-warning hover-text-dark transition">
              View More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
       <div className="col-md-6 col-lg-12">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-warning text-dark d-flex align-items-center justify-content-center">
<i class="fa-solid fa-suitcase-medical fa-3x"></i>          </div>
          <div className="text p-4">
            <h2 className="h4 fw-bold text-warning mb-3">24/7 Emergency Care</h2>
            <p className="text-muted mb-4">
              Fully equipped ER with trauma specialists available round the clock.
            </p>
            <button className="btn btn-outline-warning rounded-pill px-4 hover-bg-warning hover-text-dark transition">
              View More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Vaccine */}
      <div className="col-md-6 col-lg-6">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-info text-white d-flex align-items-center justify-content-center">
            <i className="fas fa-syringe fa-3x"></i>
          </div>
          <div className="text p-4">
            <h2 className="h4 fw-bold text-info mb-3">Vaccination Center</h2>
            <p className="text-muted mb-4">
              All WHO-approved vaccines for children & adults including flu & travel shots.
            </p>
            <button className="btn btn-outline-info rounded-pill px-4 hover-bg-info hover-text-white transition">
              View More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Qualified Doctors */}
      <div className="col-md-6 col-lg-6">
        <div className="box bg-white rounded-4 shadow-sm border-0 overflow-hidden transition hover-shadow-lg hover-scale">
          <div className="icon bg-dark text-white d-flex align-items-center justify-content-center">
<i class="fa-solid fa-notes-medical fa-3x"></i>          </div>
          <div className="text p-4">
            <h2 className="h4 fw-bold text-info mb-3">World-Class Doctors</h2>
            <p className="text-muted mb-4">
              All WHO-approved vaccines for children & adults including flu & travel shots.
            </p>
            <button className="btn btn-outline-info rounded-pill px-4 hover-bg-info hover-text-white transition">
              View More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
      <ThreeCards/>
      <Doctor/>
      <News/>
      <Footer/>
        </>
    )
}
export default Service