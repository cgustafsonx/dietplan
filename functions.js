const readlineSync = require("readline-sync");
const calculations = require("./calculations");
const activities = require("./activities");
const categories = require("./categories");

let userAge = readlineSync.question("What is your age? ");
console.log("Your age is ", userAge);

(userGender = ["Male", "Female", "Don't want to say"]),
  (index = readlineSync.keyInSelect(userGender, "What is your gender?"));
console.log("Your gender is: " + userGender[index]);

const userActivity = activities.getActivityInput();
console.log("Your activity is: ", userActivity);

const weightInKg = calculations.getWeightInput();
console.log("Your weight is: ", weightInKg);

const heightInM = calculations.getHeigthInput();
console.log("Your height is: ", heightInM);

const heightInCm = calculations.convertToCm();
console.log("Your heigth is: ", heightInM);

const bmr = calculations.calculateBmr(weightInKg, heightInCm, userAge);
console.log("Your BMR is: ", bmr);

const totalCalories = activities.getTotalCalories(
  userActivity,
  bmr,
  totalCalories
);
console.log("Your total of calories is:", totalCalories);

console.log(`
      ~~~~ Overview ~~~~
      Your BMR: ${bmr}
      Your active state: ${userActivity}
      Your total calories: ${totalCalories}
    ~~~~ Overview ~~~~
    `);

function suggestedIntakeInput() {
  const suggestedIntake = totalCalories - 500;
  console.log("Intake:", suggestedIntake);
  return suggestedIntake;
}

const suggestedIntake = suggestedIntakeInput();
console.log(suggestedIntake);

function calculateNewWeightFiveWeeks() {
  const totalWeightFiveWeeks = weightInKg - 2.5;
  console.log("Result:", totalWeightFiveWeeks);
  return totalWeightFiveWeeks;
}

function calculateNewWeightTenWeeks() {
  const totalWeightTenWeeks = weightInKg - 5;
  console.log("Result:", totalWeightTenWeeks);
  return totalWeightTenWeeks;
}

function calculateNewWeightFifteenWeeks() {
  const totalWeightFifteenWeeks = weightInKg - 7.5;
  return totalWeightFifteenWeeks;
}

const bmi = calculations.calculateBmi();
console.log("Your BMI is", bmi.toFixed(2));

const category = categories.selectCategory();
console.log("Your weight category is", category);

const resultGoalsEnd = categories.resultGoals();
console.log("Your final results: ", resultGoalsEnd);
