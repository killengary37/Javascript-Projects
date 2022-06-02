function full_Sentence(){
    var part_1 = "I have"; //variables for different sections of the string
    var part_2 = "made this";
    var part_3 = "into a complete";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //using concat method to connect each string to form a sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "A;; work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //using slice method to isolate the word Johnny
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); //using string method to turn the number 182 into a string 
}

function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);//toPrecision method round up a float number .3012987 to .30130
}