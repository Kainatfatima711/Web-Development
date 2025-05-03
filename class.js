var text="";
var i =0;

while  ( i < 10 ){

    text = text  +" <br> The number is " + i;
    i++;
}

document.getElementById("number").innerHTML= text;