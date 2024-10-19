     console.log   ("Question # 01")
var num = 15;
console.log("the value of a is =" + num)
console.log( num)

console.log("..................")


num = num
console.log("The value of a++ is =",num)
num = ++num
console.log("Now the value of a++ is =",num)


num = num++
console.log("The value of ++a is =",num)
console.log("Now the value of ++a is =",num)


num = --num
console.log("The value of --a is =",num)
console.log("Now the value of --a is =",num)


num = num
console.log("The value of a-- is =",num)
num = num--
console.log("Now the value of a-- is =",num)

   console.log ( " Question # 02")

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);

--a;
console.log(a);
--a - --b;
console.log(result);
--a - --b + ++b;
console.log(result);
--a - --b + ++b + b--;
console.log(result);

     console.log (" Question # 03")

var userName = prompt("Enter Your Name")
var greet = alert( "Hello" + "  " + userName  + "  "+ "Welcome!")

console.log   (" Question # 04")
    var number = prompt("Enter a Number");

     console.log("The value of {number} :" + number);
    
     var multi = number * 5;
    
     console.log("The Value of {number} by multiply by 5 : " + multi);
    