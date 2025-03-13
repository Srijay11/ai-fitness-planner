export const SelectDailyActivity = [
    {
        id:1,
        title:'Sedentry',
        desc:'little to no movement',
        icon:'🛌🏻',
    },
    {
        id:2,
        title:'Lightly Active',
        desc:'light walking and occasional exercise',
        icon:'🚶‍♂️‍➡️',
    },
    {
        id:3,
        title:'Moderately Active',
        desc:'workouts 3-4 times a week',
        icon:'🤸‍♂️',
    },
    {
        id:4,
        title:'Very Active',
        desc:'intense exercise daily or labor-intensive job',
        icon:'🏋️‍♂️',
    },   
]

export const dailyroutine = [
    {
        id:1,
        title:'Desk Job',
        icon:'💻',
    },
    {
        id:2,
        title:'Mix of sitting and standing',
        icon:'🧍🏻‍♀️',
    },
    {
        id:3,
        title:'Physically active job',
        icon:'🧑‍🏭',
    },
]

export const genderselect = [
    {
        id:1,
        title:'Male',
        icon:'🚹',
    },
    {
        id:2,
        title:'Female',
        icon:'🚺',
    }
]


export const fitnessJourneyQuotes = [
  "The best time to start was yesterday. The next best time is now.",
  "You don’t have to be great to start, but you have to start to be great.",
  "A year from now, you’ll wish you had started today.",
  "Every expert was once a beginner.",
  "Your fitness journey starts with a single step—just take it.",
  "You won’t always be motivated, so learn to be disciplined.",
  "Small steps every day lead to big results over time.",
  "Stop thinking about it and just do it.",
  "The hardest part of any journey is taking the first step.",
  "Start where you are. Use what you have. Do what you can.",
  "The pain of starting is temporary, but the regret of not starting lasts forever.",
  "One workout won’t change your body, but the decision to start will change your life.",
  "You don’t need to be perfect—just be consistent.",
  "You are one decision away from a completely different body and mindset.",
  "Don’t let fear of failure stop you. Failure is just part of the process.",
  "Progress starts when you decide to show up for yourself.",
  "Start small, dream big, and never stop improving.",
  "Your future self will thank you for starting today.",
  "No matter how slow you go, you’re still lapping everyone on the couch.",
  "Excuses don’t get results—action does.",
  "One workout at a time, one meal at a time, one day at a time.",
  "Start now. The sooner you start, the sooner you see results.",
  "Your fitness journey is not about perfection; it’s about persistence.",
  "Stop waiting for the perfect time. There will never be one.",
  "You have nothing to lose, but everything to gain.",
  "If you wait until you’re ready, you’ll be waiting forever.",
  "Get comfortable with being uncomfortable. That’s where growth happens.",
  "Be patient, be consistent, and trust the process.",
  "The only thing stopping you is the story you keep telling yourself.",
  "Don’t let your mind talk you out of what your heart wants.",
  "One day or day one? You decide.",
  "You don’t need a new year, a Monday, or the perfect moment. You just need to start.",
  "The start of your journey is the most important step you’ll ever take.",
  "Don’t compare your beginning to someone else’s middle.",
  "Your only competition is who you were yesterday.",
  "A strong body starts with a strong mind.",
  "It’s okay to be a beginner. Everyone starts somewhere.",
  "Stop overthinking and start doing.",
  "Fitness is not about being the best, it’s about being better than yesterday.",
  "If you want to change your life, start by changing your habits.",
  "Your transformation begins the moment you commit to yourself.",
  "Think about how far you can go, not how far you have to go.",
  "Don’t focus on how long it will take, focus on starting today.",
  "Believe in yourself and start before you’re ready.",
  "The first step is always the hardest, but once you take it, you’ll never look back.",
  "Starting is the secret to success.",
  "Turn ‘I can’t’ into ‘I can’ and watch your journey unfold.",
  "One small action today can lead to big changes tomorrow.",
  "Trust yourself, start today, and never look back."
];



export const AI_PROMPT = `
Generate a structured fitness plan in JSON format for a person with the following details:
- Gender: {gender}
- Age (years): {age}
- Height (cm): {height}
- Weight (kg): {weight}
- Daily Activity Level: {activity}
- Daily Routine: {routine}
- Sleep (hrs/day): {sleep}

The JSON **must** strictly follow this structure:

{
  "personal_info": { ... },
  "fitness_goals": { ... },
  "weekly_schedule": { ... },
  "workout_plan": { ... },
  "nutrition_plan": { ... },
  "recovery_and_rest": { ... },
  "progression": { ... },
  "tracking_progress": { ... }
}


Example json that can be generated (do not create plans based off of info given in this example, this is just an exmple to understand the structure of the json body):
{
  "personal_info": {
    "gender": "{gender}",
    "age": {age},
    "height_cm": {height},
    "weight_kg": {weight},
    "activity_level": "{activity}",
    "daily_routine": "{routine}",
    "sleep_hours": {sleep}
  },
  "fitness_goals": {
    "primary_goal": "Improve overall fitness",
    "secondary_goals": ["Build strength", "Lose fat", "Increase endurance"],
    "target_duration_weeks": 12
  },
  "weekly_schedule": {
    "workout_days": 5,
    "rest_days": ["Thursday", "Sunday"],
    "split": {
      "Monday": "Upper Body Strength",
      "Tuesday": "Lower Body Strength",
      "Wednesday": "Cardio & Core",
      "Friday": "Full Body Workout",
      "Saturday": "Flexibility & Mobility"
    }
  },
  "workout_plan": {
    "warmup": "5-10 min dynamic stretching",
    "cooldown": "5-10 min static stretching",
    "workouts": [
      {
        "day": "Monday",
        "workout_type": "Upper Body Strength",
        "exercises": [
          { "name": "Bench Press", "sets": 4, "reps": 10 },
          { "name": "Pull-ups", "sets": 3, "reps": 8 },
          { "name": "Dumbbell Shoulder Press", "sets": 3, "reps": 12 }
        ]
      },
      {
        "day": "Tuesday",
        "workout_type": "Lower Body Strength",
        "exercises": [
          { "name": "Squats", "sets": 4, "reps": 12 },
          { "name": "Deadlifts", "sets": 3, "reps": 10 },
          { "name": "Lunges", "sets": 3, "reps": 12 }
        ]
      }
    ]
  },
  "nutrition_plan": {
    "daily_calories": 2500,
    "macronutrients": {
      "protein_g": 150,
      "carbs_g": 300,
      "fats_g": 70
    },
    "hydration": "3 liters of water per day"
  },
  "recovery_and_rest": {
    "sleep_target_hours": 7-9,
    "recovery_methods": ["Foam rolling", "Stretching", "Active recovery days"]
  },
  "progression": {
    "progression_criteria": ["Increase weights", "Reduce rest time", "Add more reps"],
    "tracking_method": "Weekly progress photos & strength logs"
  },
  "tracking_progress": {
    "metrics": ["Weight", "Body fat percentage", "Strength improvements"],
    "tracking_frequency": "Every 2 weeks",
    "tools": ["Fitness app", "Body measurements", "Workout log"]
  }
}

**Important Instructions:**
1. The response **must** be valid JSON.
2. **Do not omit any sections.**
3. **Do not add extra explanations** or text outside the JSON.
4. The structure and field names must **exactly match** the provided JSON format.

Return only the JSON content, nothing else.`;




export const GEMINI_PROMPT = `Generate a structured fitness plan based on:
- Gender: {gender}
- Age: {age}
- Height (cm): {height}
- Weight (kg): {weight}
- Activity level: {activity}
- Routine: {routine}
- Sleep (hours): {sleep}

Return only a valid JSON object without any explanations. Do not deviate from the json structure provided below under any circumstances. Example format:

{
  "workout_name": "(**Note:workout name should be a two letter work separated by a -**)",
  "primary_fitness_goals": "",
  "secondary_fitness_goals": [],
  "weekly_schedule": {
    "Monday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    },
    "Tuesday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    },
    "Wednesday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    },
    "Thursday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    },
    "Friday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    },
    "Saturday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    },
    "Sunday": {
      "workout_type": "",
      "warmup": "",
      "cooldown": "",
      "exercises": [
        {
          "name": "",
          "sets": 0,
          "reps": ""
        }
      ]
    }
  },
  "nutrition_plan": {
    "hydration": "3-4 liters of water per day",
    "macronutrients": {
      "protein_g": 130,
      "carbs_g": 350,
      "fats_g": 80
    },
    "daily_calories": 2800
  }
}`;

