import React from 'react';
import bg from '../../assets/images/bg.jpeg';
import { NavLink } from 'react-router-dom';
import { PROJECTS_CONFIG } from './config';

export const Projects = () => (
  <div style={{ backgroundImage: `url(${bg})` }} className="projects-container">
    <div className="main-container">
      <div className="heading">
        <h1>My Work</h1>
        <br />
        <p>
          This page features a curated selection of my design projects,
          encompassing both professional certificate coursework and real-world
          initiatives from my previous company. It demonstrates projects with
          complete design process, experience enhancements, and strategic design
          methodologies I've employed.
        </p>
      </div>
      {Object.values(PROJECTS_CONFIG).map((project, index) => {
        return (
          <NavLink key={project.id} className={'project'} to={project.id}>
            <img src={project.banner} />
            <div>
              <span className="course">{project.course}</span>
              <h2 className="name">
                {index + 1}. {project.displayName}
              </h2>
              <h2 className="details">{project.description}</h2>
            </div>
          </NavLink>
        );
      })}
    </div>
  </div>
);
