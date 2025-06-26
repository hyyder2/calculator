let val=document.getElementById("input");

function userinput(v){
    val.value+=v;
}
function Erase(){
    val.value="";
}
 function backspace(){
    val.value=val.value.slice(0,-1)
 }
 function calculate(){
    val.value=eval(val.value)
 }