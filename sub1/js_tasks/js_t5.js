function reverse()
{

    let no = Number.parseInt(document.getElementById("num").value);

    
    let ans=0;

    while(no>0)
    {


ans=10*ans+(no%10);



no=Math.floor(no/10);
    }

    document.getElementById("res").innerHTML = "The Reversed number = "+ans;



}