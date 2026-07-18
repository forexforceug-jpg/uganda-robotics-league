import { FaPaperPlane, FaCalendarAlt, FaHeadset, FaFilePdf, FaInfoCircle, FaUserPlus, FaTrophy, FaGraduationCap, FaPhone, FaEnvelope, FaUser, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './RegisterTeam.css';

function RegisterTeam() {
  const steps = [
    'Submit your registration',
    'Application review',
    'Confirmation email',
    'Begin your robotics journey'
  ];

  // State for team members
  const [members, setMembers] = useState([
    { id: 1, name: '', role: '' },
    { id: 2, name: '', role: '' },
    { id: 3, name: '', role: '' }
  ]);

  const [nextId, setNextId] = useState(4);

  // Add member function
  const addMember = () => {
    if (members.length < 10) {
      setMembers([...members, { id: nextId, name: '', role: '' }]);
      setNextId(nextId + 1);
    }
  };

  // Remove member function
  const removeMember = (id) => {
    if (members.length > 3) {
      setMembers(members.filter(member => member.id !== id));
    }
  };

  // Update member function
  const updateMember = (id, field, value) => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  return (
    <div className="register-page">
      {/* Hero Section */}
      <section className="register-hero">
        <div className="register-hero-overlay"></div>
        <div className="register-hero-content">
          <div className="register-hero-left">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">›</span>
              <span>Teams</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Register a Team</span>
            </div>
            <h1>Register a Team</h1>
            <p>
              Join the Uganda Robotics League and become part of a growing community that 
              builds innovators and future leaders through robotics education.
            </p>
          </div>
          <div className="register-hero-right">
            <img 
              src="https://via.placeholder.com/600x400/1a3a5c/ffffff?text=Students+Building+Robot" 
              alt="Students building a robot" 
            />
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="register-form-section">
        <div className="register-container">
          {/* Left Column - Form */}
          <div className="register-form-left">
            <form className="register-form">
              {/* Team Information */}
              <div className="form-section">
                <h2>TEAM INFORMATION</h2>
                <div className="red-underline-left"></div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Team Name <span className="required">*</span></label>
                    <input type="text" placeholder="e.g., J-Robotics" required />
                  </div>
                  <div className="form-group">
                    <label>Program Category <span className="required">*</span></label>
                    <select required>
                      <option value="">Select Category</option>
                      <option value="primary">Primary Robotics</option>
                      <option value="lower-secondary">Lower Secondary Robotics</option>
                      <option value="advanced-secondary">Advanced Secondary Robotics</option>
                      <option value="university">University & Open Innovation</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>School or Organization <span className="required">*</span></label>
                    <input type="text" placeholder="Enter school name" required />
                  </div>
                  <div className="form-group">
                    <label>District <span className="required">*</span></label>
                    <select required>
                      <option value="">Select District</option>
                      <option value="kampala">Kampala</option>
                      <option value="jinja">Jinja</option>
                      <option value="wakiso">Wakiso</option>
                      <option value="mbale">Mbale</option>
                      <option value="gulu">Gulu</option>
                      <option value="mbarara">Mbarara</option>
                      <option value="juba">Juba</option>
                      <option value="entebbe">Entebbe</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Team Email Address <span className="required">*</span></label>
                    <input type="email" placeholder="Enter team email" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Team Coach or Mentor <span className="required">*</span></label>
                    <input type="text" placeholder="Full name of coach" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input type="tel" placeholder="+256 XXX XXX XXX" required />
                  </div>
                </div>
              </div>

              {/* Team Members - MODIFIED SECTION */}
              <div className="form-section">
                <h2>TEAM MEMBERS</h2>
                <div className="red-underline-left"></div>
                <div className="info-banner">
                  <FaInfoCircle className="info-icon" />
                  <span>Minimum of 3 members and maximum of 10 members allowed per team.</span>
                </div>
                <div className="members-grid">
                  {members.map((member) => (
                    <div key={member.id} className="member-row">
                      <div className="form-group">
                        <label>Member Name <span className="required">*</span></label>
                        <input 
                          type="text" 
                          placeholder="Enter member name" 
                          value={member.name}
                          onChange={(e) => updateMember(member.id, 'name', e.target.value)}
                          required 
                        />
                      </div>
                      <div className="form-group member-role-group">
                        <label>Role / Position <span className="required">*</span></label>
                        <div className="role-select-wrapper">
                          <select 
                            value={member.role}
                            onChange={(e) => updateMember(member.id, 'role', e.target.value)}
                            required
                          >
                            <option value="">Select Role</option>
                            <option value="captain">Team Captain</option>
                            <option value="programmer">Programmer</option>
                            <option value="mechanic">Mechanical Lead</option>
                            <option value="electrician">Electrical Lead</option>
                            <option value="strategist">Strategist</option>
                            <option value="member">Team Member</option>
                          </select>
                          {members.length > 3 && (
                            <button 
                              type="button" 
                              className="btn-remove-member"
                              onClick={() => removeMember(member.id)}
                              title="Remove member"
                            >
                              <FaTrash />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="member-actions">
                  <button 
                    type="button" 
                    className="btn-add-member"
                    onClick={addMember}
                    disabled={members.length >= 10}
                  >
                    + Add Another Member {members.length >= 10 && '(Max 10)'}
                  </button>
                  <span className="member-count">
                    {members.length} / 10 members
                  </span>
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-section">
                <h2>ADDITIONAL INFORMATION</h2>
                <div className="red-underline-left"></div>
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Why do you want to join the Uganda Robotics League? <span className="required">*</span></label>
                    <textarea rows="4" placeholder="Describe your team's goals, ambitions, and motivation..." required></textarea>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>How did you hear about URL? <span className="required">*</span></label>
                    <select required>
                      <option value="">Select an option</option>
                      <option value="school">School</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend or Fellow Student</option>
                      <option value="event">Robotics Event</option>
                      <option value="workshop">Workshop or Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group full-width">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I agree to the <a href="/rules" className="terms-link">Rules</a>, 
                        <a href="/terms" className="terms-link"> Terms and Conditions</a> 
                        of the Uganda Robotics League.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="reset" className="btn-reset">Reset</button>
                <button type="submit" className="btn-submit">
                  Submit Registration <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Sidebar */}
          <div className="register-form-right">
            {/* Registration Information */}
            <div className="sidebar-card">
              <div className="card-header">
                <FaCalendarAlt className="card-icon" />
                <h3>REGISTRATION INFORMATION</h3>
              </div>
              <div className="card-content">
                <p><strong>Registration Period:</strong> 1st May to 30th September 2026</p>
                <p>Schools, clubs, and organizations with eligible students may register.</p>
                <p><strong>Team Size:</strong> 3 – 10 members</p>
                <div className="steps-list">
                  <h4>Registration Journey:</h4>
                  <ol>
                    {steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="sidebar-card support-card">
              <div className="card-header">
                <FaHeadset className="card-icon" />
                <h3>NEED HELP?</h3>
              </div>
              <div className="card-content">
                <p>Assistance is available throughout the registration process.</p>
                <div className="support-options">
                  <div className="support-item">
                    <FaEnvelope className="support-icon" />
                    <span>support@ugandaroboticsleague.org</span>
                  </div>
                  <div className="support-item">
                    <FaPhone className="support-icon" />
                    <span>+256 123 456 789</span>
                  </div>
                  <div className="support-item">
                    <FaFilePdf className="support-icon" />
                    <span>Registration Guide <span className="file-size">(PDF, 2.4 MB)</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="register-cta">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Be Part of Something Bigger</h2>
            <p>Join a movement that inspires, builds, and empowers the next generation of innovators.</p>
          </div>
          <div className="cta-right">
            <Link to="/programs" className="cta-primary">
              <FaGraduationCap /> Explore Programs
            </Link>
            <Link to="/competitions" className="cta-secondary">
              <FaTrophy /> View Competitions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterTeam;