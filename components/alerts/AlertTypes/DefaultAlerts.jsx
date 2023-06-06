'use client'
import React, { useEffect, useState } from 'react';

const DefaultToast = ({ message, duration, position, onClose, description,theme,type}) => {
  const [show, setShow] = useState(true);
  const handleClose = ()=>{
    setShow(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);


  if (!show) {
    return null;
  }

  const getPositionStyles = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

        return(
            <div  className={`${
              theme ? theme : "toastify-default"
            } ${getPositionStyles()}`}>
            
            <div>
                <div className={`${type}`}>{message}</div>
                <div>{description}</div>
            </div>
            <span className='text-black'>
              <button onClick={handleClose} className={`toastify-close`}>x</button>
            </span>
        </div>
        )
};

export default DefaultToast;
