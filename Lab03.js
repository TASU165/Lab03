var x=0;
function Addfunction(){
    if(x<10){
        x = x+1;
        document.getElementById("demo").innerHTML = "The number is"+" "+ x;
        return x;
    }
}
function Minusfunction(){
    if(x>0){
        x = x-1;
        document.getElementById("demo").innerHTML = "The number is"+" "+ x;
        return x;
    }
}