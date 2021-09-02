
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});



it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


it ("should setup the initial values", function(){
  document.getElementById("loan-amount").value = 700000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 2;
  console.log("it works",setupInitialValues());
  expect(setupInitialValues()).toEqual({
    amount:"700000",
    years:"30",
    rate:"2"}
  );
});


it ("should update initial values based on input", function(){
  document.getElementById("loan-amount").value = 4000;
  document.getElementById("loan-years").value = 5;
 document.getElementById("loan-rate").value = 2;

  expect(getCurrentUIValues()).toEqual({
    amount:"4000",
    years:"5",
    rate:"2"}
  );
});

