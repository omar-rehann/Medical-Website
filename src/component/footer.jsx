import "../styles/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>MediCare Clinic</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>📞 +01 123 456 7890</p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#faq">FAQ's</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Dental Care</li>
            <li>Cardiac Clinic</li>
            <li>Massage Therapy</li>
            <li>Cardiology</li>
            <li>Precise Diagnosis</li>
            <li>Ambulance Services</li>
          </ul>
        </div>

      <div className="footer-subscribe">
  <h4>Subscribe</h4>
  <p>Subscribe to get our latest updates</p>
  <form className="subscribe-form">
    <input 
      type="email" 
      placeholder="Email address" 
      required 
    />
    <button type="submit">Subscribe</button>
  </form>
</div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 MediCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;