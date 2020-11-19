import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="content-wrapper">
        <h1 className="title">Welcome to the about page </h1>
        <Link href="/">
          <a style={{ marginTop: 20, textDecoration: 'underline' }}>Go Home</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
