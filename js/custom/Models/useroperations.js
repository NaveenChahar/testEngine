const userOperations={
    teachers:[],
    students:[],
    convert(jsonObject){
        jsonObject.LoginTeacher.forEach(teacher=>this.teachers.push(new teacher(teacher.userid,teacher.password)));
        console.log("teacher data is"+this.teachers);
        jsonObject.LoginStudent.forEach(student=>this.students.push(new student(student.userid,student.password)));
        console.log("student data is"+this.students);
    },
}