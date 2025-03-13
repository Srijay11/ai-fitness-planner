import React, { useState } from "react";

function WorkoutplanSection({ workoutInfo }) {
  const weeklySchedule = workoutInfo?.fitnessData?.weekly_schedule || {};
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const isRestDay = !weeklySchedule[selectedDay]?.exercises?.length;

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">📅 Weekly Workout Plan</h2>

      {/* Day Selector */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {days.map((day) => (
          <button
            key={day}
            className={`p-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
              selectedDay === day ? "bg-black text-white scale-105" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-100 rounded-lg shadow-md min-h-[400px] flex flex-col justify-center overflow-hidden">

        {!isRestDay && (
          <>
            {/* Warmup Section */}
            {weeklySchedule[selectedDay]?.warmup && (
              <>
                <h3 className="text-xl mb-2 text-gray-950">Warmup</h3>
                <p className="text-gray-700 text-lg overflow-y-auto max-h-[180px] mb-4">
                  {weeklySchedule[selectedDay]?.warmup}
                </p>
              </>
            )}

            {/* Workout Type */}
            <h3 className="text-xl mb-2 text-gray-950">{weeklySchedule[selectedDay]?.workout_type}</h3>
            
            {/* Exercises */}
            <ul className="list-none text-gray-700 text-lg overflow-y-auto max-h-[180px]">
              {weeklySchedule[selectedDay]?.exercises.map((exercise, index) => (
                <li key={index} className="mb-2">
                  💪 {exercise.name} - {exercise.sets} sets x {exercise.reps}
                </li>
              ))}
            </ul>

            {/* Cooldown Section */}
            {weeklySchedule[selectedDay]?.cooldown && (
              <>
                <h3 className="text-xl mb-2 mt-4 text-gray-950">Cooldown</h3>
                <p className="text-gray-700 text-lg overflow-y-auto max-h-[180px] mb-4">
                  {weeklySchedule[selectedDay]?.cooldown}
                </p>
              </>
            )}
          </>
        )}

        {/* Rest Day Message */}
        {isRestDay && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg text-center">Rest day! 💤</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkoutplanSection;
