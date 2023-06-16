(function() {
    // dom elements
    const studentForm = document.getElementById("studentForm") as HTMLFormElement;
    const studentsContainer = document.querySelector(".students") as HTMLDivElement;
    const nameInput: string = studentForm['name'];
    const ageInput: number = studentForm['age'];
    const rollInput: number = studentForm['roll'];

    // {name: '', age: number, roll: number}; the object addstudent
    // type?
    const students: { name, age, roll }[] = JSON.parse(localStorage.getItem("students")) || [];

    const addStudent = (name: string, age: number, roll: number): {name, age, roll} => {
        // returns new student, pushes
        students.push({ name, age, roll });

        localStorage.setItem("students", JSON.stringify(students)); // set the item

        return { name, age, roll }; // ?????? why returning

    }

    const createStudentElement = ({name, age, roll}) => { // desctructuring the student object so we dont do student.name for example
        // create elements
        const studentDiv: HTMLDivElement = document.createElement("div");
        const studentName: HTMLHeadingElement = document.createElement("h2");
        const studentAge: HTMLParagraphElement = document.createElement("p");
        const studentRoll: HTMLParagraphElement = document.createElement("p");
        // fill the content
        studentName.innerText = "Student name: " + name;
        studentAge.innerText = "Student age: " + age;
        studentRoll.innerText = "Student Roll: " + roll;
        // add to the dom
        studentDiv.append(studentName, studentAge, studentRoll);
        studentsContainer.appendChild(studentDiv); // one element
        studentsContainer.style.display = students.length === 0 ? "none" : "flex"; // ????
    }

    studentsContainer.style.display = students.length === 0 ? "none" : "flex"; // ????????????


    students.forEach(createStudentElement); // not calling, because it'll execute at real time ???? referencing

    studentForm.onsubmit = (e) => {
        e.preventDefault(); // prevents default behavior of form submission, when you click the page refreshes
        
        const newStudent = addStudent(
            nameInput.value, ageInput.value, rollInput.value
        );

        createStudentElement(newStudent);

        nameInput.value = "";
        ageInput.value = "";
        rollInput.value = "";
    }


})();