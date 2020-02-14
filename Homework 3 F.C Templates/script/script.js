// ACADEMY

function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;

    this.PrintStudents = (students) => students.forEach(stud => console.log(stud));

    this.PrintSubjects = (subjects) => subjects.forEach(sub => console.log(sub));

};

let academyOne = new Academy("AcademyOne Name", ["Vasko", "Petko", "Mitko"], ["Maths", "English", "Physics"], "1.1.2021", "31.1.2021", 10);

// SUBJECT

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.OverrideClasses = number => number > 3 ? this.numberOfClasses = number : console.log("Number Must be greater then 3");

};

let SubjectOne = new Subject("Maths", true, academyOne, ["Mira", "Keti", "Vasko"]);

// STUDENT 

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.CompletedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.StartAcademy = (acedemyObject, student) => {
        this.academy = acedemyObject
        return acedemyObject.students.push(student)

    };
    this.startSubject = (subjectObject, student) => {
        let subOfSubject = subjectObject.academy.subjects
        subOfSubject.forEach(subj => subj !== subjectObject.title || this.academy === null ? console.log("Smth went wrong") : this.currentSubject = subjectObject);

        if (this.currentSubject === subjectObject) {
            this.CompletedSubjects = this.currentSubject
            this.currentSubject = []
            subjectObject.students.push(student)
        };



    //     // Dolnoto go cuvam za BREAK! Da ne mi proveruva vo cel array

    //     // subOfSubject.forEach(subj => {
    //     //     if(subj !== subjectObject.title || this.academy === null){
    //     //         console.log("Something went Wrong")
    //     //     }else {this.currentSubject = subjectObject}
    //     // })

    }


};


let studentOne = new Student("Alex", "Alexovski", 25);

