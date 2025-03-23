import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      
      <p>Feel free to connect with me through any of the following platforms:</p>
      
      <h4>
        LinkedIn: {' '}
        <a href="https://www.linkedin.com/in/sumedhkhodke/">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" width="20px" alt="LinkedIn" />
        </a>
      </h4>
      
      <h4>
        Github: {' '}
        <a href="https://github.com/sumedhkhodke">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" width="20px" alt="GitHub" />
        </a>
      </h4>
      
      <h4>
        Twitter/X: {' '}
        <a href="https://twitter.com/sumedh_khodke">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" width="20px" alt="Twitter" />
        </a>
      </h4>
      
      <h4>Email 📧</h4>
      <ul>
        <li><strong>Personal:</strong> <a href="mailto:sumedh.khodke@gmail.com">sumedh.khodke@gmail.com</a></li>
        <li><strong>School:</strong> <a href="mailto:sumedhk@buffalo.edu">sumedhk@buffalo.edu</a></li>
      </ul>
      
      <h4>Schedule a Meeting 📅</h4>
      <ul>
        <li><strong>Calendly:</strong> <a href="https://calendly.com/sumedhkhodke">Schedule time with me</a></li>
      </ul>
    </div>
  );
};

export default Contact; 