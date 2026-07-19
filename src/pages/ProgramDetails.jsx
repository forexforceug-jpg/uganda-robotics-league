import { FaCalendarAlt, FaClock, FaUserGraduate, FaCertificate, FaPlay, FaArrowRight, FaCheck, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaDownload, FaUserPlus } from 'react-icons/fa';
import { MdPeople, MdSchool, MdCategory } from 'react-icons/md';
import './ProgramDetails.css';

function ProgramDetails() {
  const programFacts = [
    { icon: FaUserGraduate, label: 'Target Grades', value: 'S1–S3' },
    { icon: FaCalendarAlt, label: 'Duration', value: '1 Academic Year' },
    { icon: FaClock, label: 'Schedule', value: 'Academic Calendar' },
    { icon: MdPeople, label: 'Sessions', value: 'Weekly Sessions' }
  ];

  const programInfo = [
    { icon: FaUserGraduate, label: 'Age Range', value: '12–15 years' },
    { icon: MdCategory, label: 'Program Type', value: 'School/Club Based' },
    { icon: MdPeople, label: 'Class Size', value: '15–25 students' },
    { icon: FaCertificate, label: 'Certificate', value: 'URL Program Certificate' }
  ];

  const learningOutcomes = [
    'Hands-on robotics projects',
    'Problem solving and critical thinking',
    'Teamwork and communication skills',
    'Foundation in coding and engineering',
    'Preparation for robotics competitions'
  ];

  const programHighlights = [
    'Fun and engaging activities',
    'Build real working robots',
    'Participate in local competitions',
    'Develop 21st-century skills',
    'Guidance from experienced mentors'
  ];

  const curriculumModules = [
    { 
      icon: '🤖', 
      title: 'Introduction to Robotics', 
      desc: 'Learn what robots are and how they function.' 
    },
    { 
      icon: '🔧', 
      title: 'Building Basics', 
      desc: 'Introduction to mechanics and structural engineering.' 
    },
    { 
      icon: '💻', 
      title: 'Coding Basics', 
      desc: 'Learn block-based programming fundamentals.' 
    },
    { 
      icon: '📡', 
      title: 'Sensors & Actuators', 
      desc: 'Understand how robots interact with their environment.' 
    },
    { 
      icon: '⚙️', 
      title: 'Mini Projects', 
      desc: 'Design and test simple robots.' 
    },
    { 
      icon: '🏆', 
      title: 'Competition Preparation', 
      desc: 'Showcase skills during robotics competitions.' 
    }
  ];

  const achievements = [
    'Understand robotics concepts and components',
    'Build and program functional robots',
    'Solve real-world problems creatively',
    'Work effectively within teams',
    'Gain confidence for robotics competitions'
  ];

  const galleryImages = [
    '../../public/team1.jpg',
    '../../public/team1.jpg',
    '../../public/team1.jpg',
    '../../public/team1.jpg',
    '../../public/team1.jpg'
  ];

  return (
    <div className="program-details-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="program-hero-overlay"></div>
        <div className="program-hero-content">
          <div className="program-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span>Programs</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Lower Secondary Robotics Program</span>
            </div>
            <h1>Lower Secondary Robotics Program</h1>
            <p>
              A practical and exciting introduction to robotics for students in Lower Secondary, 
              inspiring curiosity, developing technical skills, and building a strong foundation 
              for future innovators.
            </p>
            <div className="program-facts">
              {programFacts.map((fact, index) => (
                <div key={index} className="fact-item">
                  <fact.icon className="fact-icon" />
                  <div className="fact-content">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="program-hero-buttons">
              <button className="btn-hero-primary">Enroll Your School/Team</button>
              <button className="btn-hero-secondary">
                <FaDownload /> Download Brochure
              </button>
            </div>
          </div>
          <div className="program-hero-right">
            <img 
              src="../../public/primary2.jpg" 
              alt="Lower Secondary students building a robot" 
            />
            <div className="program-info-card">
              {programInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <info.icon className="info-icon" />
                  <div>
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Navigation */}
      <nav className="program-nav">
        <div className="program-nav-container">
          <ul className="program-nav-tabs">
            <li className="active"><a href="#overview">Overview</a></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#learning">What Students Learn</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#requirements">Requirements</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="overview-section">
        <div className="overview-container">
          <div className="overview-left">
            <span className="section-label">OVERVIEW</span>
            <h2>Building Future Innovators</h2>
            <p>
              The Lower Secondary Robotics Program introduces students to robotics through 
              practical hands-on projects, teamwork, and problem solving while developing 
              creativity, confidence, and technical skills.
            </p>
            <ul className="learning-outcomes">
              {learningOutcomes.map((outcome, index) => (
                <li key={index}>
                  <FaCheck className="outcome-check" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
         <div className="overview-center">
  <div className="video-preview">
    <img 
      src="../../public/video2.mp4" 
      alt="Program video preview" 
    />
    <div className="video-play-overlay">
      <div className="video-play-button">
        <FaPlay />
      </div>
    </div>
    <div className="video-duration-badge">2:30</div>
  </div>
  <a href="#video" className="watch-video-link">
    Watch Program Video <FaArrowRight />
  </a>
</div>
          <div className="overview-right">
            <div className="highlights-card">
              <h3>Program Highlights</h3>
              <ul>
                {programHighlights.map((highlight, index) => (
                  <li key={index}>
                    <span className="highlight-icon">✦</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="curriculum-section">
        <div className="section-header">
          <h2>CURRICULUM SNAPSHOT</h2>
          <div className="red-underline"></div>
        </div>
        <div className="curriculum-timeline">
          {curriculumModules.map((module, index) => (
            <div key={index} className="curriculum-item">
              <div className="curriculum-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.desc}</p>
              {index < curriculumModules.length - 1 && (
                <div className="curriculum-arrow">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="curriculum-actions">
          <a href="#full" className="view-full-curriculum">View Full Curriculum</a>
        </div>

        <div className="achievement-card-container">
          <div className="achievement-card">
            <h3>What Students Will Achieve</h3>
            <ol>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ol>
            <a href="#outcomes" className="learn-more-outcomes">
              Learn more about outcomes <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Student Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>STUDENT PROJECTS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="projects-gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="project-item">
              <img src={image} alt={`Student project ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="projects-actions">
          <a href="#all" className="view-more-projects">View More Projects</a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <button className="testimonial-nav">
            <FaChevronLeft />
          </button>
          <div className="testimonial-content">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p>
              The Lower Secondary Robotics Program transformed my perspective on technology. 
              Building robots and solving problems with my friends made learning fun and 
              exciting. I can't wait to continue my robotics journey!
            </p>
            <div className="testimonial-author">
              <div className="testimonial-image">
                <img 
                  src="https://via.placeholder.com/80x80/1a3a5c/ffffff?text=Aisha+N" 
                  alt="Aisha N." 
                />
              </div>
              <div>
                <div className="author-name">Aisha N.</div>
                <div className="author-detail">S.3 Student, Makerere University College School</div>
                <div className="author-detail">URL Participant</div>
              </div>
            </div>
          </div>
          <button className="testimonial-nav">
            <FaChevronRight />
          </button>
        </div>
        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="program-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Ready to Start Your Robotics Journey?</h2>
            <p>Enroll your school or club and become part of the next generation of innovators.</p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">
              <FaUserPlus /> Enroll Your School/Team
            </button>
            <button className="cta-secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetails;