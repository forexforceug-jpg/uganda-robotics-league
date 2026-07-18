import { FaBrain, FaUsers, FaCode, FaLightbulb, FaChartLine, FaUserPlus, FaBook, FaTools, FaTrophy, FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import './Programs.css';

function Programs() {
  const programs = [
    {
      title: 'Primary Robotics',
      description: 'Fun, hands-on activities introducing young learners to STEM and robotics through engaging projects.',
      ageRange: '7–12 years',
      image: 'https://via.placeholder.com/400x250/1a3a5c/ffffff?text=Primary+Robotics',
      icon: '🎮'
    },
    {
      title: 'Lower Secondary Robotics',
      description: 'Build essential skills in design, programming, and teamwork through engaging challenges.',
      ageRange: '13–15 years',
      image: 'https://via.placeholder.com/400x250/2d6a9f/ffffff?text=Lower+Secondary',
      icon: '⚙️'
    },
    {
      title: 'Advanced Secondary Robotics',
      description: 'Take on advanced engineering and competition challenges at the highest level.',
      ageRange: '16–18 years',
      image: 'https://via.placeholder.com/400x250/ff0000/ffffff?text=Advanced+Secondary',
      icon: '🏆'
    },
    {
      title: 'University & Open Innovation',
      description: 'Mentorship, research, and innovation opportunities for university students and young innovators.',
      ageRange: '18+ years',
      image: 'https://via.placeholder.com/400x250/1a3a5c/ffffff?text=University+Innovation',
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      icon: FaBrain,
      title: 'Problem Solving',
      desc: 'Learn to tackle real-world challenges through creativity and critical thinking.'
    },
    {
      icon: MdPeople,
      title: 'Teamwork',
      desc: 'Develop collaboration, communication, and leadership skills.'
    },
    {
      icon: FaCode,
      title: 'Technical Skills',
      desc: 'Gain practical experience in engineering, programming, and design.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      desc: 'Transform ideas into meaningful technological solutions that create impact.'
    },
    {
      icon: FaChartLine,
      title: 'Future Ready',
      desc: 'Prepare for STEM careers and an increasingly technology-driven world.'
    }
  ];

  const pathway = [
    { icon: FaUserPlus, title: 'Discover', desc: 'Explore robotics and exciting possibilities.' },
    { icon: FaBook, title: 'Learn', desc: 'Acquire fundamental knowledge through guided lessons.' },
    { icon: FaTools, title: 'Build', desc: 'Design and construct robots using acquired skills.' },
    { icon: FaTrophy, title: 'Compete', desc: 'Participate in competitions and improve your creations.' },
    { icon: FaStar, title: 'Lead', desc: 'Inspire others and become a leader in your community.' }
  ];

  const curriculum = [
    'Robot Design & Construction',
    'Programming & Automation',
    'Engineering & Mechanics',
    'Sensors & Electronics',
    'Teamwork & Project Management',
    'Innovation & Entrepreneurship'
  ];

  const equipment = [
    'Robotics Kits & Components',
    'Tools & Workshop Access',
    'Training Materials',
    'Mentorship & Guidance',
    'Competition Opportunities',
    'A Supportive Community'
  ];

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-overlay"></div>
        <div className="programs-hero-content">
          <div className="programs-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Programs</span>
            </div>
            <h1>Our Programs</h1>
            <p>
              Designed for everyone from beginners to advanced innovators. Build skills, 
              spark creativity, and nurture the next generation of problem solvers.
            </p>
          </div>
          <div className="programs-hero-right">
            <img 
              src="https://via.placeholder.com/600x400/1a3a5c/ffffff?text=Students+Working+on+Robot" 
              alt="Students working on a competition robot" 
            />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="section-header">
          <h2>PROGRAMS FOR EVERY STUDENT</h2>
          <div className="red-underline"></div>
        </div>
        <div className="programs-cards">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-card-image">
                <img src={program.image} alt={program.title} />
                <div className="program-card-icon">{program.icon}</div>
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="program-age">{program.ageRange}</div>
              <a href="/program-details" className="program-learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Robotics Matters */}
      <section className="benefits-section">
        <div className="section-header">
          <h2>WHY ROBOTICS EDUCATION MATTERS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <benefit.icon className="benefit-icon" />
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Pathway */}
      <section className="pathway-section">
        <div className="section-header">
          <h2>THE URL LEARNING PATHWAY</h2>
          <div className="red-underline"></div>
        </div>
        <div className="pathway-steps">
          {pathway.map((step, index) => (
            <div key={index} className="pathway-step">
              <div className="pathway-icon">
                <step.icon />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < pathway.length - 1 && <div className="pathway-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Program Categories & Equipment */}
      <section className="equipment-section">
        <div className="section-header">
          <h2>PROGRAM CATEGORIES & EQUIPMENT</h2>
          <div className="red-underline"></div>
        </div>
        <div className="equipment-container">
          <div className="equipment-image-left">
            <img 
              src="https://via.placeholder.com/400x300/1a3a5c/ffffff?text=Competition+Robot" 
              alt="Competition robot on arena field" 
            />
          </div>
          <div className="equipment-column">
            <h3>What You'll Learn</h3>
            <ul>
              {curriculum.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="equipment-image-center">
            <img 
              src="https://via.placeholder.com/300x300/2d6a9f/ffffff?text=Students+Building" 
              alt="Students assembling a robot" 
            />
          </div>
          <div className="equipment-column">
            <h3>What We Provide</h3>
            <ul>
              {equipment.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="programs-cta">
        <div className="programs-cta-content">
          <div className="programs-cta-left">
            <img 
              src="https://via.placeholder.com/400x300/1a3a5c/ffffff?text=Students+Working" 
              alt="Students working on robot" 
            />
          </div>
          <div className="programs-cta-right">
            <h2>Ready to start your journey?</h2>
            <p>
              Join students across Uganda in learning, building, and competing 
              through robotics education.
            </p>
            <div className="programs-cta-buttons">
              <button className="cta-primary">Register Your Team</button>
              <button className="cta-secondary">Explore Competitions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;