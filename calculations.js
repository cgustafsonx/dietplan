// 1. Verplaats de functie naar een ander bestand
// 2. exporteer de functie! (module.exports)
// 3. importeer de functie in je main bestand met require (functions.js in dit geval)
// 4. gebruik je functie in het main bestand calculateBmr() -> calculations.calculateBmr();
// 5. Voeg parameters toe aan de functie
// - Van function calculateBmr(){}
// - Naar function calculateBmr(weightInKg, heightInCm, userAge){}
// 6. Geef de juiste argument mee wanneer je de functie aanroept
// - in de juiste volgorde!
// - calculations.calculateBmr(weightInKg, heightInCm, userAge);

const readlineSync = require("readline-sync");

function calculateBmr(weightInKg, heightInCm, userAge) {
  let bmr = 10 * weightInKg + 6.25 * heightInCm + 5 * userAge + 5;
  return bmr;
}

function getWeightInput() {
  let weightInKg = readlineSync.questionInt("What is your weight? ");
  return weightInKg;
}

function getHeigthInput() {
  let heightInM = readlineSync.questionFloat("What is your height? ");
  return heightInM;
}

function convertToCm(heightInM) {
  const heightInCm = heightInM * 100;
  return heightInCm;
}

function calculateBmi(weightInKg, heightInM, heightInM) {
  let bmi = weightInKg / (heightInM * heightInM);
  return bmi;
}

module.exports = {
  getWeightInput: getWeightInput,
  getHeigthInput: getHeigthInput,
  convertToCm: convertToCm,
  calculateBmr: calculateBmr,
  calculateBmi: calculateBmi,
};
