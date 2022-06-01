function my_function(){
    document.getElementById("test").innerHTML = 0/0;
}

function my_function2(){
    document.getElementById("test2").innerHTML = isNaN('This is a string');
}

function my_function3(){
    document.getElementById("test3").innerHTML = isNaN('007');
}
