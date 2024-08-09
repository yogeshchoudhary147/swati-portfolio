import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PROJECTS } from './Projects';

export default function ProjectDetails() {
  const project = useLoaderData();
  return (
    <div className="general-container">
      <div className="main-container">
        <img width={300} src={project.banner} />
        <br />
        <h1>{project.displayName} Coming Soon!!</h1>
        <br />
        <p>{project.description}</p>
      </div>
    </div>
  );
}

//loader function
export const projectDetailsLoader = ({ params }) => {
  const { id } = params;
  const project = PROJECTS.find((project) => project.id === id);
  if (project === undefined) {
    throw Error('Could not find that project');
  }
  return project;
};
