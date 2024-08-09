import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="general-container">
      <div className="main-container">
        <h1>404 - Page not found!</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br />
        <p>
          Go to the <Link to="/">Homepage</Link>.
        </p>
      </div>
    </div>
  );
}
