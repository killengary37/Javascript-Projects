document.write(typeof 10);

document.write("10" + 5);

//Boolean Logic//

document.write(10>2); // true output

document.write(10<2); // false output

console.log(2+2); //experimenting using console.log

console.log(15<14); //more boolean logic examples

document.write(10==10); //double eaqual signs to see if the statement is true or false

document.write(3==11); //double equals sign to see if the statement is true or false

x = 10;
y = 10;
document.write(x===y); // triple equals sign for a true statement

x = 82;
y = "82";
document.write(x===y); // triple equal sign for a false statement the data types are not the same 

A = "Magnus";
B = "Magnus";
document.write(A===B); //This would return true and works for this data type because both are strings

document.write(5 > 2 && 10 > 4); //&& operator determines the logic between values or variable are true 

document.write( 5 > 10 || 10 > 4); // OR operator this would return true because wile 5 is not greater that 10, 10 is greater than 4 

function not_Function() {
    document.getElementById("not").innerHTML = !(5 > 10); //!not operator function checking two variables this would be true
}

function not_Function2() {
    document.getElementById("not2").innerHTML = !(20 > 10);//!not operator function checking two variables this would be false
}
