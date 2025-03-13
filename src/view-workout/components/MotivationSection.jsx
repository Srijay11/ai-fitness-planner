import React, { useState, useEffect } from 'react';
import { fitnessJourneyQuotes } from '@/constants/options'

function MotivationSection() {

  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    // Generate a random quote only when the component mounts
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * fitnessJourneyQuotes.length);
      return fitnessJourneyQuotes[randomIndex];
    };

    setRandomQuote(getRandomQuote());
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-extrabold uppercase tracking-wider text-gray-700 text-2xl text-center'>{randomQuote}</h2>
      </div>
    </div>
  )
}

  
export default MotivationSection
