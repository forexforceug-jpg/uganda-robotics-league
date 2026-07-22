import { FaGlobe, FaBook, FaUsers, FaTrophy, FaFlag, FaStar, FaHeart, FaLightbulb, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { MdPeople, MdShield } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import StatsCounter from '../components/StatsCounter';
import './About.css';

function About() {
  const founders = [
    {
      name: 'ALEX NABONGHO',
      role: 'UGANDAN COORDINATOR',
      bio: 'Alex has served as the Ugandan co-ordinator since 2012 with Just Cause. He is the link to the programs and projects between the team in Canada and Uganda. Alex co-ordinates and leads the team when there are Just Cause volunteers on the ground in Uganda.',
      image: '/alex.png'
    },
    {
      name: 'MICHELLE MASSARO',
      role: 'Co-Founder & Director',
      bio: 'Michelle is a Visual Arts teacher with the LDCSB and a FIRST Robotics lead mentor. This is where the passion for teaching & introducing STEAM to students in Uganda began! As the robotics program lead.',
      image: '/image.png'
    },
    {
      name: 'SARA HANSEN',
      role: 'Co-Founder',
      bio: 'Sara is a high school leadership teacher for the WRDSB. She serves as the secretary and treasurer for Just Cause while in Canada. In addition to this role, she oversees our fundraising, develops project framework and project phasing, reports to the CRA and communicates progress with sponsors. She is also our lead guest speaker and leads our volunteer teams. ',
      image: '/sarah.png'
    },
  ];

  const mentors = [
    {
      name: 'Katalo Abubaker',
      role: 's.T.E.A.M education OUTREACH COORDINATOR',
      bio: 'Baker first became involved with Just Cause in 2016. He was a member of the JRobotics Team in highschool and has since become one of our STEAM Education Outreach Coordinators. He helps mentor robotics teams and teaches robotics through outreach programs to schools.',
      image: 'https://via.placeholder.com/150x150/1a3a5c/ffffff?text=Peter'
    },
    {
      name: 'Mpala Ronald',
      role: 's.T.E.A.M education OUTREACH COORDINATOR ',
      bio: 'Ronnie first became involved with Just Cause in 2016. He was a member of the JRobotics Team in highschool and has since become one of our STEAM Education Outreach Coordinators. He helps mentor robotics teams and teaches robotics through outreach programs to schools.',
      image: 'https://via.placeholder.com/150x150/2d6a9f/ffffff?text=Janet'
    },
    {
      name: 'Ziwa Picavet',
      role: 's.T.E.A.M education OUTREACH COORDINATOR',
      bio: 'Picavet first became involved with Just Cause in 2016. He was a member of the JRobotics Team in highschool and has since become one of our STEAM Education Outreach Coordinators. He helps mentor robotics teams and teaches robotics through outreach programs to schools.',
      image: 'https://via.placeholder.com/150x150/ff0000/ffffff?text=Robert'
    },
    {
      name: 'Ssemanda Godwin',
      role: 's.T.E.A.M education OUTREACH COORDINATOR',
      bio: 'Godwin first became involved with Just Cause in 2016. He was a member of the JRobotics Team in highschool and has since become one of our STEAM Education Outreach Coordinators. He helps mentor robotics teams and teaches robotics through outreach programs to schools.',
      image: 'https://via.placeholder.com/150x150/1a3a5c/ffffff?text=Alice'
    },
  ];

  const values = [
    { icon: FaHeart, title: 'Passion', desc: 'Enthusiasm for robotics and creating meaningful impact.' },
    { icon: MdPeople, title: 'Teamwork', desc: 'Collaboration and collective success for all.' },
    { icon: FaLightbulb, title: 'Innovation', desc: 'Creativity and pushing technological boundaries.' },
    { icon: MdShield, title: 'Integrity', desc: 'Honesty, accountability, and ethical leadership.' },
    { icon: FaGlobe, title: 'Inclusion', desc: 'Equal opportunities and accessibility for everyone.' }
  ];
  

  const timeline = [
    { year: '2018', desc: 'Uganda Robotics League founded with a vision to promote robotics education in Uganda.' },
    { year: '2019', desc: 'Launched the first robotics challenge involving approximately 25 teams.' },
    { year: '2021', desc: 'Grew to over 100 teams and hosted the first national championship.' },
    { year: '2023', desc: 'Expanded into additional regions and schools across Uganda.' },
    { year: '2026+', desc: 'Continuing innovation and empowering the next generation of robotics leaders.' }
  ];

  return (
    <div className="about-page">
 {/* Hero Section */}
<section className="about-hero">
  <div className="about-hero-overlay"></div>
  <div className="about-hero-content">
    <div className="about-hero-left">
      <div className="breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">About Us</span>
      </div>
      <h1>About the Uganda Robotics League</h1>
      <p>
        A community of innovators, educators, and problem solvers building the future 
        through robotics education, innovation, and competition.
      </p>
      <div className="about-hero-buttons">
        <button className="btn-about-primary">Our Story</button>
        <button className="btn-about-secondary">Join Our Mission</button>
      </div>
    </div>
    <div className="about-hero-right">
      <div className="about-image-wrapper">
        <img 
          src="/hero2.jpg" 
          alt="Students building a robotics competition robot" 
        />
        <div className="about-image-overlay"></div>
      </div>
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-left">
            <span className="mission-label">OUR MISSION</span>
            <h2>Empowering Young Ugandans Through Robotics</h2>
            <p>
              We inspire and equip young Ugandans with skills, confidence, and opportunities 
              to become innovators and leaders in robotics and technology.
            </p>
            <div className="mission-pillars">
              <div className="pillar">
                <FaGlobe className="pillar-icon" />
                <h3>Inspire</h3>
                <p>Spark curiosity and creativity through engaging robotics experiences.</p>
              </div>
              <div className="pillar">
                <FaBook className="pillar-icon" />
                <h3>Educate</h3>
                <p>Hands-on learning and mentorship to build real-world skills.</p>
              </div>
              <div className="pillar">
                <FaUsers className="pillar-icon" />
                <h3>Empower</h3>
                <p>Opportunities to compete, lead, and create meaningful impact.</p>
              </div>
            </div>
          </div>
          <div className="mission-right">
            <img 
              src="/winning.jpg" 
              alt="Championship winning robotics team" 
            />
          </div>
        </div>
      </section>

   {/* Founders Section */}
      <section className="founders-section">
        <div className="section-header">
          <h2>OUR FOUNDERS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-image">
                <img src={founder.image} alt={founder.name} />
              </div>
              <h3>{founder.name}</h3>
              <span className="founder-role">{founder.role}</span>
              <p>{founder.bio}</p>
              <div className="founder-social">
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={founder.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <FaEnvelope />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Mentors Section */}
      <section className="mentors-section">
        <div className="section-header">
          <h2>OUR MENTORS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="mentors-grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
              <div className="mentor-image">
                <img src={mentor.image} alt={mentor.name} />
              </div>
              <h3>{mentor.name}</h3>
              <span className="mentor-role">{mentor.role}</span>
              <p>{mentor.bio}</p>
              <FaLinkedin className="mentor-linkedin" />
            </div>
          ))}
        </div>
      </section>

        {/* Impact Banner */}
      <section className="impact-banner">
        <div className="impact-content">
          <div className="impact-left">
            <span className="impact-label">OUR IMPACT</span>
            <h2>Building a Stronger Robotics Community</h2>
            <p>
              Schools, mentors, and partners working together to shape the next generation 
              of innovators across Uganda.
            </p>
          </div>
          <div className="impact-stats">
            <StatsCounter 
              icon={FaTrophy} 
              endValue="7" 
              label="Seasons" 
            />
            <StatsCounter 
              icon={FaUsers} 
              endValue="50+" 
              label="Teams" 
            />
            <StatsCounter 
              icon={PiGraduationCap} 
              endValue="200+" 
              label="Students Impacted" 
            />
            <StatsCounter 
              icon={FaFlag} 
              endValue="20+" 
              label="Districts Reached" 
            />
            <StatsCounter 
              icon={FaStar} 
              endValue="22+" 
              label="Partners & Supporters" 
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2>OUR VALUES</h2>
          <div className="red-underline"></div>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <value.icon className="value-icon" />
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-header">
          <h2>OUR JOURNEY</h2>
          <div className="red-underline"></div>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <p>{item.desc}</p>
              </div>
              {index < timeline.length - 1 && <div className="timeline-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Be Part of Our Story</h2>
            <p>Join students, mentors, and partners in building the future of robotics in Uganda.</p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">Register Your Team</button>
            <button className="cta-secondary">Become a Partner</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;