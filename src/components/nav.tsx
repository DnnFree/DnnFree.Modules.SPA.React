import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex gap-4 mb-4">
      <Link to="/">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/api-call">API Call</Link>
    </nav>
  );
}