var studentdetails = {
    name:"Riya",
    age:12,
    grade:7
};

   var myJSON = JSON.stringify(studentdetails); //converts object to JSON for sending data

   var newOBj=JSON.parse(myJSON); //converts JSON into object while receiving data
   document.getElementById("result").innerHTML=newOBj.name;