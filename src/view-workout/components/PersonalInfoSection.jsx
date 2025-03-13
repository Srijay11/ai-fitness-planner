import React from "react";

function PersonalInfoSection({ workoutInfo }) {
    console.log("the info is", workoutInfo);
  return (
    <div className="flex justify-center">
      <div className="flex bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl gap-8 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        {/* Profile Picture */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center 
                        text-gray-500 font-bold text-xl">
            <img className="rounded-full" src={workoutInfo.userPic}/>
        </div>

        {/* User Info */}
        <div className="flex flex-wrap gap-7 flex-grow">
          {/* Name */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Name</span>
            <span className="font-semibold text-lg">{workoutInfo.userName}</span>
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Age</span>
            <span className="font-semibold text-lg">{workoutInfo?.userSelection?.age}</span>
          </div>

          {/* Height */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Height(cm)</span>
            <span className="font-semibold text-lg">{workoutInfo?.userSelection?.height}</span>
          </div>

          {/* Weight */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Weight(kg)</span>
            <span className="font-semibold text-lg">{workoutInfo?.userSelection?.weight}</span>
          </div>

          {/* BMI */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">BMI</span>
            <span className="font-semibold text-lg">{(workoutInfo?.userSelection?.weight / 
                ((workoutInfo?.userSelection?.height / 100) * 
                (workoutInfo?.userSelection?.height / 100))).toFixed(1)}</span>
          </div>

          {/* Fitness Level */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Fitness Level</span>
            <span className="font-semibold text-lg">{workoutInfo?.userSelection?.activity}</span>
          </div>
        </div>
      </div>      


    </div>
  );
}

export default PersonalInfoSection;
