import { FaSearch, FaBook, FaUsers, FaTools, FaCode, FaTrophy, FaShieldAlt, FaPlay, FaFilePdf, FaDownload, FaVideo, FaPlus, FaHeadset, FaUserPlus } from 'react-icons/fa';
import { MdPeople, MdDescription } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import './Resources.css';

function Resources() {
  const categories = [
    {
      icon: FaBook,
      title: 'Student Resources',
      description: 'Guides, tutorials, and activities for students at all learning levels.',
      link: '/resources/students'
    },
    {
      icon: MdPeople,
      title: 'Coach & Mentor Resources',
      description: 'Training materials and support resources for educators and mentors.',
      link: '/resources/coaches'
    },
    {
      icon: FaTools,
      title: 'Build Instructions',
      description: 'Step-by-step robot construction guides and design references.',
      link: '/resources/build'
    },
    {
      icon: FaCode,
      title: 'Programming Guides',
      description: 'Programming tutorials, sample code, and best practices.',
      link: '/resources/programming'
    },
    {
      icon: FaTrophy,
      title: 'Competition Resources',
      description: 'Game manuals, rules, field specifications, and inspection guides.',
      link: '/resources/competition'
    },
    {
      icon: FaShieldAlt,  // Changed from FaShield to FaShieldAlt
      title: 'Safety Resources',
      description: 'Robotics laboratory safety guidelines and best practices.',
      link: '/resources/safety'
    },
    {
      icon: FaPlay,
      title: 'Training Videos',
      description: 'Educational demonstrations and expert video lessons.',
      link: '/resources/videos'
    },
    {
      icon: MdDescription,
      title: 'Downloads & Templates',
      description: 'Useful forms, checklists, and downloadable templates.',
      link: '/resources/downloads'
    }
  ];

  const featuredResources = [
    {
      title: 'URL 2026 Game Manual',
      description: 'The official manual for the 2026 competition season.',
      image: '../../public/manual.png',
      category: 'Competition Resources',
      format: 'PDF',
      size: '4.2 MB'
    },
    {
      title: 'Starter Robot Build Guide',
      description: 'A step-by-step guide for building a competition-ready robot.',
      image: '../../public/instructions.jpg',
      category: 'Build Instructions',
      format: 'PDF',
      size: '3.8 MB'
    },
    {
      title: 'Python Basics for Robotics',
      description: 'Learn the fundamentals of Python programming for robotics beginners.',
      image: '../../public/python.jpg',
      category: 'Programming Guides',
      format: 'PDF',
      size: '5.1 MB'
    },
    {
      title: '2026 Field Setup Guide',
      description: 'Field dimensions, setup instructions, and game element details.',
      image: '../../public/field.png',
      category: 'Competition Resources',
      format: 'PDF',
      size: '6.3 MB'
    }
  ];

  const videos = [
    {
      title: 'Understanding the 2026 Game',
      description: 'Learn the competition rules and scoring system.',
      image: '../../public/game.jpg',
      duration: '12:30'
    },
    {
      title: 'Building a Strong Robot Chassis',
      description: 'Robot construction techniques and mechanical reliability.',
      image: '../../public/game.jpg',
      duration: '18:45'
    },
    {
      title: 'Programming Autonomous Modes',
      description: 'Learn how to program autonomous routines for your robot.',
      image: '../../public/auto.png',
      duration: '15:20'
    }
  ];

  const faqs = [
    {
      question: 'Where can I download the current game manual?',
      answer: 'You can download the latest game manual from the Competitions > Current Season page or directly from the Competition Resources section.'
    },
    {
      question: 'How do I register a team for the competition?',
      answer: 'Team registration can be completed online through the "Register a Team" button on the navigation bar. You will need to provide your school name, team name, and contact information.'
    },
    {
      question: 'What are the robot size and weight limitations?',
      answer: 'The robot must fit within a 18" x 18" x 18" (45.7 cm x 45.7 cm x 45.7 cm) cube at the start of each match and weigh no more than 15 lbs (6.8 kg).'
    },
    {
      question: 'Can beginners participate in the league?',
      answer: 'Absolutely! The Uganda Robotics League welcomes students of all skill levels. We have programs and resources designed for beginners through advanced participants.'
    },
    {
      question: 'Where can I get additional support if needed?',
      answer: 'Our support team is available to help. You can contact us through the Contact page, email us at support@ugandaroboticsleague.org, or reach out to your regional coordinator.'
    }
  ];

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="resources-hero-overlay"></div>
        <div className="resources-hero-content">
          <div className="resources-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Resources</span>
            </div>
            <h1>Resources <span className="hero-highlight">Learn.</span> <span className="hero-highlight">Build.</span> <span className="hero-highlight">Compete.</span></h1>
            <p>
              Explore a library of guides, manuals, videos, and tools designed to support 
              students, teachers, and mentors throughout every step of their robotics journey.
            </p>
            <div className="search-box-hero">
              <FaSearch className="search-icon-hero" />
              <input type="text" placeholder="Search resources..." />
            </div>
          </div>
          <div className="resources-hero-right">
            <img 
              src="../../public/robot3.jpeg" 
              alt="Students working on a robot in a laboratory" 
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>RESOURCE CATEGORIES</h2>
          <div className="red-underline"></div>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <category.icon className="category-icon" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href={category.link} className="category-explore">
                Explore <FaSearch />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="featured-resources">
        <div className="section-header">
          <h2>FEATURED RESOURCES</h2>
          <div className="red-underline"></div>
        </div>
        <div className="featured-grid">
          {featuredResources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-image">
                <img src={resource.image} alt={resource.title} />
                <span className="resource-category">{resource.category}</span>
              </div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-footer">
                  <div className="resource-meta">
                    <FaFilePdf className="pdf-icon" />
                    <span>{resource.format} • {resource.size}</span>
                  </div>
                  <a href="/resources" className="resource-download">
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-actions">
          <button className="btn-view-all-resources">View All Resources</button>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section">
        <div className="section-header">
          <h2>WATCH. LEARN. IMPROVE.</h2>
          <div className="red-underline"></div>
        </div>
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-thumbnail">
                <img src={video.image} alt={video.title} />
                <div className="video-play-overlay">
                  <div className="video-play-button">
                    <FaPlay />
                  </div>
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
        <div className="videos-actions">
          <button className="btn-view-all-videos">View All Videos</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${index === 0 ? 'active' : ''}`}>
              <div className="faq-question">
                <span>{faq.question}</span>
                <FaPlus className="faq-toggle" />
              </div>
              {index === 0 && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Support Banner */}
      <section className="support-banner">
        <div className="support-content">
          <div className="support-left">
            <div className="support-icon-wrapper">
              <FaHeadset className="support-icon" />
            </div>
            <div className="support-text">
              <h2>Need More Support?</h2>
              <p>Our team is available to help you succeed throughout your robotics journey.</p>
            </div>
          </div>
          <div className="support-right">
            <button className="btn-support">
              <FaHeadset /> Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;