import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from "../img/logo.png"
import "../styles/all.css"
import "../styles/navbar.css"
import { useEffect } from 'react';
import { Link } from "react-router-dom";
function Navbar(){
useEffect(() => {
  const handleScroll = () => {
    const navelement = document.querySelector('.navbarcontent');
    if (!navelement) return;
    if (window.scrollY > 20) {
      navelement.classList.add("active");
    } else {
      navelement.classList.remove("active");
    }
  };

  window.addEventListener("scroll", handleScroll);
}, []);


    return(
        <>
        <div className="navbarcontent position-fixed w-100">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/about">About Us</Link></li>
              <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
              <li><Link className="dropdown-item" to="/faqs">FaQs</Link></li>
              <li><Link className="dropdown-item" to="/booking">Booking</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/services">Services</Link></li>
              <li><Link className="dropdown-item" to="/detials">Services Details</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/blogs">Blogs</Link></li>
              <li><Link className="dropdown-item" to="/blogsdetilas">Blog Details</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

        </>
    )
}
export default Navbar