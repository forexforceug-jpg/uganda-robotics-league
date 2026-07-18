import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon">
              <span className="logo-url">URL</span>
              <div className="logo-emblem">
                <span className="emblem-red"></span>
                <span className="emblem-white"></span>
              </div>
            </div>
            <span className="footer-logo-sub">Uganda Robotics League</span>
          </div>
          <p className="footer-mission">
            Empowering young Ugandans through robotics education, innovation, and competition.
          </p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/teams">Teams</Link>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <Link to="/resources">Robotics Kit Guide</Link>
            <Link to="/resources">Lesson Plans</Link>
            <Link to="/resources">Safety Guidelines</Link>
          </div>
          <div className="footer-column">
            <h4>Get Involved</h4>
            <Link to="/register">Register a Team</Link>
            <Link to="/partners">Become a Partner</Link>
            <Link to="/volunteer">Volunteer</Link>
          </div>
        </div>

        <div className="footer-right">
          <h4>Subscribe to Updates</h4>
          <p>Get the latest news and updates from the league.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <span>© 2026 Uganda Robotics League. All Rights Reserved.</span>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;