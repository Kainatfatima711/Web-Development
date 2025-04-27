function validate( e ) {
    e.preventDefault( );
    


    const email=document.getElementById("email").value ;
    const pass=document.getElementById("password").value ;
    const msgbox =document.getElementById("message");

    let message='';
    if(email=== ''){
        message="Please Enter an Email.";
        msgbox .style.color="red";
    }else if (pass=== ''){
        message="Please Enter your Password .";
        msgbox.style.color="red";

    } 

    else{
        message="Login Successful !";
        msgbox.style.color="green";
    }
    msgbox.innerText=message;
    
}