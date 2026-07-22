import { useState, useEffect } from 'react';
import { FaUsers, FaUserGraduate, FaMapMarkerAlt, FaTrophy, FaArrowRight, FaUserPlus, FaBookOpen, FaTools, FaBullseye, FaStar } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import StatsCounter from '../components/StatsCounter';
import './Home.css';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    { src: '/heroimg.jpg', alt: 'Ugandan students building a robot' },
    { src: '/news1.jpg', alt: 'Students collaborating on robotics project' },
    { src: '/news4.jpg', alt: 'Robotics competition in action' },
    { src: '/news6.jpg', alt: 'Students celebrating robotics achievement' }
  ];

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentImageIndex];

  const programs = [
    {
      title: 'Primary Robotics',
      description: 'Young learners explore robotics fundamentals through hands-on activities.',
      image: '/primarystds.jpg'
    },
    {
      title: 'Lower Secondary Robotics',
      description: 'Students collaborate on exciting robotics projects and challenges.',
      image: '/secondary.jpg'
    },
    {
      title: 'Advanced Secondary Robotics',
      description: 'Advanced students program and test competition-ready robots.',
      image: '/highschool.jpg'
    },
    {
      title: 'Open Innovation',
      description: 'Students work on cutting-edge robotics and AI solutions.',
      image: '/innovation.jpg'
    }
  ];

  const journeySteps = [
    { icon: FaUserPlus, title: 'Register', desc: 'Sign up your team for the season' },
    { icon: FaBookOpen, title: 'Train', desc: 'Learn skills and prepare' },
    { icon: FaTools, title: 'Build', desc: 'Design and construct your robot' },
    { icon: FaBullseye, title: 'Qualify', desc: 'Compete in qualifying events' },
    { icon: FaTrophy, title: 'Compete', desc: 'Showcase your robot at nationals' },
    { icon: FaStar, title: 'Become Champions', desc: 'Celebrate innovation and teamwork' }
  ];

  const news = [
    {
      date: 'June 15, 2026',
      title: 'URL 2025 Champions Crowned!',
      description: 'Team Innovators from Kampala take the top prize in an exciting finale.',
      image: '/competition.jpg'
    },
    {
      date: 'June 10, 2026',
      title: 'Building Confidence Through Robotics',
      description: 'How robotics education is transforming student leadership skills.',
      image: '/news.jpg'
    },
    {
      date: 'June 5, 2026',
      title: 'Coaches Training Workshop in Jinja',
      description: 'Educators gather to learn new strategies for robotics coaching.',
      image: '/news1.jpg'
    }
  ];

  const partners = [
    { name: 'Just Cause Education Outreach', logo: '/logourl.png' },
    { name: 'VEX Robotics', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=VEX' },
    { name: 'Makerere University', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=Makerere' },
    { name: 'Jinja Techub', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=NITA-U' },
    { name: 'Jinja SS', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=DFCU' },
    { name: '1MC', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=Stanbic' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Building Uganda's<br />
              <span className="hero-highlight">Next Generation</span><br />
              of Innovators
            </h1>
            <p>
              The Uganda Robotics League brings students, schools, and communities together
              through robotics education and exciting competitions.
            </p>
            <div className="hero-buttons">
              <button className="btn-hero-primary">Explore the League</button>
              <button className="btn-hero-secondary">Register Your Team</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-inner">
              <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="hero-slide-image"
              />
            </div>
            <div className="hero-image-counter">
              {currentImageIndex + 1} / {heroImages.length}
            </div>
          </div>
        </div>
        <div className="hero-slider-dots">
          {heroImages.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Statistics Panel */}
      <div className="stats-panel">
        <div className="stats-container">
          <StatsCounter 
            icon={MdPeople} 
            endValue="50+" 
            label="Schools" 
          />
          <StatsCounter 
            icon={FaUsers} 
            endValue="30+" 
            label="Teams" 
          />
          <StatsCounter 
            icon={FaUserGraduate} 
            endValue="250+" 
            label="Students" 
          />
          <StatsCounter 
            icon={FaMapMarkerAlt} 
            endValue="10+" 
            label="Districts" 
          />
          <StatsCounter 
            icon={FaTrophy} 
            endValue="8" 
            label="Seasons" 
          />
        </div>
      </div>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="section-header">
          <h2>PROGRAMS FOR EVERY STUDENT</h2>
          <div className="red-underline"></div>
        </div>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-image">
                <img src={program.image} alt={program.title} />
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href="/programs" className="learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Current Season Section */}
      <section className="season-section">
        <div className="season-container">
          <div className="season-content">
            <span className="season-label">CURRENT SEASON</span>
            <h2>Uganda Robotics League 2027</h2>
            <p>
              The 2027 season challenge promotes creativity, excitement, and real-world
              problem solving. Join us in this year's journey!
            </p>
            <div className="season-info">
              <div className="info-item">
                <span>📅 Registration Deadline: October 31, 2026</span>
              </div>
              <div className="info-item">
                <span>🏆 Championship Date: December 15-17, 2026</span>
              </div>
              <div className="info-item">
                <span>📍 Venue: Jinja, Uganda</span>
              </div>
              <div className="info-item">
                <span>👥 Eligibility: All secondary school levels</span>
              </div>
            </div>
            <div className="season-buttons">
              <button className="btn-season-primary">View the Challenge</button>
              <button className="btn-season-secondary">Download Rules</button>
              <button className="btn-season-secondary">Register Now</button>
            </div>
          </div>
          <div className="season-image">
            <img src="/competition.jpg" alt="Competition Arena" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="section-header">
          <h2>YOUR JOURNEY WITH URL</h2>
          <div className="red-underline"></div>
        </div>
        <div className="journey-steps">
          {journeySteps.map((step, index) => (
            <div key={index} className="journey-step">
              <div className="step-icon">
                <step.icon />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < journeySteps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="section-header">
          <h2>LATEST NEWS & STORIES</h2>
          <div className="red-underline"></div>
        </div>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="/news" className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="news-actions">
          <button className="btn-view-all">View All News</button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-header">
          <h2>OUR PARTNERS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
        <div className="partners-actions">
          <button className="btn-become-partner">Become a Partner</button>
        </div>
      </section>
    </div>
  );
}

export default Home;