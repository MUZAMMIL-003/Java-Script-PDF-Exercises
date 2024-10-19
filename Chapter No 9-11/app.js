console.log("Question # 01")
// ______________Question # 01______________________
var cityName = prompt("Enter your city name");
var userCityName  = cityName.toLowerCase();
if(userCityName == "karachi"){
    console.log("Hello, Karachi! May the city’s vibrant energy uplift you.")
}else if(userCityName == "lahore") {
    console.log("Greetings from Lahore! May the culture and warmth of the city embrace you.")
}else if(userCityName == "islamabad") {
    console.log("Welcome to the capital! May your visit be peaceful and inspiring.")
}else if(userCityName == "peshawar") {
    console.log("Salam, Peshawar! May the rich history of this city inspire you.")
}else if(userCityName == "quetta") {
    console.log( "Hello, Quetta! May the beauty of your landscapes bring you peace.")
}else if(userCityName == "faisalabad") {
    console.log("Welcome to Faisalabad! Wishing you success in all your endeavors.")
}else if(userCityName == "multan") {
    console.log( "Greetings from Multan! May your heart be filled with the city's rich heritage.")
// }

console.log("Question # 02")
// ______________Question # 02______________________
var genders = prompt("Enter your gender");
var gender  = genders.toLowerCase();
if(gender == "male"){
    console.log("Good Morning Sir.")
}else if(gender == "female") {
    console.log("Good Morning Ma’am.")
}

console.log("Question # 03")
// ______________Question # 03______________________
var trafficColors = prompt("Enter any traffic signal color");
var colors  = trafficColors.toLowerCase();
if(colors == "red"){
    console.log("Must Stop.")
}else if(gender == "yellow") {
    console.log("Ready to move.")
}else if(gender == "green") {
    console.log("Move now.")
}

console.log("Question # 04")
// ______________Question # 04______________________
var carFuel = prompt("Enter your car fuel in liters");
var fuel  = carFuel.toLowerCase();
if(fuel > 0.25 ){
   console.log("Good to go")
}else  {
        console.log("“Please refill the fuel in your car”.")
}

console.log("Question # 05")
// ______________Question # 05______________________

console.log("Question # 05 part--a")
 var a = 4;
if (++a === 5){
console.log("given condition for variable a is true");
}

console.log("Question # 05 part--b")
var b = 82;
if (b++ === 83){
console.log("given condition for variable b is true");
}else {
    console.log("given condition for variable b is false")
}

console.log("Question # 05 part--c")
var c = 12;
if (c++ === 13){
    console.log("condition 1 is true");
}
if (c === 13){
    console.log("condition 2 is true");
}
if (++c < 14){
    console.log("condition 3 is true");
}
if(c === 14){
    console.log("condition 4 is true");
}

console.log("Question # 05 part--d")
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
console.log("The cost equals");
}

console.log("Question # 05 part--e")
if (true){
    console.log("True");
    }
    if (false){
    console.log("False");
    }

console.log("Question # 05 part--f")
if("car" < "cat"){
    console.log("car is smaller than cat");
}

// ______________Question # 07______________________
console.log("Question # 07")
var userNum = prompt("Guess any Number between 1-10")
var secretNum= 3;
var closeNum = 4;
if (userNum == secretNum) {
    console.log("Bingo! Correct answer.")
}else if (userNum ==  closeNum) {
    console.log("Close enough to the correct answer.")
}else{
    console.log("Try-Again")
}

// ______________Question # 08______________________
console.log("Question # 08")
var userInput = prompt("Write any number which is divisible by 3")
var dividend = userInput / 3
console.log( "The answer is :" + " " + dividend)


// ______________Question # 09______________________
console.log("Question # 09")
var inputNum =  +prompt("Write any number i'll tell the number is odd or even");
if (inputNum % 2 == 0) {
    console.log("this number is even")
}else
{ console.log("this number is odd")   
}

// ______________Question # 10______________________
console.log("Question # 10")
var temp = prompt("enter todays temperature")
if (temp >= 40) {
    console.log("It is too hot outside.")
}
else if (temp >= 30 && temp < 40) {
    console.log("The Weather today is Normal.")
}
else if (temp >= 20 && temp < 30) {
    console.log("Today’s Weather is cool.")
}
else if (temp >= 10 && temp < 20) {
    console.log("OMG! Today’s weather is so Cool.")
}


// ______________Question # 11______________________
// console.log("Question # 11")
var firstNum = +prompt("Enter your first Number")
var opration = prompt("Enetr your operation (+, -, *, /, %)")
var  secondNum = +prompt("Enter your second Number")

if (opration == "+") {
    result = firstNum + secondNum;
} else if (opration == "-") {
    result = firstNum - secondNum;
} else if (opration == "*") {
    result = firstNum * secondNum;
} else if (opration == "/") {
    result = firstNum / secondNum;
}
console.log(result);