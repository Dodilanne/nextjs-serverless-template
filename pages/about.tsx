import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="container">
      <h1 className="title">
        Welcome to the about page{' '}
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </h1>
    </div>
  );
};

export default About;
