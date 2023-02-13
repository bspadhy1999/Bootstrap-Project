const appLink =()=>{
    let email=document.getElementById("emailInput").value;
    if(email==="" || email==="null"){
        document.getElementById("warnEmail").innerHTML="Please enter your email id";
        return
    }
    let mobile=document.getElementById("mobileInput").value;
    if(mobile==="" || mobile===0){
        document.getElementById("warnMobile").innerHTML="Please enter your mobile no.";
        return;
    }
}

