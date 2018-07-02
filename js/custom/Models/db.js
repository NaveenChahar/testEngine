const dbOperations={
    checkteacher(id,password){
        var pr=new Promise((resolve,reject)=>{
            var teacherRef=firebase.database().ref('LoginTeacher/'+id);
            teacherRef.on('value',(snapshot)=>{
                console.log("id is"+snapshot.val().id);
                var teacherobj=snapshot.val();
                //return snapshot.val();
                resolve(teacherobj);
            })
            });
        return pr;
        
    },
    checkstudent(id,password){

        var pr=new Promise((resolve,reject)=>{
            var teacherRef=firebase.database().ref('LoginStudent/'+id);
            teacherRef.on('value',(snapshot)=>{
                console.log("id is"+snapshot.val().id);
                var teacherobj=snapshot.val();
                //return snapshot.val();
                resolve(teacherobj);
            })
            });
        return pr;
    },
    addQuestion(questionObject){
        firebase.database().ref('Questions/'+questionObject.questionid).set(questionObject);
        console.log("question added successfully");
    },
    obtainQuestions(){
        var pr=new Promise((resolve,reject)=>{
            var quesRef=firebase.database().ref('Questions');
            quesRef.on('value',(snapshot)=>{
                var question=snapshot.val();
                
    
                resolve(question);
                //return snapshot.val();
            })
        });
        return pr;
    },
    obtainOptions(){
        var pr=new Promise((resolve,reject)=>{
            var quesRef=firebase.database().ref('Options');
            quesRef.on('value',(snapshot)=>{
                var options=snapshot.val();
                
    
                resolve(options);
                //return snapshot.val();
            })
        });
        return pr;
    }
}