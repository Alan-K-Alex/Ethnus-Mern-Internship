function validate()
{

let t1=document.getElementById("nam").value;
let t2=document.getElementById("email").value;
let t3=document.getElementById("web").value;
let t4=document.getElementById("msg").value;

if(t1=="")
{

document.getElementById("pnam").innerHTML = "This field is required";
document.getElementById("nam").style.borderColor = "red";


}
else{

    document.getElementById("pnam").innerHTML = "";
document.getElementById("nam").style.borderColor = "black";

}

if(t2=="")
{

document.getElementById("pemail").innerHTML = "This field is required";
document.getElementById("email").style.borderColor="red";



}
else{

    document.getElementById("pemail").innerHTML = "";
document.getElementById("email").style.borderColor = "black";

}


if(t3=="")
{

document.getElementById("pweb").innerHTML = "A valid email address is required";
document.getElementById("web").style.borderColor = "red";


}
else{

    document.getElementById("pweb").innerHTML = "";
document.getElementById("web").style.borderColor = "black";

}


if(t4=="")
{

document.getElementById("pmsg").innerHTML = "A valid url is required";
document.getElementById("msg").style.borderColor = "red";


}

else{

    document.getElementById("pmsg").innerHTML = "";
document.getElementById("msg").style.borderColor = "black";

}











}