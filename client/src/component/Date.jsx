import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date) => {
    const dateOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

    return `${formattedDate} – ${formattedTime} – NYC`;
  };

  return (
    <div className='flex flex-row w-full h-24 border-b-4 items-center justify-center'>
      {formatDateTime(currentTime)}
    </div>
  );
}

export default DateTimeDisplay;
