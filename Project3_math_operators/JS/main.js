function add_Function(){  //defining function name
    var addition = 2 + 2; //establishing parameters of addition function
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition; //returning results of the function the ID Math1 in index.html

}

function sub_Function(){
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 =" + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + simple_Math;
}

function division(){
    var simple_Math = 48/6;
    document.getElementById("Math4").innerHTML = "48/6 = " + simple_Math;
}




function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function increment(){ //defining fnction for incrementing numbers
    var x = 5; // establishing that variable x = 5 
    x++; //incrementing x + 1 
    document.getElementById("Math6").innerHTML = "x + 1 =" + x; //returning value of 6 to Math6 ID in html
}

function decrement(){
var x = 5.25;
x--;
document.getElementById("Math7").innerHTML = "x - 1 =" + x;
}

window.alert(Math.random()*100); // window alert funtion that randommly generates a number between 1 and 100