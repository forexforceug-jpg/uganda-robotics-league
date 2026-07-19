import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaShareAlt, FaClock, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaArrowRight, FaUserPlus } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      details: ['Just Cause Education Outreach', 'Wanyange, Jinja City, Uganda'],
      link: '#',
      linkText: 'Get Directions'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+256 123 456 789', '+256 987 654 321'],
      link: '#',
      linkText: 'Call Now'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['info@ugandaroboticsleague.org', 'support@ugandaroboticsleague.org'],
      link: '#',
      linkText: 'Send an Email'
    },
    {
      icon: FaShareAlt,
      title: 'Social Media',
      details: ['@UgandaRoboticsLeague'],
      social: true
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: By appointment'],
      link: '#',
      linkText: 'Book Appointment'
    }
  ];

  const faqs = [
    {
      question: 'How can I register my team for the URL season?',
      answer: 'Team registration can be completed online through the "Register a Team" button on our navigation bar. You will need to provide your school name, team name, coach information, and contact details.'
    },
    {
      question: 'What are the eligibility requirements for teams?',
      answer: 'Teams must consist of students enrolled in Ugandan secondary schools. Each team should have 2-5 members and at least one adult coach or mentor.'
    },
    {
      question: 'Where can I find the competition rules and game manual?',
      answer: 'The official competition rules and game manual can be found in the Resources section under "Competition Resources" or directly from the Competitions page.'
    },
    {
      question: 'How can my school or organization become a partner?',
      answer: 'Organizations interested in partnering with us can visit our Partners page and click the "Become a Partner" button, or contact our partnerships team directly via email.'
    },
    {
      question: 'Do you offer robotics training or workshops?',
      answer: 'Yes! We offer regular training workshops, coaching sessions, and bootcamps for students and educators. Check our Programs and Resources pages for upcoming opportunities.'
    },
    {
      question: 'How can I volunteer with the Uganda Robotics League?',
      answer: 'We welcome volunteers for events, workshops, and mentorship. Visit our Get Involved section or contact our volunteer coordinator for current opportunities.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Contact Us</span>
            </div>
            <h1>Contact Us</h1>
            <p>
              We're here to help with questions, partnerships, registration support, 
              and general inquiries about the Uganda Robotics League.
            </p>
          </div>
          <div className="contact-hero-right">
            <img 
              src="../../public/contactus.jpg" 
              alt="Students collaborating on a robot" 
            />
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="section-header">
          <h2>GET IN TOUCH</h2>
          <div className="red-underline"></div>
        </div>
        <div className="contact-cards">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-card">
              <item.icon className="contact-card-icon" />
              <h3>{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
              {item.social && (
                <div className="social-icons">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                  <FaYoutube />
                  <FaLinkedin />
                </div>
              )}
              {item.link && (
                <a href={item.link} className="contact-link">
                  {item.linkText} <FaArrowRight />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          {/* Left Column - Form */}
          <div className="contact-form-left">
            <h2>SEND US A MESSAGE</h2>
            <div className="red-underline-left"></div>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Subject</option>
                  <option value="registration">Team Registration</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <div className="form-group captcha">
                <div className="captcha-box">
                  <input type="checkbox" id="captcha" />
                  <label htmlFor="captcha">I'm not a robot</label>
                </div>
                <span className="captcha-branding">reCAPTCHA</span>
              </div>
              <button type="submit" className="btn-submit">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Right Column - Map */}
          <div className="contact-form-right">
            <h2>FIND US</h2>
            <div className="red-underline-left"></div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d33.123456!3d0.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e123456789abc%3A0x123456789abcdef!2sJinja%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Uganda Robotics League Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <span>{faq.question}</span>
                <div className="faq-toggle">+</div>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-actions">
          <button className="btn-view-all-faqs">
            View All FAQs <FaArrowRight />
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="contact-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Let's Build the Future Together!</h2>
            <p>Join the movement empowering young Ugandans through robotics education and innovation.</p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">
              <FaUserPlus /> Register Your Team
            </button>
            <button className="cta-secondary">Become a Partner</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;