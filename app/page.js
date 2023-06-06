"use client";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BasicToast, DefaultToast, Toast } from "@components/alerts";

const Home = () => {
  const [showToast, setShowToast] = useState(false);
  const [showImg, setShowImg] = useState(false);

  const handleClick = () => {
    setShowToast(true);
  };
  const handleClickImage = () => {
    setShowImg(true);
  };

  const handleTimeout = () => {
    setShowToast(false);
    setShowImg(false);
  };
  const handleToast = () => {
    Toast("Hello This is Success", 'success');
  };

  const defaultRender = () => (
    <>
      <DefaultToast
        message="Hello team!"
        theme="toast-success"
        type="toast__content"
        description="This is a Toast Message"
        duration={3000}
        position="bottom-left"
        onClose={handleTimeout}
      />
    </>
  );

  const renderToast = () => (
    <>
      <BasicToast
        type="toast__content"
        theme="toast-info"
        width={100}
        height={50}
        src="/assets/images/logo.png"
        message="Hello team members!"
        description="This is a Toast Message"
        duration={3000}
        position="bottom-right"
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
        <button onClick={handleClickImage}>showToast</button>
        {showImg && defaultRender()}
      </div>
      <div>
        <button onClick={handleToast}>Toastify</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Home;
