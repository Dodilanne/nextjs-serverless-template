import React from 'react';
import Link from 'next/link';
import Greetings from 'parts/dev/Greetings';

const About = () => {
  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="content-wrapper">
        <Greetings />
        <Link href="/">
          <a style={{ marginTop: 20, textDecoration: 'underline' }}>Go Home</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
