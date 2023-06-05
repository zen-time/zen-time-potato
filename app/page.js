'use client'
import React, { useState } from 'react';
import { BasicToast, DefaultToast } from '@components/alerts';

const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
  };

  const handleTimeout = () => {
    setShowToast(false);
  };

  const defaultRender = () =>(

    <>
      <DefaultToast
        message="Hello team!"
        description="This is a Toast Message"
        duration={3000}
        position="top-left"
        onClose={handleTimeout}
      />
    </>
  )

  const renderToast = () => (
    <>
      <BasicToast
        type="image"
        width={100}
        height={50}
        src="/assets/images/logo.png"
        id={3}
        message="Hello team members!"
        description="This is a Toast Message"
        duration={3000}
        position="top-right"
        onClose={handleTimeout}
      /> 
    </>
  );

  return (
    <div>
      <div>
        <button onClick={handleClick}>Toast</button>
        {showToast && renderToast()}
      </div>
      <div>
        <button onClick={handleClick}>showToast</button>
        {showToast && defaultRender()}
      </div>
    </div>
  );
};

export default Home;
