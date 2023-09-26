
var Input = document.getElementById("pass");
var letter = document.getElementById("lower");
var capital = document.getElementById("upper");
var number = document.getElementById("num");
var length = document.getElementById("len");

//show the message box when the user click on password
Input.onfocus = function() {
  document.getElementById("msg").style.display = "block";
  
}

//hide the message box when click outside password field
Input.onblur = function() {
  document.getElementById("msg").style.display = "none";
}

Input.onkeyup = function() {

  // Validate lowercase letters
  var lc = /[a-z]/g;
  if(Input.value.match(lc)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate uppercase letters
  var uc = /[A-Z]/g;
  if(Input.value.match(uc)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var n = /[0-9]/g;
  if(Input.value.match(n)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(Input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


 function validateser() {
    var x = document.forms["login-form"]["uname"].value;
     if (x == "") {
       alert("Name must be filled out");
       return false;
     }
       }



    //  sign up form
   
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function confirmRefresh() {
 
        location.reload(true);

  }
  
 
  
