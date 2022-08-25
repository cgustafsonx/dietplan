const readlineSync = require("readline-sync");

function selectCategory(bmi) {
  if (bmi < 16) {
    category = "Severly Underweight";
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

function resultGoals(bmi) {
  if (bmi >= 25) {
    const goalWeight = 24.9 * (heightInM * heightInM);
    const weightToLose = weightInKg - goalWeight;
    const weightAfter5Weeks = calculateNewWeightFiveWeeks();
    const weightAfter10Weeks = calculateNewWeightTenWeeks();
    const weightAfter15Weeks = calculateNewWeightFifteenWeeks();

    console.log("You need to lose: ", weightToLose.toFixed(2));
    console.log("If you cut your calories by 500 to", suggestedIntake);
    console.log("After 5 weeks you should be: ", weightAfter5Weeks);
    console.log("After 10 weeks you should be: ", weightAfter10Weeks);
    console.log("After 15 weeks you should be: ", weightAfter15Weeks);
  }
}

module.exports = {
  selectCategory: selectCategory,
  resultGoals: resultGoals,
};
