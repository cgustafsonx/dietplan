const readlineSync = require("readline-sync");

let userAge = readlineSync.question("What is your age? ");
console.log("Your age is ", userAge);

(userGender = ["Male", "Female", "Don't want to say"]),
  (index = readlineSync.keyInSelect(userGender, "What is your gender?"));
console.log("Your gender is: " + userGender[index]);

const userActivityOptions = [
  "Sedentary",
  "Moderately Active",
  "Active",
  "Very Active",
];
console.log(userActivityOptions);

const activityChoice = readlineSync.keyInSelect(
  userActivityOptions,
  "What is your activity level?"
);

console.log(activityChoice);

const userActivity = userActivityOptions[activityChoice];
console.log(userActivity);
console.log("Your activity level is: " + userActivityOptions[activityChoice]);

let weightInKg = readlineSync.questionInt("What is your weight? ");
console.log("Your weight is ", weightInKg);

let heightInM = readlineSync.questionFloat("What is your height? ");
const heightInCm = heightInM * 100;
console.log("Your height is ", heightInCm);

let bmr = 10 * weightInKg + 6.25 * heightInCm + 5 * userAge + 5;
console.log("Your BMR is", bmr);

console.log(
  "Logic Correct?",
  userActivity,
  "Active",
  userActivity === "Active"
);

let totalCalories;

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
console.log("Your total calories:", totalCalories);

console.log(`
  ~~~~ Overview ~~~~
  Your BMR: ${bmr}
  Your active state: ${userActivity}
  Your total calories: ${totalCalories}
~~~~ Overview ~~~~
`);

const suggestedIntake = totalCalories - 500;
console.log("Intake:", suggestedIntake);

// Calculate the weight they will be in 5, 10 and 15 weeks

let userWeight = 80;

const totalWeightFiveWeeks = userWeight - 2.5;
console.log("Result:", totalWeightFiveWeeks);
// expected output: 77.5

const totalWeightTenWeeks = userWeight - 5;
console.log("Result:", totalWeightTenWeeks);
// expected output: 75

const totalWeightFifteenWeeks = userWeight - 7.5;
console.log("Result:", totalWeightFifteenWeeks);
// expected output: 72.5

let bmi = weightInKg / (heightInM * heightInM);
console.log("Your BMI is", bmi.toFixed(2));

let category;

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

console.log("BMI too high?", bmi, bmi > 24.9);

// Don't output a diet plan when people have a underweight or normal BMI
console.log(bmi < 25, "No diet plan required");

// Calculate how much a person needs to lose to reach the normal category of BMI
const idealWeight = (weightInKg = bmi * (heightInM * heightInM));
console.log("Result :", idealWeight);

const goalWeight = 24.9 * (heightInM * heightInM);
const weightToLose = idealWeight - goalWeight;

console.log("Test:", weightToLose.toFixed(2));

// Display the amount of weeks a person needs to diet to reach the normal category of BMI

// When someone is underweight create a plan for them to gain weight with a suggested intake
