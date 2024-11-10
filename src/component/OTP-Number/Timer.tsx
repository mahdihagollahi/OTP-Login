'use client'
import React, { Fragment  , useState, useEffect} from 'react'

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(30); 
  const [isTimerActive, setIsTimerActive] = useState(true);

    useEffect(() => {
        let timer;
        if (isTimerActive && timeLeft > 0) {
          timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
          }, 1000);
        } else if (timeLeft === 0) {
          setIsTimerActive(false); // وقتی تایمر به ۰ رسید، غیرفعال شود
        }
        return () => clearInterval(timer); // پاک کردن تایمر هنگام unmount شدن یا تغییر مقدار
      }, [isTimerActive, timeLeft]);
    
      const handleResend = () => {
        setTimeLeft(30); // مقدار تایمر را به ۳۰ بازنشانی می‌کنیم
        setIsTimerActive(true); // تایمر را فعال می‌کنیم
      };
    
  return (
    <Fragment>
        <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center gap-8">
        <p>
            
        </p>
        <div>

        
        {isTimerActive ? (
          <p>Remaining Time: {timeLeft} seconds</p>
        ) : (
          <button onClick={handleResend} className="text-blue-500 underline">
            Sent Again
          </button>
        )}
        </div>
      </div>

    
    </div>
    </Fragment>
  )
}

export default Timer