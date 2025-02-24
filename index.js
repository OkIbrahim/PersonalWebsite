function myFunction() {
  var x = document.getElementsByClassName("city");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementsByClassName("city");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "";
  }
}

function updateCurrentTimeUTC() {
  const now = new Date();
  const utcString = now.toISOString().replace("T", " ").substring(0, 19);
  document.getElementById(
    "currentTimeUTC"
  ).textContent = `Current Time (UTC): ${utcString}`;
}

updateCurrentTimeUTC();
setInterval(updateCurrentTimeUTC, 1000);
