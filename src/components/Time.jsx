import React, { useState, useEffect } from 'react';

const TimeBasedGreeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours(); // get the current hour
      if (hour < 12) {
        setGreeting('Good morning');
      } else if (hour < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();
    // Set up an interval to update the greeting every minute so it stays current
    const intervalId = setInterval(updateGreeting, 60000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{greeting}</h1>;
};

export default TimeBasedGreeting;
