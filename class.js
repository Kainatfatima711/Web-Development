var numbers = [28,6,19,95]

function myFunction(num) {
    return num * 10;

}

var newarray = numbers.map(myFunction);

document.getElementById("product_value").innerHTML=newarray;