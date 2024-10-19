/////////////Question # 01 ///////////////////////////////////////////
console.log("Question # 01")
var input = prompt("Enter any Number or Alphabet")
if(input >= "1" && input <="100"){
    alert("your input is a number")
}else if(input >= "A" && input <= "Z"){
    alert("Your input is Upper-Case Alphabet")
}else if(input >= "a" && input <= "z"){
    alert("your input is Lower-Case Alphabet")
} else if (input.length != 1){
    alert("Please Enter a value")
}

///////////////Question # 02 ///////////////////////////////////////////
console.log("Question # 02")

var first = +prompt("Enter your First Number")
var second = +prompt("Enter your second Number")
if(first === second){
    alert("Your both numbers are equals")
}else if(first > second){
    alert("Your first number is greater than second")
}else if(second > first){
    alert("Your second number is greater than first")
}

// ///////////////Question # 03 ///////////////////////////////////////////
console.log("Question # 03")

var num = +prompt("Enter any kind of numbers positive,negative or zero ")
if (num > 0) {
    alert("Your number is positive")
}else if( num <= -1){
    alert("Your number is Negative")
}else if (num === 0){
    alert("Your number is Zero")
}

// ///////////////Question # 04 ///////////////////////////////////////////
console.log("Question # 04")
var vowels = prompt("Enter any word")
if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
 alert("Your input is a Vowel")
}
else if (vowels === "A" || vowels === "E" || vowels === "I" || vowels === "O" || vowels === "U") {
 alert("Your input is a Vowel")
}
 else if (vowels.length > 1) {  
  alert("Please Enter a single character") 
 } else { 
 alert("Your input is a Consonant")  
 } 


 // // ///////////////Question # 05 ///////////////////////////////////////////
 console.log("Question # 05")
  var password = +prompt("Enter your 6 digit password")
  var correctPassword = 123456
  if (password.length < 6) { 
 alert("Your password is too short")
 } else if (password.length > 6) {
 alert("Your password is too long")
 } else if (password === 123456) {
 alert("Bingo! Your password is Correct")
 }else if(password !==  123456){
 alert("Try-Again Please enter a valid password")
 }
  

 // ///////////////Question # 06 ///////////////////////////////////////////
 console.log("Question # 06")
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day"}
else{
greeting = "Good evening";
}
console.log(greeting)
console.log("Now! This statment is working")



 ///////////////Question # 07 ///////////////////////////////////////////
 console.log("Question # 07")
var time = prompt("What time is it? (in 24 hours format)")
if(time >= "0000" && time < "1200") {
 alert("Good Morning")
}else if(time >= "1200" && time < "1700") {
    alert("Good Afternoon")
}else if(time >= "1700" && time < "2100") {
    alert("Good Evening")
}else if(time >= "2100" && time < "2359") {
    alert("Good Night")
}


