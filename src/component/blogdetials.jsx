import "../pagesstyles/aboutpages.css";
import imgone from "../img/blogdetials.jpg";
import imgtwo from "../img/blogdetilstwo.jpg";
import imgthree from "../img/blogdetailsthree.jpg";
import comment1 from "../img/c1.jpg";
import comment2 from "../img/c2.jpg";
import comment3 from "../img/c3.jpg";
import comment4 from "../img/c4.jpg";
import postone from "../img/p1.jpg";
import posttwo from "../img/p2.jpg";
import postthree from "../img/p3.jpg";
import postfour from "../img/p4.jpg";
import gallery1 from "../img/g1.jpg";
import gallery2 from "../img/g2.jpg";
import gallery3 from "../img/g3.jpg";
import gallery4 from "../img/g4.jpg";
import gallery5 from "../img/g5.jpg";
import gallery6 from "../img/g6.jpg";
import "../styles/blogdetials.css"
// import "../pagesstyles/aboutpages.css";


import News from "../component/news";

function BlogDetiailss() {
    return (
        <>
           <div className="pageone">
        <div className="container">
          <div className="banner-content">
            <h1>Blog Detials </h1>
            <div className="breadcrumb">
              <span><i class="fa-solid fa-house"></i> Home </span>
              <span className="separator"> / </span>
              <span className="current">Blog Detials</span>
            </div>
          </div>
        </div>
      </div>

            <div className="content py-5 bg-light">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="image mb-4 overflow-hidden rounded-4 shadow-lg">
                                <img 
                                    src={imgone} 
                                    className="w-100 img-fluid rounded-4 transition hover-scale" 
                                    alt="Person building powerful daily habits in 2025 - Productivity mastery"
                                />
                            </div>                            <div className="info d-flex flex-wrap align-items-center gap-4 mb-4 text-muted">
                                <div className="person d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-user text-primary fs-4"></i>
                                    <h3 className="fw-bold mb-0">Alex Thompson</h3>
                                </div>
                                <div className="date d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-calendar text-primary fs-4"></i>
                                    <h5 className="mb-0 fw-semibold">November 12, 2025</h5>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-clock text-primary"></i>
                                    <span>8 min read</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-eye text-primary"></i>
                                    <span>28.4K views</span>
                                </div>
                            </div>

                            {/* Title & Intro */}
                            <div className="text mb-5">
                                <h1 className="display-5 fw-bold text-indigo mb-4">
                                    7 Proven Habits That Will Double Your Productivity in 2025
                                </h1>
                                <p className="lead fs-4 text-dark">
                                    I tested 50+ productivity systems over 4 years. These 7 habits let me finish a full day's work in just 4 hours — consistently. Here's exactly how to build them.
                                </p>
                            </div>

                            <div className="oranged bg-gradient text-dark p-5 rounded-4 shadow-lg mb-5 position-relative overflow-hidden">
                                <div className="icon position-absolute top-0 end-0 opacity-20 fs-1">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="icon fs-1 mb-3">
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                                <p className="fs-3 fw-medium mb-0">
                                    "Productivity isn't about working harder. It's about working smarter — and protecting your focus like it's gold."
                                </p>
                            </div>
                            <div className="twoimg mb-5">
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <img src={imgtwo} alt="Perfect morning routine setup" className="w-100 rounded-4 shadow-lg hover-scale" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src={imgthree} alt="Deep work session in progress" className="w-100 rounded-4 shadow-lg hover-scale" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bg-white p-5 rounded-4 shadow border-start border-5 border-primary">
                                        <p className="fs-5 text-dark">
                                            The first 2 hours after waking are your "Golden Hours". Your brain runs on Alpha waves — peak creativity and laser focus. Wake up at 5 AM for 7 days straight. You'll be addicted to the clarity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="social d-flex gap-4 fs-2 mb-5">
                                <i className="fa-brands fa-facebook-f bg-primary text-white rounded-circle p-3 hover-shadow cursor-pointer"></i>
                                <i className="fa-brands fa-twitter bg-info text-white rounded-circle p-3 hover-shadow cursor-pointer"></i>
                                <i className="fa-brands fa-instagram bg-danger text-white rounded-circle p-3 hover-shadow cursor-pointer"></i>
                                <i className="fa-brands fa-linkedin-in bg-primary text-white rounded-circle p-3 hover-shadow cursor-pointer"></i>
                            </div>
                            <div className="comments">
                                <div className="start mb-4">
                                    <h4 className="display-6 fw-bold text-primary">12 Comments</h4>
                                </div>

                                <div className="card_comment">
                                    <div className="about d-flex gap-4 bg-white p-4 rounded-4 shadow-sm mb-4 border hover-border-primary transition">
                                        <div className="image">
                                            <img src={comment1} alt="Sarah Chen" className="rounded-circle border border-3 border-primary" width="70" height="70" />
                                        </div>
                                        <div className="text flex-grow-1">
                                            <h2 className="h5 fw-bold">Sarah Chen</h2>
                                            <h4 className="text-muted small">Nov 12, 2025 at 9:45 AM</h4>
                                            <p className="mt-3">
                                                This changed my life! Switched to the 52/17 method and my output doubled. Thank you!
                                            </p>
                                            <button className="btn btn-outline-primary btn-sm mt-2">Reply (3)</button>
                                        </div>
                                    </div>

                                    {/* Comment 2 */}
                                    <div className="about d-flex gap-4 bg-white p-4 rounded-4 shadow-sm mb-4 border hover-border-primary transition">
                                        <div className="image">
                                            <img src={comment2} alt="Mike Torres" className="rounded-circle border border-3 border-success" width="70" height="70" />
                                        </div>
                                        <div className="text flex-grow-1">
                                            <h2 className="h5 fw-bold">Mike Torres</h2>
                                            <h4 className="text-muted small">Nov 12, 2025 at 10:23 AM</h4>
                                            <p className="mt-3">
                                                Used to sleep at 3 AM. Now up at 5 AM and done with work by lunch. Mind blown.
                                            </p>
                                            <button className="btn btn-outline-primary btn-sm mt-2">Reply (7)</button>
                                        </div>
                                    </div>
                                    <div className="about d-flex gap-4 bg-white p-4 rounded-4 shadow-sm mb-4 border hover-border-primary transition">
                                        <div className="image">
                                            <img src={comment3} alt="Emma Watson" className="rounded-circle border border-3 border-warning" width="70" height="70" />
                                        </div>
                                        <div className="text flex-grow-1">
                                            <h2 className="h5 fw-bold">Emma Watson</h2>
                                            <h4 className="text-muted small">Nov 12, 2025 at 11:56 AM</h4>
                                            <p className="mt-3">
                                                Best advice: "Habits take time." I failed 12 times before this worked. Now unstoppable.
                                            </p>
                                            <button className="btn btn-outline-primary btn-sm mt-2">Reply (11)</button>
                                        </div>
                                    </div>
                                    <div className="about d-flex gap-4 bg-white p-4 rounded-4 shadow-sm mb-4 border hover-border-primary transition">
                                        <div className="image">
                                            <img src={comment4} alt="David Kim" className="rounded-circle border border-3 border-danger" width="70" height="70" />
                                        </div>
                                        <div className="text flex-grow-1">
                                            <h2 className="h5 fw-bold">David Kim</h2>
                                            <h4 className="text-muted small">Nov 12, 2025 at 2:19 PM</h4>
                                            <p className="mt-3">
                                                Any book recs for Deep Work? I'm a developer drowning in distractions.
                                            </p>
                                            <button className="btn btn-outline-primary btn-sm mt-2">Reply (5)</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="from bg-white p-5 rounded-4 shadow-lg mt-5 border">
                                <h4 className="display-6 fw-bold text-primary mb-4">Leave A Reply</h4>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control form-control-lg rounded-pill" placeholder="Your Name *" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control form-control-lg rounded-pill" placeholder="Your Email *" required />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control rounded-4" rows="6" placeholder="Share your experience with these habits..."></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary btn-lg px-5 rounded-pill shadow-lg hover-shadow-lg">
                                                Post Comment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="start mb-5">
                                <div className="input-group input-group-lg">
                                    <input type="search" className="form-control rounded-pill-start" placeholder="Search blog..." />
                                    <span className="input-group-text bg-primary text-white rounded-pill-end border-0">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="posts bg-white p-4 rounded-4 shadow mb-5">
                                <h3 className="h4 fw-bold text-primary border-bottom border-3 border-primary pb-3 mb-4">Recent Posts</h3>
                                <div className="content_posts">
                                    {[
                                        { img: postone, title: "Atomic Habits Summary 2025", date: "Nov 10" },
                                        { img: posttwo, title: "Deep Work Mastery Guide", date: "Nov 8" },
                                        { img: postthree, title: "The 80/20 Rule Explained", date: "Nov 5" },
                                        { img: postfour, title: "Enter Flow State Daily", date: "Nov 1" }
                                    ].map((post, i) => (
                                        <div key={i} className="box d-flex gap-3 mb-4 p-3 rounded-3 hover-bg-light transition">
                                            <img src={post.img} alt={post.title} className="rounded-3 shadow-sm" width="80" height="80" />
                                            <div>
                                                <h2 className="h6 fw-bold hover-text-primary cursor-pointer">{post.title}</h2>
                                                <h4 className="text-muted small">{post.date}, 2025</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="gallery bg-white p-4 rounded-4 shadow mb-5">
                                <h3 className="h4 fw-bold text-primary mb-4">Gallery</h3>
                                <div className="image row g-2">
                                    {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
                                        <div key={i} className="col-4">
                                            <img src={img} alt={`Gallery ${i+1}`} className="w-100 rounded-3 shadow hover-scale" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tags bg-white p-4 rounded-4 shadow mb-5">
                                <div className="start">
                                    <h4>Tags</h4>
                                </div>
                                <div className="words">
                                    <span>Imporovements</span>
                                    <span>Health</span>
                                    <span>Life</span>
                                    <span>Covid</span>
                                    <span>General</span>
                                    <span>Manage</span>
                                    <span>Growth</span>
                                    <span>Eduction</span>
                                    <span>Care</span>
                                   <span>HealthCare</span>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <News />
        </>
    );
}

export default BlogDetiailss;