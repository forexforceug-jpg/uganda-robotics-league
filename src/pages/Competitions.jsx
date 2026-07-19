import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaUsers, FaUserGraduate, FaStar, FaArrowRight, FaPlay, FaChevronLeft, FaChevronRight, FaDownload, FaUserPlus } from 'react-icons/fa';
import { MdPeople, MdEvent, MdCategory } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import './Competitions.css';

function Competitions() {
  const events = [
    {
      title: 'Registration Deadline',
      date: 'March 31, 2026',
      location: 'Online',
      image: '/registration.jpg',
      month: 'MAR',
      day: '31'
    },
    {
      title: 'Coach Training Workshop',
      date: 'April 15, 2026',
      location: 'Jinja, Uganda',
      image: '/training.jpg',
      month: 'APR',
      day: '15'
    },
    {
      title: 'Regional Qualifiers',
      date: 'May 10-25, 2026',
      location: 'Various Regions',
      image: '/regional.jpg',
      month: 'MAY',
      day: '10-25'
    },
    {
      title: 'National Championship',
      date: 'July 18-20, 2026',
      location: 'Jinja, Uganda',
      image: '/nationals.jpg',
      month: 'JUL',
      day: '18-20'
    },
    {
      title: 'Awards & Closing Ceremony',
      date: 'July 20, 2026',
      location: 'Jinja, Uganda',
      image: '/awards.jpg',
      month: 'JUL',
      day: '20'
    }
  ];

  const categories = [
    {
      title: 'Vex Game',
      description: 'Strategic gameplay involving alliance scoring and challenge completion.',
      image: '/vex.jpg',
      icon: '🤖'
    },
    {
      title: 'Line Follower',
      description: 'Speed and precision while navigating predefined lines.',
      image: '/linefollower.jpg',
      icon: '📏'
    },
    {
      title: 'Robot Combat',
      description: 'Head-to-head engineering battles testing robot durability and performance.',
      image: '/vex2.jpg',
      icon: '⚔️'
    },
    {
      title: 'Maze Solver',
      description: 'Autonomous robots navigate complex mazes using intelligent programming.',
      image: '/maze.jpg',
      icon: '🌀'
    },
    {
      title: 'Innovation Challenge',
      description: 'Solve real-world problems through creative robotic solutions.',
      image: '/challenge.jpg',
      icon: '💡'
    },
    {
      title: 'Ballon Popper',
      description: 'Design and launch ballon poppers in exciting engineering competitions.',
      image: '/popper.jpg',
      icon: '🚀'
    }
  ];

  const news = [
    {
      date: 'July 20, 2026',
      title: 'J-Robotics Crowned URL 2025 Champions!',
      description: 'Team J-Robotics from Kampala takes the top prize after an exciting national championship finale.',
      image: '/competition3.jpg'
    },
    {
      date: 'July 15, 2026',
      title: 'Building More Than Robots: Student Impact Stories',
      description: 'How robotics builds confidence, teamwork, and leadership in Ugandan schools.',
      image: '/news1.jpg'
    },
    {
      date: 'July 10, 2026',
      title: 'Coaches Training Workshop Held in Jinja',
      description: 'Educators from multiple schools received robotics coaching and mentorship training.',
      image: '/training.jpg'
    }
  ];

  const partners = [
    { name: 'Just Cause Education Outreach', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=Just+Cause' },
    { name: 'VEX Robotics', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=VEX' },
    { name: 'Makerere University', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=Makerere' },
    { name: 'NITA-U', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=NITA-U' },
    { name: 'DFCU Bank', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=DFCU' },
    { name: 'Stanbic Bank', logo: 'https://via.placeholder.com/150x80/cccccc/000000?text=Stanbic' }
  ];

  return (
    <div className="competitions-page">
      {/* Hero Section */}
      <section className="competitions-hero">
        <div className="competitions-hero-overlay"></div>
        <div className="competitions-hero-content">
          <div className="competitions-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Competitions</span>
            </div>
            <h1>Where Innovation Meets Competition</h1>
            <p>
              URL competitions challenge students to apply engineering, programming, creativity, 
              and teamwork in exciting game-based robotics challenges.
            </p>
            <div className="competitions-hero-buttons">
              <button className="btn-hero-primary">View Current Season</button>
              <button className="btn-hero-secondary">Competition Rules</button>
            </div>
          </div>
          <div className="competitions-hero-right">
            <img 
              src="/competition3.jpg" 
              alt="Students operating a competition robot in an arena" 
            />
          </div>
        </div>
      </section>

      {/* Statistics Panel */}
      <div className="competitions-stats">
        <div className="stats-container">
          <div className="stat-item">
            <FaTrophy className="stat-icon" />
            <div className="stat-number">6</div>
            <div className="stat-label">Seasons</div>
          </div>
          <div className="stat-item">
            <MdEvent className="stat-icon" />
            <div className="stat-number">100+</div>
            <div className="stat-label">Robotics Activities</div>
          </div>
          <div className="stat-item">
            <MdCategory className="stat-icon" />
            <div className="stat-number">50+</div>
            <div className="stat-label">Major Events</div>
          </div>
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <div className="stat-number">15+</div>
            <div className="stat-label">Challenge Categories</div>
          </div>
          <div className="stat-item">
            <PiGraduationCap className="stat-icon" />
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Students Inspired</div>
          </div>
          <div className="stat-item">
            <MdPeople className="stat-icon" />
            <div className="stat-number">500+</div>
            <div className="stat-label">Mentors & Volunteers</div>
          </div>
        </div>
      </div>

      {/* Current Season */}
      <section className="season-section">
        <div className="season-container">
          <div className="season-content">
            <span className="season-label">CURRENT SEASON</span>
            <h2>Uganda Robotics League 2027</h2>
            <p>
              The 2027 season challenge promotes excitement, creativity, and real-world 
              problem solving within the competition arena.
            </p>
            <div className="season-info">
              <div className="info-item">
                <span>📅 Registration Deadline: October 31, 2026</span>
              </div>
              <div className="info-item">
                <span>🏆 Championship Date: December 15-17, 2027</span>
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
          <div className="season-video">
  <video 
    src="/video1.mp4" 
    autoPlay 
    muted 
    loop 
    playsInline
    className="video-element"
  >
    Your browser does not support the video tag.
  </video>
  <div className="video-play-button">
    <FaPlay />
  </div>
</div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="events-header">
          <div className="section-header">
            <h2>UPCOMING EVENTS</h2>
            <div className="red-underline"></div>
          </div>
          <div className="events-nav">
            <button className="nav-arrow"><FaChevronLeft /></button>
            <button className="nav-arrow"><FaChevronRight /></button>
          </div>
        </div>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-badge">
                  <span className="event-month">{event.month}</span>
                  <span className="event-day">{event.day}</span>
                </div>
              </div>
              <h3>{event.title}</h3>
              <div className="event-details">
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="categories-section">
        <div className="section-header">
          <h2>CHALLENGE CATEGORIES</h2>
          <div className="red-underline"></div>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.title} />
                <div className="category-icon">{category.icon}</div>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href="/competitions" className="category-learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
        <div className="categories-actions">
          <button className="btn-view-all">View All Challenges</button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="competitions-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Ready to Compete?</h2>
            <p>Bring your robots, passion, and determination into the arena.</p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">
              <FaUserPlus /> Register Your Team
            </button>
            <button className="cta-secondary">
              <FaDownload /> Download Season Guide
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="news-header">
          <div className="section-header">
            <h2>LATEST NEWS & STORIES</h2>
            <div className="red-underline"></div>
          </div>
          <a href="/news" className="view-all-link">View All News</a>
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

export default Competitions;