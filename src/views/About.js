import React from 'react';
import profile_pic from '../assets/images/profile_pic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

export const About = () => (
  <div className="about-container">
    <div className="background-container"></div>
    <div className="main-container">
      <div className="profile">
        <div className="info">
          <img src={profile_pic} />
          <div className="name">
            <h2>Swati</h2>
            <h2>Parmar</h2>
          </div>
          <div className="blue-bar" />
          <span>Senior Design Manager</span>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/swati.parmar.10" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ fontSize: '22px', color: 'black' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/swati-parmar-5a606344"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ fontSize: '24px', color: 'black' }}
            />
          </a>
          <a href="https://www.instagram.com/iam.swatiparmar" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: '24px', color: 'black' }}
            />
          </a>
        </div>
      </div>
      <div className="details">
        <h1>Hello</h1>
        <h3>I'm thrilled you're here.</h3>
        <div className="buttons">
          <NavLink to="/resume">
            <button className="button blue-button" role="button">
              RESUME
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button className="button" role="button">
              PROJECTS
            </button>
          </NavLink>
        </div>
        <p>
          With 9 years in the design and marketing realm, I've crafted solutions
          that are not just visually appealing but also deeply intuitive and
          user-friendly.
        </p>
        <br />
        <p>
          I invite you to browse through my portfolio, discover my journey, and
          see how passion and innovation drive my work.
        </p>
      </div>
    </div>
  </div>
);
