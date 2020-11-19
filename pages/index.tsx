import React from 'react';
import Link from 'next/link';
import StylesTester from 'parts/dev/StylesTester';
import DeviceMonitor from 'parts/dev/DeviceMonitor';

const Home = () => {
  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="content-wrapper">
        <h1 className="title">Welcome to the home page </h1>
        <Link href="/about">
          <a style={{ marginTop: 20, textDecoration: 'underline' }}>Go to About</a>
        </Link>
      </div>
      <StylesTester />
      <DeviceMonitor />
    </div>
  );
};

export default Home;
