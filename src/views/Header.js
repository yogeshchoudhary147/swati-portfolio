import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="header">
      <div className="info">
        <NavLink to="">
          <span className="name">Swati Parmar</span>
          <span className="seperator">&nbsp;/&nbsp;</span>
          SENIOR DESIGN MANAGER
        </NavLink>
      </div>
      <Hamburger
        color={!isOpen ? '#0050FF' : '#000'}
        toggled={isOpen}
        toggle={setOpen}
        size={24}
        rounded
      />
      <div className={isOpen ? 'menu-container visible' : 'menu-container'}>
        <nav>
          <ul>
            <li>
              <NavLink to="">ABOUT ME</NavLink>
            </li>
            <li>
              <NavLink to="resume">RESUME</NavLink>
            </li>
            <li>
              <NavLink to="projects">PROJECTS</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <NavLink to="">ABOUT ME</NavLink>
            </li>
            <li>
              <NavLink to="resume">RESUME</NavLink>
            </li>
            <li>
              <NavLink to="projects">PROJECTS</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
