import { FaSearch, FaMapMarkerAlt, FaTrophy, FaUsers, FaUserGraduate, FaStar, FaArrowRight, FaFilter, FaSort, FaUserPlus } from 'react-icons/fa';
import { MdPeople, MdCategory, MdSchool } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import './Teams.css';

function Teams() {
  const teams = [
    {
      name: 'J-Robotics',
      school: 'Jinja Secondary School',
      district: 'Jinja District',
      description: 'Passionate innovators building robots and solutions for a better tomorrow.',
      level: 'Advanced Secondary',
      category: 'Robot Game',
      image: '/competition3.jpg',
      logo: '/competition3.jpg'
    },
    {
      name: 'The Fusebots',
      school: 'Busoga College Mwiri',
      district: 'Kamuli District',
      description: 'Excellence, teamwork, engineering, and innovation through robotics.',
      level: 'Advanced Secondary',
      category: 'Robot Game',
      image: '/fusebots.jpg',
      logo: '/fusebots.jpg'
    },
    {
      name: 'Tech Titans',
      school: "St. Mary's College Kisubi",
      district: 'Wakiso District',
      description: 'Programming, precision, and competitive robotics excellence.',
      level: 'Lower Secondary',
      category: 'Line Follower',
      image: '/techtitans.jpg',
      logo: '/techtitans.jpg'
    },
    {
      name: 'Igabots 1',
      school: 'Iganga SS',
      district: 'Iganga District',
      description: 'Innovation and leadership through robotics engineering.',
      level: 'Advanced Secondary',
      category: 'Robot Combat',
      image: '/igabots1.jpg',
      logo: '/igabots1.jpg'
    },
    {
      name: 'VoraBots',
      school: 'Jinja SS',
      district: 'Jinja District',
      description: 'Creativity through coding and robotics innovation.',
      level: 'Lower Secondary',
      category: 'Maze Solver',
      image: '/vorabots.jpg',
      logo: '/vorabots.jpg'
    },
    {
      name: 'Smith Bots',
      school: 'Mbale Secondary School',
      district: 'Mbale District',
      description: 'Engineering strong, future-ready robots for competition.',
      level: 'Advanced Secondary',
      category: 'Robot Game',
      image: '/smith.jpg',
      logo: '/smith.jpg'
    },
    {
      name: 'Y-Botics II',
      school: "Wanyange Girls",
      district: 'Jinja District',
      description: 'Rising above challenges through innovation and teamwork.',
      level: 'Advanced Secondary',
      category: 'Innovation Challenge',
      image: '/ybots.jpg',
      logo: '/ybots.jpg'
    },
    {
      name: 'Cyber Nights',
      school: 'Soroti Secondary School',
      district: 'Soroti District',
      description: 'Discipline, passion, and innovation in Line Follower competitions.',
      level: 'Advanced Secondary',
      category: 'Line Follower',
      image: '/cyber.jpg',
      logo: '/cyber.jpg'
    }
  ];

  const impactStats = [
    { icon: MdSchool, number: '150+', label: 'Schools' },
    { icon: FaUsers, number: '350+', label: 'Teams' },
    { icon: PiGraduationCap, number: '5,000+', label: 'Students' },
    { icon: FaMapMarkerAlt, number: '20+', label: 'Districts' },
    { icon: FaStar, number: '100+', label: 'Robotics Activities' },
    { icon: FaTrophy, number: '10,000+', label: 'Young Innovators' }
  ];

  return (
    <div className="teams-page">
      {/* Hero Section */}
      <section className="teams-hero">
        <div className="teams-hero-overlay"></div>
        <div className="teams-hero-content">
          <div className="teams-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Teams</span>
            </div>
            <h1>Our Teams. Our Future<span className="hero-period">.</span></h1>
            <p>
              Student teams from across Uganda are building, learning, and competing 
              to become tomorrow's innovators.
            </p>
            <div className="teams-hero-buttons">
              <button className="btn-hero-primary">Register Your Team</button>
              <button className="btn-hero-secondary">How to Join</button>
            </div>
          </div>
          <div className="teams-hero-right">
            <img 
              src="/team1.jpg" 
              alt="Students building a competition robot" 
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="filters-container">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search teams, schools, or districts..." />
          </div>
          <div className="filter-dropdowns">
            <select className="filter-select">
              <option>All Districts</option>
            </select>
            <select className="filter-select">
              <option>All Categories</option>
            </select>
            <select className="filter-select">
              <option>All School Levels</option>
            </select>
          </div>
          <div className="sort-dropdown">
            <FaSort className="sort-icon" />
            <select className="filter-select">
              <option>Sort by</option>
            </select>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="teams-grid-section">
        <div className="teams-header">
          <h2>Teams Across Uganda</h2>
          <div className="red-underline-left"></div>
        </div>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image">
                <img src={team.image} alt={team.name} />
                <div className="team-logo">
                  <img src={team.logo} alt={team.name} />
                </div>
              </div>
              <div className="team-card-content">
                <h3>{team.name}</h3>
                <div className="team-school">{team.school}</div>
                <div className="team-district">{team.district}</div>
                <p>{team.description}</p>
                <div className="team-badges">
                  <span className="badge">{team.level}</span>
                  <span className="badge">{team.category}</span>
                </div>
                <a href="/team-profile" className="team-view-profile">
                  View Profile <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="teams-actions">
          <button className="btn-view-more">View More Teams</button>
        </div>
      </section>

      {/* Featured Team */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-image">
            <img 
              src="/competition3.jpg" 
              alt="J-Robotics team in competition" 
            />
          </div>
          <div className="featured-content">
            <span className="featured-label">FEATURED TEAM</span>
            <h2>J-Robotics</h2>
            <div className="featured-info">
              <span>📍 Jinja Secondary School, Jinja District</span>
              <span>🎓 Advanced Secondary</span>
              <span>🏆 Robot Game</span>
            </div>
            <p>
              One of the most decorated teams in the Uganda Robotics League, driven by curiosity, 
              innovation, and a passion for solving real-world problems through robotics.
            </p>
            <div className="featured-stats">
              <div className="featured-stat">
                <div className="featured-stat-number">4</div>
                <div className="featured-stat-label">Seasons Participated</div>
              </div>
              <div className="featured-stat">
                <div className="featured-stat-number">12</div>
                <div className="featured-stat-label">Awards Won</div>
              </div>
              <div className="featured-stat">
                <div className="featured-stat-number">3</div>
                <div className="featured-stat-label">Championships Reached</div>
              </div>
              <div className="featured-stat">
                <div className="featured-stat-number">25+</div>
                <div className="featured-stat-label">Team Members</div>
              </div>
            </div>
            <button className="btn-featured-profile">View Full Profile</button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="impact-header">
          <h2>Our Impact</h2>
          <div className="red-underline-left"></div>
        </div>
        <div className="impact-grid">
          {impactStats.map((stat, index) => (
            <div key={index} className="impact-item">
              <stat.icon className="impact-icon" />
              <div className="impact-number">{stat.number}</div>
              <div className="impact-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="teams-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Is your school ready to join?</h2>
            <p>Become part of Uganda's largest student robotics movement.</p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">
              <FaUserPlus /> Register Your Team
            </button>
            <button className="cta-secondary">Learn How to Join</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;