// Load saved data
let data = JSON.parse(localStorage.getItem("health")) || {};

function updateData() {

  let weight = +document.getElementById("weight").value;
  let height = +document.getElementById("height").value;
  let steps = +document.getElementById("stepInput").value;
  let water = +document.getElementById("waterInput").value;
  let calories = +document.getElementById("calInput").value;

  // BMI
  if (weight && height) {
    let bmi = weight / ((height/100) ** 2);
    document.getElementById("bmi").innerText = bmi.toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";

    document.getElementById("bmiStatus").innerText = status;
  }

  // Steps
  if (steps) {
    document.getElementById("steps").innerText = steps;
    document.getElementById("stepsBar").style.width = (steps/10000)*100 + "%";
  }

  // Water
  if (water) {
    document.getElementById("water").innerText = water + " L";
    document.getElementById("waterBar").style.width = (water/4)*100 + "%";
  }

  // Calories
  if (calories) {
    document.getElementById("calories").innerText = calories;
  }

  // Save
  localStorage.setItem("health", JSON.stringify({weight, height, steps, water, calories}));

  // Message
  document.getElementById("message").innerText = "✅ Data Updated! Stay Healthy 💚";
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Load saved data on start
window.onload = function() {
  if (data.steps) document.getElementById("steps").innerText = data.steps;
  if (data.water) document.getElementById("water").innerText = data.water + " L";
  if (data.calories) document.getElementById("calories").innerText = data.calories;
};