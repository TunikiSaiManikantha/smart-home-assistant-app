import React from 'react';
import "../Home/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Home Assistant</h3>
        
        <ul className="socials">
          <li><a href="#facebook">facebook<i className="facebook-f"></i></a></li>
          <li><a href="#twitter">twitter<i className="twitter"></i></a></li>
          <li><a href="#instagram">instagram<i className="instagram"></i></a></li>
          <li><a href="#linkedin">linkedin<i className="linkedin-in"></i></a></li>
          <li><a href="#GitHub">GitHub <i className="GitHub"></i></a></li>
        </ul>
        <p>&copy; 2024 Home Assistant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
