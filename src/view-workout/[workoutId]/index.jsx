import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import MotivationSection from '../components/MotivationSection';
import PersonalInfoSection from '../components/PersonalInfoSection';
import GoalsandNutritionSection from '../components/GoalsandNutritionSection';
import WorkoutplanSection from '../components/WorkoutplanSection';
import Footer from '../components/Footer';

function ViewWorkout() {
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (workoutId) {
      GetWorkoutData();
    }
  }, [workoutId]);

  const GetWorkoutData = async () => {
    setLoading(true); // Start loading
    const docRef = doc(db, 'FitnessData', workoutId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document:", docSnap.data());
      setWorkout(docSnap.data());
    } else {
      console.log("No document exists");
      toast("No fitness plan found");
    }

    setLoading(false); // Stop loading after data is fetched
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen  text-white">
        {/* Animated dumbbell lifting effect */}
        <div className="text-5xl animate-bounce">🏋🏽</div>

        {/* Typing Effect */}
        <p className="mt-4 text-lg font-semibold">
          {Array.from("Getting your workout ready...").map((char, index) => (
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
    <div className="p-10 md:px-20 lg:px-44 xl:px-56 animate-fadeIn">
      <MotivationSection />
      <PersonalInfoSection workoutInfo={workout} />
      <GoalsandNutritionSection workoutInfo={workout} />
      <WorkoutplanSection workoutInfo={workout} />
      <Footer workoutInfo={workout} />
    </div>
  );
}

export default ViewWorkout;
