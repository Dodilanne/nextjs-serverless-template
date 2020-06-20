import React from 'react';
import Link from 'next/link';
import StylesTester from '../components/common/StylesTester';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">
        Welcome to the home page{' '}
        <Link href="/about">
          <a>Go to About</a>
        </Link>
        <StylesTester />
      </h1>
    </div>
  );
};

export default Home;
