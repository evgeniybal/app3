import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
  );
}
