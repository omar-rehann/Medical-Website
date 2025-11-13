import "../pagesstyles/aboutpages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css"

function Contact() {
  return (
    <>      <div className="pageone">
         <div className="container">
          <div className="banner-content">
            <h1>Contact Us</h1>
            <div className="breadcrumb">
              <span><i class="fa-solid fa-house"></i> Home </span>
              <span className="separator"> / </span>
              <span className="current"> Contact Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content py-5">
        <div className="container">
          <div className="form bg-white rounded-4 shadow-lg overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6 p-4 p-lg-5 d-flex align-items-center">
                <form className="w-100">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-semibold"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-6 bg-light p-4 p-lg-5 d-flex align-items-center">
                <div className="informtion w-100">
                  <h2 className="h3 fw-bold text-dark">Contact Us for Any</h2>
                  <h3 className="h4 fw-semibold text-primary mb-4">Information</h3>

                  <div className="loction mb-4">
                    <h4 className="h5 fw-semibold text-secondary">Location</h4>
                    <p className="text-muted mb-0">
                      123 Business St., Suite 100<br />
                      City, State 12345
                    </p>
                  </div>

                  <div className="email mb-4">
                    <h4 className="h5 fw-semibold text-secondary">Email & Phone</h4>
                    <p className="text-muted mb-0">
                      hello@example.com<br />
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div className="follow">
                    <h4 className="h5 fw-semibold text-secondary">Follow Us</h4>
                    <div className="social d-flex gap-3">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;