import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '@/service/firebaseConfig';
import { Pencil, Check, X, Trash, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function UserWorkoutCardItem({ workout }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workoutName, setWorkoutName] = useState(workout?.fitnessData?.workout_name);
  const [tempName, setTempName] = useState(workout?.fitnessData?.workout_name);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for delete action

  // Function to update workout name in Firebase
  const updateWorkoutName = async () => {
    if (!workout?.id || workoutName.trim() === "") return;
    
    try {
      const workoutRef = doc(db, 'FitnessData', workout.id);
      await updateDoc(workoutRef, { "fitnessData.workout_name": workoutName });
    } catch (error) {
      console.error("Error updating workout name:", error);
    }
    setIsEditing(false);
  };

  // Cancel editing
  const cancelEditing = () => {
    setWorkoutName(tempName);
    setIsEditing(false);
  };

  // Function to delete workout from Firebase
  const deleteWorkout = async () => {
    if (!workout?.id) return;

    setIsLoading(true); // Show loading animation

    try {
      const workoutRef = doc(db, 'FitnessData', workout.id);
      await deleteDoc(workoutRef);
      setIsDeleting(false); // Close popup
      window.location.reload(); // Refresh page after deleting
    } catch (error) {
      console.error("Error deleting workout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='rounded-xl overflow-hidden bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 p-4'>
      <Link to={'/view-workout/' + workout?.id}>
        <img className='object-cover w-full h-40' src='/placeholder.jpeg' alt='Workout' />
      </Link>

      <div className='flex items-center justify-between mt-2'>
        {isEditing ? (
          <div className="flex items-center w-full gap-2">
            <input
              type="text"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') updateWorkoutName();
                if (e.key === 'Escape') cancelEditing();
              }}
              className='border-b-2 border-gray-400 focus:outline-none bg-gray-200 text-gray-900 px-2 py-1 rounded w-full'
              autoFocus
            />
            <button onClick={updateWorkoutName} className='text-gray-500 hover:text-green-600'>
              <Check size={20} />
            </button>
            <button onClick={cancelEditing} className='text-gray-500 hover:text-red-600'>
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="flex items-center w-full justify-between">
            <h2 className='font-bold text-lg'>{workoutName}</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  setTempName(workoutName);
                  setIsEditing(true);
                }} 
                className='text-gray-400 hover:text-gray-600'
              >
                <Pencil size={18} />
              </button>
              <button 
                onClick={() => setIsDeleting(true)} 
                className='text-gray-400 hover:text-red-600'
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className='text-gray-400'>{workout?.userSelection?.gender}</h2>

      {/* Delete Confirmation Popup */}
      {isDeleting && (
        <div className="absolute inset-0 bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center text-center">
            <h2 className="text-md font-bold">Are you sure?</h2>
            <p className="text-gray-600 text-sm">Do you really want to delete this workout? This action cannot be undone.</p>
            <div className="flex justify-center gap-2 mt-3">
              <button 
                onClick={() => setIsDeleting(false)} 
                className="px-3 py-1 text-sm bg-gray-300 rounded-lg hover:bg-gray-400"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                onClick={deleteWorkout} 
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Delete"}
              </button>
            </div>
          </div>
      )}
    </div>
  );
}

export default UserWorkoutCardItem;
