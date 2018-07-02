window.addEventListener("DOMContentLoaded",init);
var idgenerator;
function init(){
    bindEvents();
    idgenerator=autoGen();
}

function bindEvents(){
    //document.querySelector("#search").addEventListener("click",doSearch);
  
    document.querySelector("#add").addEventListener("click",putQuestion);

}

function putQuestion(){
    var question=document.querySelector("#question").value;
    var questionid=idgenerator.next().value;
    var ans=document.querySelector("#answer").value;
    var questionObject=new Question(questionid,question,ans);
    dbOperations.addQuestion(questionObject);
    
}