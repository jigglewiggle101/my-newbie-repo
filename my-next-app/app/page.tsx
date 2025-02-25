'use client';

import { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const birthday = new Date('2025-02-25T00:00:00'); // Change this to his birthday
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthday.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft('Happy Birthday!');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-2xl font-bold">{timeLeft}</div>;
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Welcome to Your Birthday Celebration!</h1>
        <h2 className="text-2xl mb-4">Countdown to your special day:</h2>
        <Countdown />
      </div>
    </div>
  );
};

export default HomePage;
