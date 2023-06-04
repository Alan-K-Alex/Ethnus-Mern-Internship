function reverse()
{

let s = document.getElementById("txt").value;

const l = s.length;
let ind=l-1;

let ans="";

while(ind>=0)
{

ans=ans+s.charAt(ind);
ind=ind-1;

}

document.getElementById("res").innerHTML = "The Reversed String = "+ans; 




}