import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <nav>
        <ul id="navigation" style={{ listStyle: 'none' }}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
