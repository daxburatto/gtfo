var tripDays = document.querySelector("#days");
var tripMoney = document.querySelector("#money");
var currentCity = document.querySelector("#current")
var submitBtn = document.querySelector("#submitBtn");

var formSubmitHandler = function (event) {  
  event.preventDefault();

  console.log(tripDays);
}

// when submit button is clicked
submitBtn.addEventListener("click", formSubmitHandler);