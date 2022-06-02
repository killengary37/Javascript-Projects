function count_Function() { //establishing a counting function
    document.getElementById("counting").innerHTML = Count();
    function Count() { //Counting Function to add 1 unit to a starting number
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} //nested function that adds the value 1
        Plus_one();
        return Starting_point; //returns new value to count_Function to be returned to the html document
    }
}