import React from 'react';
import { NavLink, useResolvedPath } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="info">
        <NavLink to="">
          <span className="name">Swati Parmar</span>
          &nbsp;/&nbsp; SENIOR DESIGN MANAGER
        </NavLink>
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
