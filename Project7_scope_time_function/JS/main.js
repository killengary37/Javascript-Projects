

//Local variable function by having the variable x inside the function 
function Add_numbers_1() {
    var X = 10;
    document.write(20 + x + "<br>");
}

function Add_numbers_2() { //by having the var x inside the add numbers 1 function this function cannot access the variable x
    document.write(x + 100);
    }
Add_numbers_1();
Add_numbers_2();

//global variable function
var x = 10; //by having the variable x outside the functions both functions can use var x for the mathematics
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

