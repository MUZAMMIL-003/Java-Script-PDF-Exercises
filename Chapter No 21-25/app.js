/////////////---Question no 01-------////////////////////////
var firstName = document.getElementById("fN");
var lastName = document.getElementById("lN");
function userName() {
    var h1 = document.getElementById("h-One") 
    h1.innerHTML = ("Welcome"+ " " + firstName.value + " " + lastName.value)
}

/////////////---Question no 02-------////////////////////////
var phoneModel = document.getElementById("phoneModel")
function mobileModel() {
    var phoneDisplay = document.getElementById("phone")
    var h2 = document.getElementById("length")
    phoneDisplay.innerHTML = phoneModel.value;
    for (let i = 1; i < phoneModel.value.length; i++) {
        // console.log("i")
        h2.innerHTML = i=1;
    }
}