let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("output");

  let height_status = false;
  let weight_status = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML =
      "Please Enter Valid Height";
  } else {
    document.getElementById("height_error").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML =
      "Please Enter Valid Weight";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi > 18.6) {
      result.innerHTML = "Under-weight : " + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal : " + bmi;
    } else if (bmi <= 24.9) result.innerHTML = "Over-weight : " + bmi;
  } else {
    alert("The form has error!");
    result.innerHTML = "";
  }
});
