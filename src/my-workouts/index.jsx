import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/service/firebaseConfig';
import UserWorkoutCardItem from './components/UserWorkoutCardItem';

function MyWorkouts() {
  const navigate = useNavigate();
  const [userWorkouts, setUserWorkouts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    GetUserWorkouts();
  }, []);

  const GetUserWorkouts = async () => {
    setLoading(true); // Start loading
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }

    const q = query(collection(db, 'FitnessData'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    const workouts = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      workouts.push(doc.data());
    });

    setUserWorkouts(workouts); // Update state only once
    setLoading(false); // Stop loading
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-white">
        {/* Animated dumbbell lifting effect */}
        <div className="text-5xl animate-bounce">🏋🏽</div>

        {/* Typing Effect */}
        <p className="mt-4 text-lg font-semibold">
          {Array.from("Fetching your workouts...").map((char, index) => (
            <span key={index} className="opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]" style={{ animationDelay: `${index * 50}ms` }}>
              {char}
            </span>
          ))}
        </p>

        {/* Loading text with pulsating animation */}
        <p className="mt-2 text-gray-400 animate-pulse text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 animate-fadeIn'>
      <h2 className='font-bold text-3xl'>My Workouts</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
        {userWorkouts.map((workout, index) => (
          <UserWorkoutCardItem workout={workout} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MyWorkouts;
