import React from 'react';
import feastly_pic from '../../assets/images/feastly.jpeg';
import learnify_pic from '../../assets/images/learnify.jpeg';
import bg from '../../assets/images/bg.jpeg';
import { NavLink } from 'react-router-dom';

export const PROJECTS = [
  {
    id: 'feastly',
    displayName: 'Feastly',
    course: 'Google UX Design Project (Coursera)',
    description: 'A comprehensive dining & social app',
    banner: feastly_pic,
  },
  {
    id: 'learnify',
    displayName: 'Learnify',
    course: 'Google UX Design Project (Coursera)',
    description: 'An online learning website',
    banner: learnify_pic,
  },
];

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
      {Object.values(PROJECTS).map((project, index) => {
        return (
          <div
            key={project.id}
            className={index % 2 == 0 ? 'project' : 'project reversed'}
          >
            <div>
              <img src={project.banner} />
            </div>
            <div>
              <span className="course">{project.course}</span>
              <NavLink to={project.id}>
                <h2 className="name">
                  {index + 1}. {project.displayName}
                </h2>
              </NavLink>
              <h2 className="details">{project.description}</h2>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
