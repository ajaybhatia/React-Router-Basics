import React from 'react';
import { Link } from 'react-router';

export const Index = () => (
  <div className="jumbotron text-center">
    <h1>Hello, World!</h1>
    <p><em>React Router Basics</em></p>
    <Link to="/one" className="btn btn-success">Get Started</Link>
  </div>
)
