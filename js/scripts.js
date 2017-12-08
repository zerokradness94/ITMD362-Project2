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

function buttonSuccess()
{
  var a=document.forms["AddDrop"]["crn1_field"].value;
  var b=document.forms["AddDrop"]["crn2_field"].value;
  var c=document.forms["AddDrop"]["crn3_field"].value;
  var d=document.forms["AddDrop"]["crn4_field"].value;
  var e=document.forms["AddDrop"]["crn5_field"].value;
  var f=document.forms["AddDrop"]["crn6_field"].value;
  
if (a !== "29744" && a !== "28987" && a !== "29690" && a !== "20574" &&
b !== "29744" && b !== "28987" && b !== "29690" && b !== "20574" &&
c !== "29744" && c !== "28987" && c !== "29690" && c !== "20574" &&
d !== "29744" && d !== "28987" && d !== "29690" && d !== "20574" &&
e !== "29744" && e !== "28987" && e !== "29690" && e !== "20574" &&
f !== "29744" && f !== "28987" && f !== "29690" && e !== "20574" )
  {
    alert('Must enter a valid CRN number');
	return false;
  }
else 
 {
   alert('Classes have been added successfully');
   return false;
 }
    document.getElementById("AddDrop").submit();
};

function buttonSuccess2()
{
  alert('Class has been added successfully');
};

function buttonSuccess3()
{
  alert('Changes have been saved');
};