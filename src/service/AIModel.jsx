import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 9000,
    responseMimeType: "text/plain",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create a fitness plan for someone who is 22 with height 178 and weighing 59kgs "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a fitness plan tailored for a 22-year-old who is 178cm (approximately 5'10\") and weighs 59kg (approximately 130lbs). Given their BMI of 18.6, they are considered underweight.  Therefore, the primary goal of this plan should be to **gain healthy weight through muscle building** while improving overall fitness.\n\n**Important Considerations Before Starting:**\n\n*   **Consult a Doctor:** Before starting any new fitness or diet plan, it's crucial to consult with a doctor or healthcare professional. This is especially important given their underweight status to rule out any underlying medical conditions.\n*   **Listen to Your Body:**  Pay attention to your body's signals. Don't push yourself too hard, especially when starting out. Rest and recovery are just as important as the workouts themselves.\n*   **Nutrition is Key:** This plan emphasizes building muscle, so proper nutrition is absolutely essential. We'll cover the dietary aspects in detail.\n*   **Consistency is Paramount:**  The key to success is consistency.  Stick to the plan as much as possible, even when you don't feel like it.\n*   **Progressive Overload:** Gradually increase the weight, reps, or sets as you get stronger. This challenges your muscles and promotes growth.\n\n**I. Goals:**\n\n*   **Primary Goal:** Gain healthy weight through muscle mass.\n*   **Secondary Goals:**\n    *   Increase strength and endurance.\n    *   Improve overall body composition.\n    *   Enhance cardiovascular health.\n    *   Establish a sustainable, healthy lifestyle.\n\n**II. Training Schedule (3-4 Days per Week):**\n\nThis is a beginner-friendly plan. Start with lighter weights and focus on proper form.\n\n*   **Day 1: Full Body Strength Training**\n*   **Day 2: Rest or Active Recovery (Light Cardio)**\n*   **Day 3: Full Body Strength Training**\n*   **Day 4: Rest or Active Recovery (Light Cardio)**\n*   **Day 5: Optional: Full Body Strength Training**\n*   **Day 6: Rest**\n*   **Day 7: Rest**\n\n**III. Workout Details:**\n\n**A. Full Body Strength Training (Each session should last approximately 45-60 minutes):**\n\n*   **Warm-up (5-10 minutes):**\n    *   Light cardio (e.g., jogging in place, jumping jacks)\n    *   Dynamic stretching (e.g., arm circles, leg swings, torso twists)\n*   **Workout:**\n    *   **Squats:** 3 sets of 8-12 reps. (Focus on proper form: feet shoulder-width apart, chest up, core engaged, descend as if sitting in a chair.)\n    *   **Push-ups:** 3 sets of as many reps as possible (AMRAP). (Modify on your knees if needed to maintain proper form.)\n    *   **Dumbbell Rows (or Barbell Rows):** 3 sets of 8-12 reps per arm. (Bend at the hips, keeping your back straight, and pull the weight towards your chest.)\n    *   **Overhead Press (Dumbbell or Barbell):** 3 sets of 8-12 reps. (Press the weight overhead, keeping your core engaged.)\n    *   **Deadlifts:** 1 set of 5 reps\n    *   **Plank:** 3 sets, hold for 30-60 seconds. (Maintain a straight line from head to heels, engaging your core.)\n    *   **Crunches:** 3 sets of 15-20 reps (or alternative ab exercises)\n*   **Cool-down (5-10 minutes):**\n    *   Static stretching (holding each stretch for 20-30 seconds): quadriceps stretch, hamstring stretch, calf stretch, triceps stretch, chest stretch, shoulder stretch.\n\n**B. Active Recovery (Light Cardio):**\n\n*   Choose any low-impact activity you enjoy for 30-45 minutes:\n    *   Walking\n    *   Light jogging\n    *   Cycling (easy pace)\n    *   Swimming\n    *   Yoga or Pilates\n\n**IV. Nutrition Plan:**\n\nThis is *crucial* for weight gain and muscle building.  The goal is to consume a calorie surplus (more calories than you burn) and prioritize protein.\n\n*   **Calculate Calorie Needs:** Use an online calorie calculator to determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Add a surplus of 250-500 calories per day to your TDEE to promote weight gain.  Monitor your weight and adjust calorie intake accordingly.\n*   **Macronutrient Ratios:**\n    *   **Protein:** 1.6-2.2 grams per kilogram of body weight (approximately 94-130 grams per day).  Protein is essential for muscle repair and growth.\n    *   **Carbohydrates:** 4-5 grams per kilogram of body weight (approximately 236-295 grams per day). Carbs provide energy for workouts.\n    *   **Fats:** 0.8-1.2 grams per kilogram of body weight (approximately 47-71 grams per day). Healthy fats are important for hormone production and overall health.\n*   **Meal Frequency:** Aim for 5-6 smaller meals throughout the day to ensure a consistent supply of nutrients.\n*   **Food Choices:**\n    *   **Protein Sources:** Lean meats (chicken, turkey, fish), eggs, dairy products (Greek yogurt, milk, cheese), legumes (beans, lentils), tofu, protein powder (whey, casein, soy).\n    *   **Carbohydrate Sources:** Whole grains (oats, brown rice, quinoa), fruits, vegetables, sweet potatoes, whole-wheat bread.\n    *   **Fat Sources:** Avocados, nuts, seeds, olive oil, fatty fish (salmon, tuna).\n*   **Example Meal Plan (Adjust portions to meet your individual calorie and macro needs):**\n\n    *   **Breakfast:** Oatmeal with berries, nuts, and a scoop of protein powder.\n    *   **Mid-Morning Snack:** Greek yogurt with fruit and granola.\n    *   **Lunch:** Chicken breast with brown rice and steamed vegetables.\n    *   **Afternoon Snack:**  Protein shake with a banana and a tablespoon of peanut butter.\n    *   **Dinner:** Salmon with sweet potato and roasted vegetables.\n    *   **Before Bed:** Casein protein shake or a small serving of cottage cheese.\n*   **Hydration:** Drink plenty of water throughout the day.\n*   **Supplements (Optional):**\n    *   **Whey Protein:**  Convenient for supplementing protein intake, especially after workouts.\n    *   **Creatine:**  Can help increase strength and muscle mass.  (Consult with a doctor before taking creatine).\n    *   **Multivitamin:**  To ensure you're getting all the necessary vitamins and minerals.\n\n**V.  Progression:**\n\n*   **Strength Training:**\n    *   **Increase Weight:** When you can comfortably perform the target number of reps with good form, increase the weight. Start with small increments (e.g., 1-2.5 kg).\n    *   **Increase Reps/Sets:** If you're not ready to increase weight, try increasing the number of reps or sets.\n    *   **Change Exercises:** Every 4-6 weeks, consider changing up some of the exercises to challenge your muscles in new ways. This could involve variations of the same exercises (e.g., dumbbell squats instead of barbell squats) or completely new exercises.\n*   **Cardio:**\n    *   **Increase Duration:** Gradually increase the duration of your cardio sessions.\n    *   **Increase Intensity:**  As you get fitter, you can increase the intensity of your cardio (e.g., jogging faster, cycling uphill).\n\n**VI.  Rest and Recovery:**\n\n*   **Sleep:** Aim for 7-9 hours of quality sleep per night.  Sleep is crucial for muscle repair and recovery.\n*   **Rest Days:** Don't train the same muscle groups every day. Allow for adequate rest between workouts.\n*   **Active Recovery:** Engage in light activities like walking, stretching, or yoga on your rest days to promote blood flow and recovery.\n*   **Manage Stress:**  Stress can negatively impact your health and fitness goals. Practice stress-reducing techniques like meditation, deep breathing, or spending time in nature.\n\n**VII. Tracking Progress:**\n\n*   **Weight:** Weigh yourself once a week at the same time of day.\n*   **Measurements:**  Take body measurements (e.g., chest, waist, arms, legs) every 2-4 weeks.\n*   **Photos:**  Take progress photos every 2-4 weeks to visually track your progress.\n*   **Strength:**  Keep track of the weights you're lifting and the number of reps you're performing.\n*   **Energy Levels:**  Monitor your energy levels throughout the day.\n*   **Mood:**  Pay attention to your mood and overall well-being.\n\n**VIII. Important Considerations:**\n\n*   **Be Patient:** Building muscle takes time and consistency. Don't get discouraged if you don't see results immediately.\n*   **Stay Consistent:** Stick to the plan as much as possible, even when you don't feel like it.\n*   **Adjust as Needed:** This is just a guideline.  Adjust the plan based on your individual needs and progress.\n*   **Find a Training Partner (Optional):** Having a training partner can provide motivation and accountability.\n*   **Enjoy the Process:**  Find activities you enjoy so that fitness becomes a sustainable part of your lifestyle.\n\nThis is a comprehensive plan, but remember to listen to your body and adjust it as needed.  Good luck!\n"},
          ],
        },
      ],
    });
  

