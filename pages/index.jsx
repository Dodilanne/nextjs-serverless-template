import React from 'react';
import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <MainContent>
      {/* TODO : Remove this template code */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: 45, paddingBottom: 20 }}>
          This is the Home Page
        </h1>
        <p>Check the TODOs in the code to get started!</p>
      </div>
      {/* TODO : Remove this template code */}
    </MainContent>
  );
};

export default Home;
