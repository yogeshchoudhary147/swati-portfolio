import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="general-container">
      <div className="main-container">
        <h1>404</h1>
        <br />
        <h3 style={{ color: 'darkgray' }}>Page not found</h3>
        <br />
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <br />
        <p>
          Go to the <Link to="/">Homepage</Link>.
        </p>
      </div>
    </div>
  );
}
