//Replaces placeholder CWID with defined CWID
var cwid = "A2982319873";
var pin = 342587;
window.onload = function() {
  document.getElementById('cwid').innerHTML = "CWID: " + cwid + " (Alt. Pin: " + pin + ")";
  document.getElementById("pinterm").addEventListener('submit', validateForm);
}
/*
function validateForm(event) {
  var id = document.pinterm.pin.value;
  if (id != pin || 0) {
    alert("Error: Incorrect PIN / No PIN entered");
  }
}*/
