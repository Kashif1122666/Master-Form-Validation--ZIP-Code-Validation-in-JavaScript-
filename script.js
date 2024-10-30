// chapter 85: Form validation :  ZIP CODES


// Function TO VALIDATE ZIP CODE - USER MUST ENTER FIVE DIGITS 
// function validateZIP() {
//     var numChars = document.getElementById("zip").value.length;
//     if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
// }
//   }



//ENHANCED FUNCTION TO RESTRICT USER TO ENTER ONLY NUMBERS 
function validateZIP() {
 var valueEntered = document.getElementById("zip").value;
 var numChars = valueEntered.length;
 if (numChars < 5) {
 alert("Please enter a 5-digit code.");
 return false;
 }
 for (var i = 0; i <= 4; i++) {
 var thisChar = parseInt(valueEntered[i]);
 if (isNaN(thisChar)) {
 alert("Please enter only numbers.");
 return false;
 }
 }
 }

    