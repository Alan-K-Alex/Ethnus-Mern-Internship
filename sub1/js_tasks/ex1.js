

function show_date()
{
  date = new Date();

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  document.getElementById("t1").innerHTML = date.getDate()+"/"+month[date.getMonth()]+"/"+date.getFullYear();

}


function show_time()
{

    date = new Date();

    document.getElementById("t2").innerHTML =  date;
}