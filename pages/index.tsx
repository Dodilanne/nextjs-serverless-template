import React from 'react';
import Link from 'next/link';
import StylesTester from 'parts/dev/StylesTester';
import DeviceMonitor from 'parts/dev/DeviceMonitor';
import LocaleTester from 'parts/dev/LocaleTester';
import Greetings from 'parts/dev/Greetings';

const Home = () => {
  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="content-wrapper">
        <Greetings />
        <Link href="/about">
          <a style={{ marginTop: 20, textDecoration: 'underline' }}>Go to About</a>
        </Link>
      </div>
      <StylesTester />
      <LocaleTester />
      <DeviceMonitor />
    </div>
  );
};

export default Home;
