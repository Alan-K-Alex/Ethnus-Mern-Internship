function multiply()
{

let no1 = Number.parseInt(document.getElementById("n1").value);
let no2 = Number.parseInt(document.getElementById("n2").value);

let q=no1*no2;


document.getElementById("res").innerHTML = "The Result is :</br>"+q;

}


function divide()
{

    let no1 = Number.parseInt(document.getElementById("n1").value);
    let no2 = Number.parseInt(document.getElementById("n2").value);
    
    let q=no1/no2;
    
    
    document.getElementById("res").innerHTML = "The Result is :</br>"+q;



}