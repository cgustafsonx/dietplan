const readlineSync = require("readline-sync");
const functions = require("./functions");

// Get input from user
let userAge = readlineSync.question("What is your age? ");
(userGender = ["Male", "Female", "Shemale"]),
  (index = readlineSync.keyInSelect(userGender, "What is your gender?"));
const userActivity = functions.getActivityInput();
const weightInKg = functions.getWeightInput();
const heightInM = functions.getHeigthInput();

// Output a summary of the user input
console.log("Your age is ", userAge);
console.log("Your chosen gender is: " + userGender[index]);
console.log("Your chosen activity level is: ", userActivity);
console.log("Your weight is: ", weightInKg);
console.log("Your height in M is: ", heightInM);

// Perform calculations
const heightInCm = functions.convertToCm(heightInM);
const bmr = functions.calculateBmr(weightInKg, heightInCm, userAge);
const totalCalories = functions.getTotalCalories(userActivity, bmr);
const suggestedIntake = functions.suggestedIntakeInput(totalCalories);
const bmi = functions.calculateBmi(weightInKg, heightInM, heightInM);
const category = functions.selectCategory(bmi);

// Output the calculated stats
console.log("Your current BMI: ", bmi.toFixed(2));
console.log("Your BMR is: ", bmr);
console.log("Your total of calories: ", totalCalories);
console.log("Your weight category is: ", category);

// Show a diet plan when the user is overweight / obese
if (bmi >= 25) {
  const goalWeight = functions.calculateGoalWeight(heightInM);
  const weightToLose = functions.calculateWeightToLose(weightInKg, goalWeight);
  const weightAfter5Weeks = functions.calculateNewWeight(weightInKg, 5);
  const weightAfter10Weeks = functions.calculateNewWeight(weightInKg, 10);
  const weightAfter15Weeks = functions.calculateNewWeight(weightInKg, 15);

  functions.displayDietPlan(
    weightToLose,
    goalWeight,
    suggestedIntake,
    weightAfter5Weeks,
    weightAfter10Weeks,
    weightAfter15Weeks
  );
}
