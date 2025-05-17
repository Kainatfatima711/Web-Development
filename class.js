async function add( a , b){
    let response=await a + b ; // 25= response
    display(response);

    
}

 function display(some){
    document.getElementById("result").innerHTML=some;
 }

 add(5,20)