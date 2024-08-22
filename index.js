const readlineSync = require("readline-sync");
const functions = require("./functions");

// Get input from user
let userAge = readlineSync.questionInt("What is your age? ");
const userGender = ["Male", "Female"];
const index = readlineSync.keyInSelect(userGender, "What is your gender?");
if (index === -1) {
  console.log("No gender selected, exiting.");
  process.exit();
}

const userActivity = functions.getActivityInput();
const weightInKg = functions.getWeightInput();
const heightInM = functions.getHeightInput();

// Output a summary of the user input
console.log("Your age is ", userAge);
console.log("Your chosen gender is: " + userGender[index]);
console.log("Your chosen activity level is: ", userActivity);
console.log("Your weight is: ", weightInKg);
console.log("Your height in meters is: ", heightInM);

// Perform calculations
const heightInCm = functions.convertToCm(heightInM);

// Adjust BMR calculation based on gender
let bmr;
if (userGender[index] === "Male") {
  bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * userAge + 5; // Male BMR formula
} else if (userGender[index] === "Female") {
  bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * userAge - 161; // Female BMR formula
}

const totalCalories = functions.getTotalCalories(userActivity, bmr);
const suggestedIntake = functions.suggestedIntakeInput(totalCalories);
const bmi = functions.calculateBmi(weightInKg, heightInM); // Only need two parameters
const category = functions.selectCategory(bmi);

// Output the calculated stats
console.log("Your current BMI: ", bmi.toFixed(2));
console.log("Your BMR is: ", bmr);
console.log("Your total daily caloric needs: ", totalCalories);
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
