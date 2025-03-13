import React from "react";

function GoalsandNutritionSection({ workoutInfo }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch my-6">
      {/* Fitness Goals Card */}
      <div className="flex-1 min-h-[250px] p-6 bg-white shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">🏋️ Fitness Goals</h2>
        <p className="text-gray-600 text-lg">{workoutInfo?.fitnessData?.primary_fitness_goals}</p>

        {/* Secondary Goals */}
        {workoutInfo?.fitnessData?.secondary_fitness_goals?.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 text-gray-700">Other Goals:</h3>
            <ul className="list-disc list-inside text-gray-600 text-lg">
              {workoutInfo?.fitnessData?.secondary_fitness_goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Nutrition Plan Card */}
      <div className="flex-1 min-h-[250px] p-6 bg-white shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">🥗 Nutrition Plan</h2>
        <p className="text-gray-600 text-lg">🍽️ Daily Calories: {workoutInfo?.fitnessData?.nutrition_plan?.daily_calories || "N/A"} kcal</p>
        <p className="text-gray-600 text-lg">💪 Protein: {workoutInfo?.fitnessData?.nutrition_plan?.macronutrients?.protein_g || "N/A"}g</p>
        <p className="text-gray-600 text-lg">🔥 Carbs: {workoutInfo?.fitnessData?.nutrition_plan?.macronutrients?.carbs_g || "N/A"}g</p>
        <p className="text-gray-600 text-lg">🛢️ Fats: {workoutInfo?.fitnessData?.nutrition_plan?.macronutrients?.fats_g || "N/A"}g</p>
        <p className="text-gray-600 text-lg">💧 Hydration: {workoutInfo?.fitnessData?.nutrition_plan?.hydration || "Not specified"}</p>
      </div>
    </div>
  );
}

export default GoalsandNutritionSection;
