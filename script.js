// accept cookie and cookie section disapear

function dismissCookie(cookieElement) {
  cookieElement.remove();
}
var temperatureCArray = [
  "24°",
  "45°",
  "49°",
  "34°",
  "38°",
  "29°",
  "47°",
  "38°",
];
var temperatureFArray = [
  "43°",
  "81°",
  "88°",
  "61°",
  "68°",
  "52°",
  "85°",
  "68°",
];
var tempUnitChoice = document.querySelector("#temperature");
var tempNumbers = document.getElementsByClassName("temp-number");

function showTempuratureInC() {
  for (let i = 0; i < temperatureCArray.length; i++)
    tempNumbers[i].innerText = temperatureCArray[i];
}
function showTempuratureInF() {
  for (let i = 0; i < temperatureFArray.length; i++)
    tempNumbers[i].innerText = temperatureFArray[i];
}
showTempuratureInC();

// convert from C to F unit when user selected the option
function selectTemperatureUnit(element) {
  var text = element.options[element.selectedIndex].text;
  if (text == "°F") showTempuratureInF();
  else showTempuratureInC();
}
