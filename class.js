var points = [ 40 ,100 ,1 ,5 ,25 ,10 ];

document.getElementById("result").innerHTML=points;

function ascending()  {
    points.sort(function (a,b) {return a-b} )
    document.getElementById("result").innerHTML=points;
}


function descending() {
    points.sort(function (a,b) {return b-a})
    document.getElementById("result").innerHTML=points;
}

