'use client'
import React, { Fragment, useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false); 
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const handleResend = () => {
    setTimeLeft(60); 
    setIsTimerActive(true); 
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <Fragment>
      <div className="flex  flex-col items-center">
        <div className="mb-4 flex items-center gap-4"> 
        <button 
            onClick={handleResend} 
            className={`whitespace-nowrap ${timeLeft === 0 ? 'text-[#000000B2] cursor-pointer' : 'text-gray-400 cursor-not-allowed'} font-semibold text-lg`}
            disabled={timeLeft !== 0} 
          >
           Send code again
          </button>
          <p className='font-normal text-base text-[#000000B2]'> {formatTime(timeLeft)}</p>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Timer;
