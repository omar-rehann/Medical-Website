import "../pagesstyles/doctor.css";
import teamone from "../img/t1.jpg";
import teamtwo from "../img/t2.jpg";
import teamthree from "../img/t3.jpg";
import teamfour from "../img/team-1.jpg"
import teamfive from "../img/team-2.jpg"
import teamsix from "../img/team-3.jpg"


function Doctor() {
    return (
        <>
            <div className="doctor">
                <div className="continer text-center py-5">
                    <h2 className="display-4 fw-bold">Our Doctors</h2>
                    <h3 className="text-muted">Meet Our Best Doctors</h3>
                </div>

                <div className="content">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            {/* Doctor 1 */}
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="image overflow-hidden">
                                        <img 
                                            src={teamone} 
                                            alt="Dr. Addison Smith" 
                                            className="img-fluid rounded-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mt-3">Dr. Addison Smith</h4>
                                        <h5 className="text-primary">Dentist</h5>
                                        <div className="social_media mt-3">
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-f text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-messenger text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-instagram text-danger"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Doctor 2 */}
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="image overflow-hidden">
                                        <img 
                                            src={teamtwo} 
                                            alt="Dr. Jane Doe" 
                                            className="img-fluid rounded-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mt-3">Dr. Jane Doe</h4>
                                        <h5 className="text-primary">Cardiologist</h5>
                                        <div className="social_media mt-3">
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-f text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-messenger text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-instagram text-danger"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Doctor 3 */}
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="image overflow-hidden">
                                        <img 
                                            src={teamthree} 
                                            alt="Dr. Michael Lee" 
                                            className="img-fluid rounded-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mt-3">Dr. Michael Lee</h4>
                                        <h5 className="text-primary">Neurologist</h5>
                                        <div className="social_media mt-3">
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-f text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-messenger text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-instagram text-danger"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Doctor 4 */}
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="image overflow-hidden">
                                        <img 
                                            src={teamfour} 
                                            alt="Dr. Michael Lee" 
                                            className="img-fluid rounded-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mt-3">Dr. Karian Lee</h4>
                                        <h5 className="text-primary">Neurologist</h5>
                                        <div className="social_media mt-3">
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-f text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-messenger text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-instagram text-danger"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Doctor 4 */}
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="image overflow-hidden">
                                        <img 
                                            src={teamfive} 
                                            alt="Dr. Michael Lee" 
                                            className="img-fluid rounded-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mt-3">Dr. Karian Lee</h4>
                                        <h5 className="text-primary">Neurologist</h5>
                                        <div className="social_media mt-3">
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-f text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-messenger text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-instagram text-danger"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Doctor 4 */}
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="image overflow-hidden">
                                        <img 
                                            src={teamsix} 
                                            alt="Dr. Michael Lee" 
                                            className="img-fluid rounded-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mt-3">Dr. Karian Lee</h4>
                                        <h5 className="text-primary">Neurologist</h5>
                                        <div className="social_media mt-3">
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-f text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-facebook-messenger text-primary"></i>
                                            </a>
                                            <a href="#" className="mx-2 text-decoration-none">
                                                <i className="fab fa-instagram text-danger"></i>
                                            </a>
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

export default Doctor;