import { FaHandshake, FaGraduationCap, FaCode, FaTrophy, FaUsers, FaBullhorn, FaArrowRight, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserPlus } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import './Partners.css';

function Partners() {
  const categories = [
    {
      icon: FaHandshake,
      title: 'Organizing Partners',
      description: 'Organizations that support league leadership, coordination, and growth.'
    },
    {
      icon: FaGraduationCap,
      title: 'Education Partners',
      description: 'Schools, universities, and training institutions that empower students.'
    },
    {
      icon: FaCode,
      title: 'Technology Partners',
      description: 'Companies that provide technology, tools, and technical expertise.'
    },
    {
      icon: FaTrophy,
      title: 'Sponsor Partners',
      description: 'Sponsors that invest in young talent and the future of robotics.'
    },
    {
      icon: MdPeople,
      title: 'Community Partners',
      description: 'Organizations that support community engagement and outreach.'
    },
    {
      icon: FaBullhorn,
      title: 'Media Partners',
      description: 'Organizations that amplify our stories, events, and impact.'
    }
  ];

  const platinumPartners = [
    { name: 'Just Cause Education Outreach', role: 'Organizing Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Just+Cause' },
    { name: 'Stanbic Bank', role: 'Platinum Sponsor', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Stanbic+Bank' },
    { name: 'DFCU Bank', role: 'Platinum Sponsor', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=DFCU+Bank' },
    { name: 'Huawei', role: 'Technology Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Huawei' }
  ];

  const goldPartners = [
    { name: 'Makerere University', role: 'Education Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Makerere+University' },
    { name: 'VEX Robotics', role: 'Technology Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=VEX+Robotics' },
    { name: 'MTN Uganda', role: 'Gold Sponsor', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=MTN+Uganda' },
    { name: 'NSSF', role: 'Sponsor Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=NSSF' }
  ];

  const silverPartners = [
    { name: 'Kiira Motors Corporation', role: 'Technology Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Kiira+Motors' },
    { name: 'Jinja College', role: 'Education Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Jinja+College' },
    { name: 'NBS Television', role: 'Media Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=NBS+Television' },
    { name: 'Rotary Uganda', role: 'Community Partner', logo: 'https://via.placeholder.com/200x100/cccccc/000000?text=Rotary+Uganda' }
  ];

  const impactStats = [
    { icon: FaHandshake, number: '150+', label: 'Partners & Supporters' },
    { icon: FaGraduationCap, number: '100+', label: 'Schools Reached' },
    { icon: FaUsers, number: '5,000+', label: 'Students Empowered' },
    { icon: FaTrophy, number: '6', label: 'National Championships' },
    { icon: FaCode, number: '100+', label: 'Robotics Activities' }
  ];

  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="partners-hero-overlay"></div>
        <div className="partners-hero-content">
          <div className="partners-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Partners</span>
            </div>
            <h1>Building the Future Together</h1>
            <p>
              Partners play a vital role in empowering young Ugandans through robotics education, 
              innovation, and competitive opportunities.
            </p>
            <button className="btn-hero-partner">Become a Partner</button>
          </div>
          <div className="partners-hero-right">
            <img 
              src="../../public/partners.jpg" 
              alt="Students collaborating on a robot" 
            />
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="ecosystem-section">
        <div className="section-header">
          <h2>OUR PARTNERSHIP ECOSYSTEM</h2>
          <div className="red-underline"></div>
        </div>
        <p className="ecosystem-description">
          We collaborate with organizations, institutions, and individuals who share the vision 
          of inspiring the next generation of innovators and problem solvers.
        </p>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <category.icon className="category-icon" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valued Partners */}
      <section className="valued-partners">
        <div className="section-header">
          <h2>OUR VALUED PARTNERS</h2>
          <div className="red-underline"></div>
        </div>
        <div className="partner-filters">
          <button className="filter-tab active">All Partners</button>
          <button className="filter-tab">Organizing</button>
          <button className="filter-tab">Education</button>
          <button className="filter-tab">Technology</button>
          <button className="filter-tab">Sponsors</button>
          <button className="filter-tab">Community</button>
          <button className="filter-tab">Media</button>
        </div>

        {/* Platinum Tier */}
        <div className="partner-tier">
          <h3 className="tier-title platinum">PLATINUM PARTNERS</h3>
          <div className="partner-grid">
            {platinumPartners.map((partner, index) => (
              <div key={index} className="partner-card platinum">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="partner-role">{partner.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Tier */}
        <div className="partner-tier">
          <h3 className="tier-title gold">GOLD PARTNERS</h3>
          <div className="partner-grid">
            {goldPartners.map((partner, index) => (
              <div key={index} className="partner-card gold">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="partner-role">{partner.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="partner-tier">
          <h3 className="tier-title silver">SILVER PARTNERS</h3>
          <div className="partner-grid">
            {silverPartners.map((partner, index) => (
              <div key={index} className="partner-card silver">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="partner-role">{partner.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="section-header">
          <h2>TOGETHER, WE CREATE IMPACT</h2>
          <div className="red-underline"></div>
        </div>
        <div className="impact-stats">
          {impactStats.map((stat, index) => (
            <div key={index} className="impact-stat">
              <stat.icon className="impact-icon" />
              <div className="impact-number">{stat.number}</div>
              <div className="impact-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="testimonial-container">
          <button className="testimonial-nav">
            <FaChevronLeft />
          </button>
          <div className="testimonial-content">
            <div className="testimonial-image">
              <img 
                src="https://via.placeholder.com/120x120/1a3a5c/ffffff?text=Sarah+Nambusi" 
                alt="Sarah Nambusi" 
              />
            </div>
            <div className="testimonial-text">
              <FaQuoteLeft className="testimonial-quote" />
              <p>
                Partnering with the Uganda Robotics League is an investment in the potential 
                of Uganda's young people. Together, we are building a stronger and more 
                innovative future.
              </p>
              <div className="testimonial-author">
                <span className="author-name">Sarah Nambusi</span>
                <span className="author-title">Head of Corporate Affairs, Stanbic Bank Uganda</span>
              </div>
            </div>
          </div>
          <button className="testimonial-nav">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="partners-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Join Us in Building the Future</h2>
            <p>
              Partner with us in inspiring, equipping, and empowering the next generation 
              of innovators.
            </p>
          </div>
          <div className="cta-right">
            <button className="cta-primary">
              <FaUserPlus /> Become a Partner
            </button>
            <button className="cta-secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;