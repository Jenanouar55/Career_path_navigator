import React from 'react';
import './AboutUspage.css';

const AboutUspage = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Discover who we are, what we do, and what drives us forward.</p>
      </div>

      {/* Company Overview */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          We started with a mission to revolutionize the industry by delivering
          exceptional services to our customers. Our journey began in 2025,
          and since then, we’ve grown into a trusted name for innovative solutions
          and customer satisfaction.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower individuals and businesses by providing outstanding services
          and solutions that meet their needs and exceed their expectations.
        </p>
        <h2>Our Vision</h2>
        <p>
          To be the global leader in [industry/service], recognized for our
          innovation, integrity, and excellence.
        </p>
      </section>

      {/* Core Values */}
      <section className="about-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Continuously improving and adapting.</li>
          <li><strong>Integrity:</strong> Acting with honesty and transparency.</li>
          <li><strong>Customer Focus:</strong> Putting our clients first.</li>
          <li><strong>Excellence:</strong> Striving for quality in everything we do.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section id="t-section" className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Hanzar Ziad</h3>
            <p>Back-end Devloper</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Mary Maina</h3>
            <p>Back-end Devloper</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Uzor Solomon</h3>
            <p>Front-end Developer</p>
          </div>
          <div className="team-member1">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Bolatito shorungbe</h3>
            <p>Fron-end Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more about us? <a href="/contact">Get in touch</a> with us today.
        </p>
      </section>
    </div>
  );
};

export default AboutUspage;
