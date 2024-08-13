import React from 'react';
import feastly_pic from '../../assets/images/feastly.jpeg';
import learnify_pic from '../../assets/images/learnify.jpeg';
import reflect_pic from '../../assets/images/reflect.jpeg';
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
  {
    id: 'reflect',
    displayName: 'Reflect',
    course: 'Google UX Design Project (Coursera)',
    description: 'App & website for daily rituals for a better lifestyle',
    banner: reflect_pic,
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
