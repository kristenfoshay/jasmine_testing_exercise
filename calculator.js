window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  let currentvalues = {};
  currentvalues["amount"] = document.getElementById("loan-amount").value;
  currentvalues["years"] = document.getElementById("loan-years").value;
  currentvalues["rate"] = document.getElementById("loan-rate").value;
  return currentvalues;
  
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const values  = { amount: 700000, years: 30, rate: 2 };
  document.getElementById("loan-amount").value = values["amount"];
  document.getElementById("loan-years").value = values["years"];
  document.getElementById("loan-rate").value = values["rate"];
  update();
}




// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

  


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = (values["rate"] / 100) / 12;
  const p = values["amount"];
  const n = Math.floor(values["years"] * 12);
  
  return ((p*i)/(1-(1+i)**-n)).toFixed(2);
    
}



// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").textContent = "$" + monthly;
}


