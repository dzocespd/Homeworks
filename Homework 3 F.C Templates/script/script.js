// ACADEMY

function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;

    // posto ke ti bidat objekti mozes i da gi mapiras ili da gi logiras samo iminjata na studentite
    this.printStudents = () => this.students.forEach(stud => console.log(stud));

    this.printSubjects = () => this.subjects.forEach(sub => console.log(sub));
};

// ["Vasko", "Petko", "Mitko"] treba da bide niza od Students a ne od stringovi
// Istoto od gore vazi i za Subject ;)

// Nikade nemase baranje deka treba sega da kreiras objekt od akademijata :D

let academyOne = new Academy("AcademyOne Name", ["Vasko", "Petko", "Mitko"], ["Maths", "English", "Physics"], new Date(2021, 1, 1), new Date(2021, 1, 31), 10);

// SUBJECT

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = number => number > 3
        ? this.numberOfClasses = number
        : console.log("Number Must be greater then 3");

};

let SubjectOne = new Subject("Maths", true, academyOne, ["Mira", "Keti", "Vasko"]);

// STUDENT

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = (academyObject, student) => {
        this.academy = academyObject
        return academyObject.students.push(student)

    };
    this.startSubject = (subjectObject, student) => {
        let subOfSubject = subjectObject.academy.subjects
        subOfSubject.forEach(subj => subj !== subjectObject.title || this.academy === null
            ? console.log("Smth went wrong")
            : this.currentSubject = subjectObject);

        if (this.currentSubject === subjectObject) {
            this.completedSubjects = this.currentSubject
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

