function add(){
    a = parseInt(document.getElementById("add1").value);
    b = parseInt(document.getElementById("add2").value);
  
    document.getElementById("value").innerHTML = a+b;
}   
function sub(){
    a = document.getElementById("add1").value;
    b = document.getElementById("add2").value;
  
    document.getElementById("value").innerHTML = a-b;
}
function mul(){
    a = document.getElementById("add1").value;
    b = document.getElementById("add2").value;
  
    document.getElementById("value").innerHTML = a*b;
}
function div(){
    a = document.getElementById("add1").value;
    b = document.getElementById("add2").value;
  
    document.getElementById("value").innerHTML = a/b;
}