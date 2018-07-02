window.addEventListener("DOMContentLoaded",init);

function init(){
    //doAjax();
    bindEvents();

}

function bindEvents(){
    document.querySelector("#teacher").addEventListener("click",teacher);
    document.querySelector("#student").addEventListener("click",student);
    document.querySelector("#stLogin").addEventListener("click",studentLogin);
    document.querySelector("#tLogin").addEventListener("click",teacherLogin);

}

/*function doAjax(){
    fetch("https://testengine-fdb51.firebaseio.com/").then(response=>response.json().then(json=>{
        userOperations.convert(json);
        console.log("Type of JSON is ",typeof json);
        console.log("JSON ",json instanceof Object);
        console.log("Json is ",json);
    }).catch(err=>console.log("Invalid JSON ",json))).catch(err=>console.log("Error in Server Call ",err));
}
*/
function teacher(){
    
    document.querySelector("#teacherLogin").className="show";
    document.querySelector("#intro").className="hide";
}

function student(){
    document.querySelector("#studentLogin").className="show";
    document.querySelector("#intro").className="hide";

}

function teacherLogin(){
    var id=document.querySelector("#teacherid").value;
    var password=document.querySelector("#teacherpassword").value;
    var pr=dbOperations.checkteacher(id,password);
    pr.then(data=>{
        location.href="setTest.html";
       
    }).catch(err=>{
        console.log(err);
        document.querySelector("#message").innerHTML="Invalid userid or password";
    });
    /*if(localStorage.id==){
        redirect();
    }
    */

}

function studentLogin(){
    var id=document.querySelector("#studentid").value;
    var password=document.querySelector("#studentpassword").value;
    var pr=dbOperations.checkstudent(id,password);
    pr.then(data=>{
        location.href="test.html";
       
    }).catch(err=>{
        console.log(err);
        document.querySelector("#message").innerHTML="Invalid userid or password";
    });
}

    
