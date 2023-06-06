'use client'
import React, { useState } from 'react';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BasicToast, DefaultToast, Toast } from '@components/alerts';

const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
  };

  const handleTimeout = () => {
    setShowToast(false);
  };
  const handleToast = () =>{
    Toast('Hello This is Success','error')
  }

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
      <div>
        <button onClick={handleToast}>Toastify</button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Home;
