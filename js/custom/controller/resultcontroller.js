window.addEventListener("DOMContentLoaded",init);

function init(){
   // var score=questionOperations.prepareResult();
   var score=localStorage.getItem("result");
    document.querySelector("#result").innerHTML=score;
}