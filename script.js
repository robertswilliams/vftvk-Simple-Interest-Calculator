function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }

  var interest = principal * years * rate / 100;

  var hl_begin = "<span style='background-color: yellow'>"
  var hl_end = "</span>"
  var line1 = "<br/>If you deposit " + hl_begin + principal + hl_end + ",<br/>";
  var line2 = "at an interest rate of " + hl_begin + rate + "%" + hl_end + ".<br/>";
  var line3 = "You will receive an amout of " + hl_begin + interest + hl_end + ",<br/>";
  var line4 = "In the year " + hl_begin + future_year(years) + hl_end + "<br/>";

  document.getElementById("result").innerHTML = line1 + line2 + line3 + line4;
}

function future_year(years_str) {
  var years = parseInt(years_str, 10);
  var currentDate = new Date();

  return currentDate.getFullYear() + years;
}

function set_rate() {
  var rate = document.getElementById("rate").value;
  document.getElementById("rate_display").innerHTML = rate;
}
