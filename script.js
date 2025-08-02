function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    document.getElementById("result").innerText = "Please enter valid values!";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal";
  } else {
    category = "Overweight";
  }

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
