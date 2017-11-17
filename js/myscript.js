/* Declare global variables */
var names = ['thor', 'capamerica', 'hulk', 'batman']; //usernames
var pword = ['lightning', 'shield', 'green', 'batman']; //passwords
var CWID = ['A10536', 'A26842', 'A84635', '97315']; //user ID
var regpin = ['123', '456', '789', '111']; //registry pins
var currentuser = "";
var currentCWID = "";


//checks if login credentials are accurate
function signIn ()
{
  //create variables for username and password
  var user=document.forms["login_form"]["uname"].value;
  var pass=document.forms["login_form"]["passwd"].value;

  //identifies index of matched username in Array names
  var containuser = (names.indexOf(user));
  
  if (containuser > -1 && pass == pword[containuser]) //username and password match
  {
    //set global variables to be used in other pages
    currentuser = user;
    currentCWID = CWID[containuser]; 
    
    window.location.replace("home.html"); //redirects to home page
    return false;
  }
  
  else //username and/or password don't match
  {
    //alert the user that username and password don't match
    alert('Oh no!!! Username and Passsword do not match. Try again!'); 
    document.getElementById("login_form").reset(); //resets form fields

    return false;
  }
  document.getElementById("login_form").submit();
};
