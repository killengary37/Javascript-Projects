function get_Date() { //get date function 
    if (new Date() .getHours() < 18) { // if statement that says if you run this program before 6:00 you get a greeting after 6:00 pm you get no message
        document.getElementById("Greeting").innerHTML = "How are you doing?" ;
    }
}

function Age_Function() {  //function with user input of their age
    Age = document.getElementById("Age").value;
    if (Age >= 18 ) {  //if user enter a number less than 18 they will get the response not old enough
        vote = "You are old enough to vote";
    }
     else {
        vote = "You are not old enough to vote!"; //else if user enters age older then 18 they get a different response 
    }
    document.getElementById("How_old_are_you?").innerHTML = vote; //returns information back to html document for output to user
}

function Time_function() {  
    var Time = new Date().getHours() ; //gets current time from local computer
    var Reply;
    if (Time < 12 == Time > 0) {  //if the local time is before 12 noon function will send this response
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //if local time is between noon and 6 pm then function will return this
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; //and if time is past 6 pm then recieve this response
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}