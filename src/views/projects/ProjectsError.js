import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function ProjectsError() {
  const error = useRouteError();

  return (
    <div className="general-container">
      <div className="main-container">
        <h1>Error</h1>
        <br />
        <p>{error.message}</p>
        <br />
        <Link to="/projects">&larr; Back to the projects page</Link>
      </div>
    </div>
  );
}
