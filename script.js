(function () {
    // dom elements
    var studentForm = document.getElementById("studentForm");
    var studentsContainer = document.querySelector(".students");
    var nameInput = studentForm['name'];
    var ageInput = studentForm['age'];
    var rollInput = studentForm['roll'];
    // {name: '', age: number, roll: number}; the object addstudent
    // type?
    var students = JSON.parse(localStorage.getItem("students")) || [];
    var addStudent = function (name, age, roll) {
        // returns new student, pushes
        students.push({ name: name, age: age, roll: roll });
        localStorage.setItem("students", JSON.stringify(students)); // set the item
        return { name: name, age: age, roll: roll }; // ?????? why returning
    };
    var createStudentElement = function (_a) {
        var name = _a.name, age = _a.age, roll = _a.roll;
        // create elements
        var studentDiv = document.createElement("div");
        var studentName = document.createElement("h2");
        var studentAge = document.createElement("p");
        var studentRoll = document.createElement("p");
        // fill the content
        studentName.innerText = "Student name: " + name;
        studentAge.innerText = "Student age: " + age;
        studentRoll.innerText = "Student Roll: " + roll;
        // add to the dom
        studentDiv.append(studentName, studentAge, studentRoll);
        studentsContainer.appendChild(studentDiv); // one element
        studentsContainer.style.display = students.length === 0 ? "none" : "flex"; // ????
    };
    studentsContainer.style.display = students.length === 0 ? "none" : "flex"; // ????????????
    students.forEach(createStudentElement); // not calling, because it'll execute at real time ???? referencing
    studentForm.onsubmit = function (e) {
        e.preventDefault(); // prevents default behavior of form submission, when you click the page refreshes
        var newStudent = addStudent(nameInput.value, ageInput.value, rollInput.value);
        createStudentElement(newStudent);
        nameInput.value = "";
        ageInput.value = "";
        rollInput.value = "";
    };
})();
