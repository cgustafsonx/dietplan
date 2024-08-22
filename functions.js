const readlineSync = require("readline-sync");

function getActivityInput() {
  const userActivityOptions = [
    "Sedentary",
    "Moderately Active",
    "Active",
    "Very Active",
  ];

  const activityChoice = readlineSync.keyInSelect(
    userActivityOptions,
    "What is your activity level?"
  );

  if (activityChoice === -1) {
    console.log("No selection made, exiting.");
    return null; // handle case where user cancels the selection
  }

  const userActivity = userActivityOptions[activityChoice];
  return userActivity;
}

function getTotalCalories(userActivity, bmr) {
  let totalCalories;
  if (userActivity == "Sedentary") {
    totalCalories = bmr + 100;
  } else if (userActivity == "Moderately Active") {
    totalCalories = bmr + 300;
  } else if (userActivity == "Active") {
    totalCalories = bmr + 500;
  } else if (userActivity == "Very Active") {
    totalCalories = bmr + 700;
  }

  return totalCalories;
}

function suggestedIntakeInput(totalCalories) {
  const suggestedIntake = totalCalories - 500;
  return suggestedIntake;
}

function selectCategory(bmi) {
  let category;
  if (bmi < 16) {
    category = "Severely Underweight";
  } else if (bmi >= 16 && bmi <= 18.4) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return category;
}

function calculateBmr(weightInKg, heightInCm, userAge) {
  let bmr = 10 * weightInKg + 6.25 * heightInCm + 5 * userAge + 5;
  return bmr;
}

function getWeightInput() {
  let weightInKg = readlineSync.questionInt("What is your weight? ");
  return weightInKg;
}

function getHeightInput() {
  let heightInM = readlineSync.questionFloat("What is your height? ");
  return heightInM;
}

function convertToCm(heightInM) {
  const heightInCm = heightInM * 100;
  return heightInCm;
}

function calculateBmi(weightInKg, heightInM) {
  let bmi = weightInKg / (heightInM * heightInM);
  return bmi;
}

function calculateGoalWeight(heightInM) {
  const goalWeight = 24.9 * (heightInM * heightInM);
  return goalWeight;
}

function calculateWeightToLose(weightInKg, goalWeight) {
  const weightToLose = weightInKg - goalWeight;
  return weightToLose;
}

function calculateNewWeight(currentWeight, weeks) {
  const weightInNextPeriod = currentWeight - weeks * 0.5;
  return weightInNextPeriod;
}

function displayDietPlan(
  weightToLose,
  goalWeight,
  suggestedIntake,
  weightAfter5Weeks,
  weightAfter10Weeks,
  weightAfter15Weeks
) {
  console.log(
    "You need to lose: ",
    weightToLose.toFixed(2),
    "to reach your goal weight of",
    goalWeight.toFixed(2)
  );
  console.log("If you cut your calories by 500 to", suggestedIntake);
  console.log("After 5 weeks you should be: ", weightAfter5Weeks.toFixed(2));
  console.log("After 10 weeks you should be: ", weightAfter10Weeks.toFixed(2));
  console.log("After 15 weeks you should be: ", weightAfter15Weeks.toFixed(2));
}

module.exports = {
  getActivityInput: getActivityInput,
  getTotalCalories: getTotalCalories,
  suggestedIntakeInput: suggestedIntakeInput,
  selectCategory: selectCategory,
  getWeightInput: getWeightInput,
  getHeightInput: getHeightInput,
  convertToCm: convertToCm,
  calculateBmr: calculateBmr,
  calculateBmi: calculateBmi,
  calculateGoalWeight: calculateGoalWeight,
  calculateWeightToLose: calculateWeightToLose,
  calculateNewWeight: calculateNewWeight,
  displayDietPlan: displayDietPlan,
};
