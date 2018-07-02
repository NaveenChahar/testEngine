const questionOperations={
    quesObject:[],
    optionObject:[],
    correct:0,
    checkAns(currentQuestion,ans){
          if(ans==this.quesObject[currentQuestion].ans){
              this.correct=this.correct+1;
          }
    },
    prepareResult(){
        return 5*this.correct;
    },
    getQuestion(currentQuestion){
        var ques=this.quesObject[currentQuestion].question;
        
        return ques;
    },
    getOptions(currentQuestion){
        var options=this.optionObject[currentQuestion];
        return options;
    }
}