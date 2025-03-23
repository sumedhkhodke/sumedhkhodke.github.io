import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <header>
        <h1 style={{ textAlign: 'center' }}><Link to="/">Sumedh Khodke</Link></h1>
        
        <img 
          src="/img/portrait.jpg" 
          alt="Sumedh Khodke - Machine Learning Engineer and AI Expert" 
          width="200" 
          height="300"
        />

        {/* <p>Machine Learning Engineer</p> */}

        <ul className="navigation" style={{ textAlign: 'center', padding: 0 }}>
          <li style={{ textAlign: 'center' }}><Link to="/">About Me</Link></li>
          <li style={{ textAlign: 'center' }}><Link to="/projects">Projects</Link></li>
          <li style={{ textAlign: 'center' }}><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      
      <section>
        {children}
      </section>
    </div>
  );
};

export default Layout; 