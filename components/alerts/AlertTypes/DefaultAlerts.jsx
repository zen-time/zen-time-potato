'use client'
import React, { useEffect, useState } from 'react';

const DefaultToast = ({ message, duration, position, onClose, description}) => {
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
            <div className={`fixed flex items-center justify-center gap-2 z-50 bg-slate-200 text-black p-4 rounded-md shadow-md ${getPositionStyles()}`}>
            
            <div>
                <div className="toast__content font-medium">{message}</div>
                <div>{description}</div>
            </div>
            <button onClick={handleClose} className='px-1  hover:bg-blue-300'>x</button>
        </div>
        )
};

export default DefaultToast;
