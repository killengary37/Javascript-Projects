function Ride_Function(){ //function to decided if someone is tall enough to ride a ride
    var Height, Can_ride; //variables for the function
    Height = document.getElementById("Height").ariaValueMax; 
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough"; //using operator if under 52 cm meters you will recieve one or the other statements based on height
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

function Vehicle(Make, Model, Year, Color) { //establishing classes 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020,"Red"); //establishing objects for each class and assigning it to a variable
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971,"Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in" + Erik.Vehicle_Year;
}

