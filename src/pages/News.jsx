import { FaSearch, FaCalendarAlt, FaArrowRight, FaEnvelope, FaUserPlus, FaTrophy, FaUsers, FaChalkboardTeacher, FaHandshake, FaBullhorn } from 'react-icons/fa';
import { MdPeople, MdEvent, MdCategory } from 'react-icons/md';
import './News.css';

function News() {
  const featuredArticle = {
    title: 'J-Robotics Crowned URL 2025 Champions!',
    date: '12 May 2026',
    summary: 'J-Robotics from Jinja Secondary School emerged victorious after an intense final match at the National Championship.',
    image: 'https://via.placeholder.com/800x450/ffd700/000000?text=Champions+2025',
    category: 'Featured'
  };

  const sideArticles = [
    {
      title: 'Building More Than Robots: Student Impact Stories',
      date: '5 May 2026',
      summary: 'How robotics transforms confidence, teamwork, and leadership in Ugandan schools.',
      image: 'https://via.placeholder.com/120x120/1a3a5c/ffffff?text=Student+Impact'
    },
    {
      title: 'Coaches Training Workshop Held in Jinja',
      date: '28 April 2026',
      summary: 'Educators from 25 schools received robotics coaching and mentorship training.',
      image: 'https://via.placeholder.com/120x120/2d6a9f/ffffff?text=Coaches+Workshop'
    },
    {
      title: 'Regional Qualifiers Begin Across Uganda',
      date: '20 April 2026',
      summary: 'Teams from multiple regions compete for qualification to the National Championship.',
      image: 'https://via.placeholder.com/120x120/ff0000/ffffff?text=Regional+Qualifiers'
    }
  ];

  const latestNews = [
    {
      title: 'Innovation Challenge Winners Announced',
      date: '15 May 2026',
      summary: 'Teams impressed judges with outstanding creativity and engineering solutions.',
      image: 'https://via.placeholder.com/400x250/1a3a5c/ffffff?text=Innovation+Challenge'
    },
    {
      title: 'New Robotics Labs Launch in Three Schools',
      date: '10 May 2026',
      summary: 'Partnerships with local organizations help expand robotics education across Uganda.',
      image: 'https://via.placeholder.com/400x250/2d6a9f/ffffff?text=New+Robotics+Labs'
    },
    {
      title: 'Python Programming Bootcamp for Students',
      date: '5 May 2026',
      summary: 'Practical hands-on training opportunity for aspiring robotics programmers.',
      image: 'https://via.placeholder.com/400x250/ff0000/ffffff?text=Python+Bootcamp'
    }
  ];

  const popularTopics = [
    { icon: FaTrophy, name: 'Competition Updates', count: '24 articles' },
    { icon: FaUsers, name: 'Team Achievements', count: '18 articles' },
    { icon: FaChalkboardTeacher, name: 'Training & Workshops', count: '14 articles' },
    { icon: FaHandshake, name: 'Partnerships', count: '11 articles' },
    { icon: FaBullhorn, name: 'Announcements', count: '30 articles' }
  ];

  const categories = ['All News', 'Announcements', 'Competitions', 'Stories', 'Training', 'Partnerships', 'Events'];

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-overlay"></div>
        <div className="news-hero-content">
          <div className="news-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">News</span>
            </div>
            <h1>News & Stories<span className="hero-period">.</span></h1>
            <p>
              Stay updated with the latest stories, announcements, and achievements 
              from the Uganda Robotics League.
            </p>
          </div>
          <div className="news-hero-right">
            <img 
              src="https://via.placeholder.com/600x400/1a3a5c/ffffff?text=Students+Testing+Robot" 
              alt="Students testing a competition robot" 
            />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="news-categories">
        <div className="categories-container">
          <div className="categories-tabs">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`category-tab ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="search-news">
            <FaSearch className="search-news-icon" />
            <input type="text" placeholder="Search news..." />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="news-main">
        <div className="news-container">
          {/* Left Column - Featured Article */}
          <div className="news-featured">
            <div className="featured-card">
              <span className="featured-badge">FEATURED</span>
              <div className="featured-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} />
              </div>
              <div className="featured-content">
                <span className="featured-date">{featuredArticle.date}</span>
                <h2>{featuredArticle.title}</h2>
                <p>{featuredArticle.summary}</p>
                <a href="/news" className="read-more-red">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Side Articles */}
          <div className="news-sidebar">
            {sideArticles.map((article, index) => (
              <div key={index} className="side-article">
                <div className="side-article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="side-article-content">
                  <span className="side-article-date">{article.date}</span>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <a href="/news" className="read-more-red">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <div className="latest-news-container">
          <div className="latest-news-left">
            <div className="section-header-left">
              <h2>Latest News</h2>
              <div className="red-underline-left"></div>
            </div>
            <div className="latest-news-grid">
              {latestNews.map((news, index) => (
                <div key={index} className="latest-news-card">
                  <div className="latest-news-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="latest-news-content">
                    <span className="latest-news-date">{news.date}</span>
                    <h3>{news.title}</h3>
                    <p>{news.summary}</p>
                    <a href="/news" className="read-more-red">
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="latest-news-actions">
              <button className="btn-view-all-news">View All News</button>
            </div>
          </div>

          {/* Right Sidebar - Popular Topics */}
          <div className="latest-news-right">
            <div className="section-header-left">
              <h2>Popular Topics</h2>
              <div className="red-underline-left"></div>
            </div>
            <div className="topics-list">
              {popularTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <topic.icon className="topic-icon" />
                  <div className="topic-info">
                    <span className="topic-name">{topic.name}</span>
                    <span className="topic-count">{topic.count}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Story Card */}
            <div className="submit-story-card">
              <h3>Have a Story to Share?</h3>
              <p>Feature your robotics team, event, or achievement on our website.</p>
              <button className="btn-submit-story">
                Submit Your Story <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <FaEnvelope />
          </div>
          <div className="newsletter-text">
            <h2>Stay Connected</h2>
            <p>Subscribe to receive the latest news, updates, and opportunities from the Uganda Robotics League.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;