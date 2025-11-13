import "../pagesstyles/faqs.css"
function Faqs(){
    return(
        <>
           <div className="pagetwo">
             <div className="container">
          <div classNameName="banner-content">
            <h1>Faqs Question</h1>
            <div classNameName="breadcrumb">
              <span><i className="fa-solid fa-house"></i>  Home</span>
              <span classNameName="separator"> / </span>
              <span classNameName="current">Faqs Question</span>
            </div>
          </div>
        </div>
        
           </div>
          <div className="faq py-5">
  <div className="container">
    <div className="row g-4">
      {/* Left Column */}
      <div className="col-md-6">
        <div className="accordion" id="faqLeft">
          
          {/* Question 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header ">
              <button
                className="accordion-button bg-warning text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q1"
                aria-expanded="true"
              >
                What are the clinic's working hours?
              </button>
            </h2>
            <div
              id="q1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqLeft"
            >
              <div className="accordion-body">
                Saturday to Thursday: 9:00 AM – 9:00 PM<br />
                Friday: 2:00 PM – 10:00 PM
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-warning text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q2"
              >
                Can I book an appointment online?
              </button>
            </h2>
            <div
              id="q2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqLeft"
            >
              <div className="accordion-body">
                Yes, you can easily <strong>book online</strong> through the Booking page.
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-warning text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q3"
              >
                Do you accept health insurance?
              </button>
            </h2>
            <div
              id="q3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqLeft"
            >
              <div className="accordion-body">
                Yes, we are contracted with most insurance providers. Please bring your insurance card.
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-warning text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q4"
              >
                How much is the consultation fee?
              </button>
            </h2>
            <div
              id="q4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqLeft"
            >
              <div className="accordion-body">
                Starts from <strong>300 EGP</strong>, varies by specialty and doctor.
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-warning text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q5"
              >
                Is there parking available?
              </button>
            </h2>
            <div
              id="q5"
              className="accordion-collapse collapse"
              data-bs-parent="#faqLeft"
            >
              <div className="accordion-body">
                Yes, free parking is available in front of the clinic.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-md-6">
        <div className="accordion" id="faqRight">
          
          {/* Question 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-primary text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q6"
                aria-expanded="true"
              >
                Can I get lab tests done at the clinic?
              </button>
            </h2>
            <div
              id="q6"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqRight"
            >
              <div className="accordion-body">
                Yes, we have a fully equipped in-house laboratory.
              </div>
            </div>
          </div>

          {/* Question 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-primary text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q7"
              >
                Is there a pharmacy inside the clinic?
              </button>
            </h2>
            <div
              id="q7"
              className="accordion-collapse collapse"
              data-bs-parent="#faqRight"
            >
              <div className="accordion-body">
                Yes, a 24/7 pharmacy is available inside the building.
              </div>
            </div>
          </div>

          {/* Question 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-primary text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q8"
              >
                Can I visit a patient in the hospital?
              </button>
            </h2>
            <div
              id="q8"
              className="accordion-collapse collapse"
              data-bs-parent="#faqRight"
            >
              <div className="accordion-body">
                Yes, visiting hours are from 4:00 PM to 8:00 PM daily.
              </div>
            </div>
          </div>

          {/* Question 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-primary text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q9"
              >
                Do you have 24/7 emergency services?
              </button>
            </h2>
            <div
              id="q9"
              className="accordion-collapse collapse"
              data-bs-parent="#faqRight"
            >
              <div className="accordion-body">
                Yes, our emergency department operates 24/7.
              </div>
            </div>
          </div>

          {/* Question 10 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-primary text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q10"
              >
                How can I cancel or reschedule my appointment?
              </button>
            </h2>
            <div
              id="q10"
              className="accordion-collapse collapse"
              data-bs-parent="#faqRight"
            >
              <div className="accordion-body">
                Call us at least 24 hours in advance on <strong>0100 123 4567</strong> or via the Booking page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>

    )
}
export default Faqs