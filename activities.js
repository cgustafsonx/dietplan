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

  const userActivity = userActivityOptions[activityChoice];
  return userActivity;
}

function getTotalCalories(userActivity, bmr, totalCalories) {
  if (userActivity == "Sedentary") {
    totalCalories = bmr + 100;
    console.log(bmr);
  } else if (userActivity == "Moderately Active") {
    totalCalories = bmr + 300;
    console.log("Check", userActivity);
  } else if (userActivity == "Active") {
    totalCalories = bmr + 500;
    console.log("Check", userActivity);
  } else if (("Check", userActivity == "Very Active")) {
    totalCalories = bmr + 700;
  }

  return totalCalories;
}

module.exports = {
  getActivityInput: getActivityInput,
  getTotalCalories: getTotalCalories,
};
