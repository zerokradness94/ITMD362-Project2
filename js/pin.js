/*window.onload = function(){
  document.getElementById("pinterm").addEventListener('submit', validateForm);
}*/
function validateForm(event) {
  var id = document.pinterm.pin.value
  if (id != pin || 0) {
    alert("Error: Incorrect PIN / No PIN entered");
  }
  else {
    alert("Test");
    document.location.href = '../AddDrop.html';
  }
}
