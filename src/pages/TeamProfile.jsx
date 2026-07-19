import { FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaUsers, FaAward, FaRobot, FaLightbulb, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaArrowRight, FaDownload, FaUserPlus, FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdPeople, MdSchool, MdCategory } from 'react-icons/md';
import './TeamProfile.css';

function TeamProfile() {
  const teamStats = [
    { icon: FaUsers, number: '12', label: 'Team Members' },
    { icon: FaCalendarAlt, number: '3', label: 'Seasons Participated' },
    { icon: FaTrophy, number: '8', label: 'Competitions' },
    { icon: FaAward, number: '6', label: 'Awards Won' }
  ];

  const achievements = [
    { title: 'First Place - URL National Championship 2024', description: 'Uganda Robotics League National Championship' },
    { title: 'Robot Design Award 2024', description: 'Best robot design and engineering excellence' },
    { title: 'Excellence Award - Regional Robotics Challenge 2024', description: 'Outstanding performance in regional competition' },
    { title: 'Second Place - Uganda Robotics League 2023', description: 'National Championship runner-up' },
    { title: 'Most Collaborative Team - URL 2023', description: 'Recognized for outstanding teamwork and collaboration' }
  ];

  const teamMembers = [
    { name: 'Brian Ssenyonga', role: 'Team Captain', image: 'https://via.placeholder.com/150x150/1a3a5c/ffffff?text=Brian' },
    { name: 'Joan Namuli', role: 'Programming Lead', image: 'https://via.placeholder.com/150x150/2d6a9f/ffffff?text=Joan' },
    { name: 'Isaac Kizito', role: 'Mechanical Lead', image: 'https://via.placeholder.com/150x150/ff0000/ffffff?text=Isaac' },
    { name: 'Kevin Mugerwa', role: 'Electrical Lead', image: 'https://via.placeholder.com/150x150/1a3a5c/ffffff?text=Kevin' },
    { name: 'Diana Nabayenga', role: 'Outreach Lead', image: 'https://via.placeholder.com/150x150/2d6a9f/ffffff?text=Diana' },
    { name: 'Sharif Walugembe', role: 'Strategy Lead', image: 'https://via.placeholder.com/150x150/ff0000/ffffff?text=Sharif' }
  ];

  const robotFeatures = [
    'Modular design for quick adjustments',
    'High-torque drivetrain for superior mobility',
    'Advanced sensor integration',
    'Optimized for competition tasks'
  ];

  const supporters = [
    { name: 'DFCU Bank', logo: 'https://via.placeholder.com/180x80/cccccc/000000?text=DFCU+Bank' },
    { name: 'Stanbic Bank', logo: 'https://via.placeholder.com/180x80/cccccc/000000?text=Stanbic+Bank' },
    { name: 'Huawei', logo: 'https://via.placeholder.com/180x80/cccccc/000000?text=Huawei' },
    { name: 'MTN Uganda', logo: 'https://via.placeholder.com/180x80/cccccc/000000?text=MTN+Uganda' },
    { name: 'Makerere University', logo: 'https://via.placeholder.com/180x80/cccccc/000000?text=Makerere+University' },
    { name: 'NSSF', logo: 'https://via.placeholder.com/180x80/cccccc/000000?text=NSSF' }
  ];

  const galleryImages = [
    '/chall.jpg',
    '/chall.jpg',
    '/chall.jpg',
    '/chall.jpg',
    '/chall.jpg'
  ];

  return (
    <div className="team-profile-page">
      {/* Hero Section */}
      <section className="profile-hero">
        <div className="profile-hero-overlay"></div>
        <div className="profile-hero-content">
          <div className="profile-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span>Teams</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Fuse Bots</span>
            </div>
            <div className="team-name-wrapper">
              <div className="team-logo-large">
                <img 
                  src="/fusebots.jpg" 
                  alt="Fuse Bots Logo" 
                />
              </div>
              <h1>Fuse Bots</h1>
            </div>
            <div className="team-details">
              <span><MdSchool /> Kiira College School</span>
              <span><FaMapMarkerAlt /> Kampala District</span>
              <span><MdCategory /> Advanced Secondary</span>
            </div>
            <p>
              Fuse Bots is a team of passionate students dedicated to building innovative 
              robotic solutions that solve real-world challenges and inspire change.
            </p>
            <div className="social-icons-team">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaEnvelope />
            </div>
          </div>
          <div className="profile-hero-right">
            <img 
              src="/fusebots.jpg" 
              alt="Fuse Bots team working on robot" 
            />
            <div className="quick-facts">
              <div className="quick-fact">
                <FaCalendarAlt className="quick-fact-icon" />
                <span>Team Since 2023</span>
              </div>
              <div className="quick-fact">
                <FaRobot className="quick-fact-icon" />
                <span>Team ID URLT-024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Navigation */}
      <nav className="team-nav">
        <div className="team-nav-container">
          <ul className="team-nav-tabs">
            <li className="active"><a href="#overview">Overview</a></li>
            <li><a href="#robot">Our Robot</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#members">Team Members</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#supporters">Supporters</a></li>
          </ul>
          <button className="btn-contact-team">Contact Team</button>
        </div>
      </nav>

      {/* About Section */}
      <section id="overview" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <span className="section-label">ABOUT THE TEAM</span>
            <h2>Innovation. Collaboration. Impact.</h2>
            <p>
              Fuse Bots was founded in 2023 with a vision of creating technologically advanced 
              solutions through teamwork, creativity, and perseverance. We continually push 
              boundaries to build a better future.
            </p>
            <div className="team-stats">
              {teamStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <stat.icon className="stat-icon" />
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <div className="info-card">
              <h3>Team Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Team Name</span>
                  <span className="info-value">Fuse Bots</span>
                </div>
                <div className="info-item">
                  <span className="info-label">School</span>
                  <span className="info-value">Kiira College School</span>
                </div>
                <div className="info-item">
                  <span className="info-label">District</span>
                  <span className="info-value">Kampala</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Category</span>
                  <span className="info-value">Advanced Secondary</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Coach/Mentor</span>
                  <span className="info-value">Mr. Peter Okello</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">fusebots@makerere.ac.ug</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-header-with-link">
          <div>
            <h2>OUR ACHIEVEMENTS</h2>
            <div className="red-underline"></div>
          </div>
          <a href="#all" className="view-all-link">View All Achievements <FaArrowRight /></a>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <FaTrophy className="achievement-icon" />
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section id="members" className="members-section">
        <div className="section-header">
          <h2>OUR TEAM MEMBERS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="members-carousel">
          <button className="carousel-nav">
            <FaChevronLeft />
          </button>
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <FaLinkedin className="member-linkedin" />
              </div>
            ))}
          </div>
          <button className="carousel-nav">
            <FaChevronRight />
          </button>
        </div>
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Robot & Projects Section */}
      <section id="robot" className="robot-section">
        <div className="section-header">
          <h2>OUR ROBOT & PROJECTS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="robot-container">
          <div className="robot-left">
            <div className="robot-main-image">
              <img 
                src="/robot.jpg" 
                alt="FUSE-X1 Robot on field" 
              />
            </div>
            <div className="robot-thumbnails">
              <img src="/robot2.jpg" alt="Robot view 1" />
              <img src="/robot3.jpeg" alt="Robot view 2" />
              <img src="/robot.jpg" alt="Robot view 3" />
              <img src="/robot.jpg" alt="Robot view 4" />
            </div>
          </div>
          <div className="robot-center">
            <h3>FUSE-X1</h3>
            <p>
              Designed for speed, precision, and adaptability. FUSE-X1 is one of our 
              strongest competitive machines, engineered for peak performance.
            </p>
            <ul className="robot-features">
              {robotFeatures.map((feature, index) => (
                <li key={index}>
                  <FaCheck className="feature-check" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn-robot-details">View Robot Details</button>
          </div>
          <div className="robot-right">
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/chall.jpg" 
                  alt="Smart Water Monitoring System" 
                />
              </div>
              <h4>Featured Innovation</h4>
              <h3>Smart Water Monitoring System</h3>
              <p>
                An AI and IoT-based solution that monitors water quality using real-time 
                data to promote sustainable living.
              </p>
              <a href="#project" className="project-learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="section-header-with-link">
          <div>
            <h2>TEAM GALLERY</h2>
            <div className="red-underline"></div>
          </div>
          <a href="#all" className="view-all-link">View Full Gallery <FaArrowRight /></a>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Supporters Section */}
      <section id="supporters" className="supporters-section">
        <div className="section-header">
          <h2>OUR SUPPORTERS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="supporters-grid">
          {supporters.map((supporter, index) => (
            <div key={index} className="supporter-card">
              <img src={supporter.logo} alt={supporter.name} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="profile-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Join the Movement. Build the Future.</h2>
            <p>Register and become part of Uganda's largest robotics competition community.</p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">
              <FaUserPlus /> Register Your Team
            </button>
            <button className="cta-secondary">
              <FaDownload /> Download Team Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamProfile;