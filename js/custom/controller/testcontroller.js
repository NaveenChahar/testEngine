window.addEventListener("DOMContentLoaded",init);
var currentQuestion;
var timeLimit=120;
var ans;
function init(){
    bindEvents();

}

function bindEvents(){
    currentQuestion=1;
    bringQuestions();
    //timer(timeLimit);
    bringOptions();
    document.querySelector("#back").addEventListener("click",prevQues);
    document.querySelector("#next").addEventListener("click",nextQues);
    document.querySelector("#finish").addEventListener("click",finishTest);
    // document.querySelector("#q1").addEventListener("click",nav(q1));
    // document.querySelector("#q2").addEventListener("click",nav(q2));
    // document.querySelector("#q3").addEventListener("click",nav(q3));

}
function enableDisable(){
    if(currentQuestion>1){
        document.querySelector("#back").removeAttribute("disabled");
    }
    else{
        document.querySelector("#back").setAttribute("disabled",false);
    }
    if(currentQuestion==questionOperations.quesObject.length-1){
        document.querySelector("#next").setAttribute("disabled",false);
    }
    else{
        document.querySelector("#next").removeAttribute("disabled");
    }
}


function prevQues(){
    currentQuestion--;
    var question=questionOperations.getQuestion(currentQuestion);
    printQuestion(question);
    printOptions(questionOperations.getOptions(currentQuestion));
    enableDisable();

}
function nextQues(){
    getAns();
    document.querySelector("#q"+currentQuestion).className="btn green";
    currentQuestion++;
    var question=questionOperations.getQuestion(currentQuestion);
    printQuestion(question);
    printOptions(questionOperations.getOptions(currentQuestion));
    enableDisable();
}
function finishTest(){
    getAns();
    //questionOperations.checkAns(currentQuestion);
    var score=questionOperations.prepareResult();
    //document.getElementById("result").innerHTML=score;
    localStorage.setItem("result",score);
    location.href="result.html";
}
function printQuestion(string){
    document.querySelector("#question").innerHTML=string;
}

function bringQuestions(){
    var pr=dbOperations.obtainQuestions();
    pr.then(data=>{
        questionOperations.quesObject=data;
        printQuestion(questionOperations.quesObject[currentQuestion].question);

    }).catch(error=>{
        console.log(error);
    });
    enableDisable();


}

function bringOptions(){
    var pr=dbOperations.obtainOptions();
    pr.then(data=>{
        questionOperations.optionObject=data;
        printOptions(questionOperations.optionObject[currentQuestion]);

    }).catch(error=>{
        console.log(error);
    });
}
function timer(timeLimit){
    
    setInterval(()=>{
        if(timeLimit>0){
            document.querySelector("#time").innerHTML=timeLimit;
            console.log("time remaining  "+timeLimit);
            timeLimit=timeLimit-1;
        }
        else{
          document.querySelector("#time").innerHTML="time up";
        }
      }
    ,1000);
  }

  function printOptions(options){
      for(let key in options){
          document.getElementById(key).innerHTML=options[key];
      }
      
  }
  function getAns(){
      if(document.getElementById(1).checked){
          ans=1;
      }
      if(document.getElementById(2).checked){
        ans=2;
      }
      if(document.getElementById(3).checked){
        ans=3;
      }
      if(document.getElementById(4).checked){
        ans=4;
      }
      ans=document.querySelector("#option"+ans).innerHTML;
      questionOperations.checkAns(currentQuestion,ans);
  }
//   function nav(id){
//     currentQuestion=parseInt(document.getElementById(id).innerHTML);
//     var question=questionOperations.getQuestion(currentQuestion);
//     printQuestion(question);
//     printOptions(questionOperations.getOptions(currentQuestion));
//     enableDisable();
//   }