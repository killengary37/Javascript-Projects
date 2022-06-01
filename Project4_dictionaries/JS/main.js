function my_Motorcycle(){
    var Motorcycle = {
        body: "soft-tail",
        color: "Gun-Barrel",
        model: "Harley",
        mileage: 8256,
        sound: "Vroom-Vroom"
    };
    delete Motorcycle.sound;
    document.getElementById("Motorcycle").innerHTML = Motorcycle.sound;
}