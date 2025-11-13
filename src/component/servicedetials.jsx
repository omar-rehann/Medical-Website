import "../pagesstyles/aboutpages.css";
import servicedetails from "../img/servicedetials.jpg";
import pdfone from "../img/pdf1.png";
import pdftwo from "../img/pdf2.png";
import "../styles/servicesdetials.css"

function ServiceDetails() {
  return (
    <>
      {/* Banner Section */}
      <div className="pageone">
        <div className="container">
          <div className="banner-content">
            <h1>Service Details</h1>
            <div className="breadcrumb">
              <span>
                <i className="fa-solid fa-house"></i> Home
              </span>
              <span className="separator"> / </span>
              <span className="current">Service Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="image mb-4">
                <img src={servicedetails} alt="Service Details" className="img-fluid" />
              </div>

              <div className="text mb-5">
                <h2>Why Medical Had Been So Popular Till Now?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="row mb-5">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li><h5>✓ Then along come two they</h5></li>
                    <li><h5>✓ That’s just a little bit more than</h5></li>
                    <li><h5>✓ Standard dummy text ever since</h5></li>
                    <li><h5>✓ Simply dummy text of the printing</h5></li>
                    <li><h5>✓ Make a type specimen book</h5></li>
                  </ul>
                </div>

                <div className="col-md-6">
                  {/* Progress Bars */}
                  <div className="progress_one mb-4">
                    <div className="d-flex justify-content-between">
                      <h5>Advanced Technology</h5>
                      <h5>96%</h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "96%" }}
                        aria-valuenow={96}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>

                  <div className="progress_two mb-4">
                    <div className="d-flex justify-content-between">
                      <h5>Certified Engineers</h5>
                      <h5>79%</h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "79%" }}
                        aria-valuenow={79}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>

                  <div className="progress_three mb-4">
                    <div className="d-flex justify-content-between">
                      <h5>6 Years Experience</h5>
                      <h5>75%</h5>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="question mb-4">
                <h4>Popular Questions</h4>
                <p>
                  Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How Doctor can Ease your pain?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do I withdraw from a subject?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Understand doctor before you regret
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What types of systems do you support?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      We Teach You How to Feel Better
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How Can I Contact You?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">
                      You can reach us via email at info@example.com or call us at +123-456-7890.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-md-6">
              <div className="layes mb-5">
                <h5 className="border-bottom pb-3 mb-3">Our Services</h5>
                <ul className="list-unstyled">
                  <li className="mb-3"><h5>Engine Diagnostics <i className="fa-solid fa-chevron-right ms-2"></i></h5></li>
                  <li className="mb-3"><h5>Lube Oil And Filters <i className="fa-solid fa-chevron-right ms-2"></i></h5></li>
                  <li className="mb-3"><h5>Belts And Hoses <i className="fa-solid fa-chevron-right ms-2"></i></h5></li>
                  <li className="mb-3"><h5>Brake Repair <i className="fa-solid fa-chevron-right ms-2"></i></h5></li>
                  <li className="mb-3"><h5>Air Conditioning <i className="fa-solid fa-chevron-right ms-2"></i></h5></li>
                  <li className="mb-3"><h5>Tire And Wheel Services <i className="fa-solid fa-chevron-right ms-2"></i></h5></li>
                </ul>
              </div>

              <div className="download">
  <h4 className="mb-4 fw-bold text-primary">Download Resources</h4>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Engine Diagnostic Services Catalog 2025</h5>
      <a href="/downloads/diagnostic-catalog-2025.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(3.2 MB)</small>
      </a>
    </div>
  </div>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Full Maintenance & Repair Price List 2025</h5>
      <a href="/downloads/price-list-2025.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(1.8 MB)</small>
      </a>
    </div>
  </div>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Pre-Purchase Vehicle Inspection Checklist (70 Points)</h5>
      <a href="/downloads/pre-purchase-checklist.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(2.1 MB)</small>
      </a>
    </div>
  </div>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Ramadan Special Offers 2025 – Up to 40% Off</h5>
      <a href="/downloads/ramadan-offers-2025.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(4.7 MB)</small>
      </a>
    </div>
  </div>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Official Certifications & Licenses</h5>
      <a href="/downloads/certificates-2025.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(5.9 MB)</small>
      </a>
    </div>
  </div>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Summer Car Care Guide & Tips</h5>
      <a href="/downloads/summer-car-care.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(2.5 MB)</small>
      </a>
    </div>
  </div>

  <div className="folder d-flex align-items-center mb-3 p-3 border rounded hover-shadow transition">
    <i className="fa-solid fa-file-pdf text-danger fs-4 me-3"></i>
    <div>
      <h5 className="mb-1 fw-semibold">Extended Warranty Program Details</h5>
      <a href="/downloads/warranty-program.pdf" className="text-primary fw-medium" download>
        Download PDF <small>(1.4 MB)</small>
      </a>
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

export default ServiceDetails;