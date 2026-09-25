let dash = document.getElementById('dash');
let addst = document.getElementById('add-st');
let stlist = document.getElementById('st-list');

let secDash = document.getElementById('dashboard');
let secAddSt = document.getElementById('addStudent');
let secStList = document.getElementById('student-tbl');

dash.onclick = function () {
    dash.style.backgroundColor = 'rgb(5, 183, 46)';
    addst.style.removeProperty('background-color');
    stlist.style.removeProperty('background-color');

    secDash.classList.remove('hide');
    secAddSt.classList.add('hide');
    secStList.classList.add('hide');
};

addst.onclick = function () {

    addst.style.backgroundColor = 'rgb(5, 183, 46)';
    dash.style.removeProperty('background-color');
    stlist.style.removeProperty('background-color');

    secDash.classList.add('hide');
    secAddSt.classList.remove('hide');
    secStList.classList.add('hide');
};

stlist.onclick = function () {
    stlist.style.backgroundColor = 'rgb(5, 183, 46)';
    addst.style.removeProperty('background-color');
    dash.style.removeProperty('background-color');

    secDash.classList.add('hide');
    secAddSt.classList.add('hide');
    secStList.classList.remove('hide');

    renderStudents();
};

let stname = document.getElementById('name');
let email = document.getElementById('email');
let age = document.getElementById('age');
let dept = document.getElementById('dept');

let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let m3 = document.getElementById('m3');
let m4 = document.getElementById('m4');
let m5 = document.getElementById('m5');

let form = document.getElementById('st-id');
let students = JSON.parse(localStorage.getItem('students')) || [];

function updateDashboard() {

    let totalStudents = document.getElementById('totalst');
    let avgMark = document.getElementById('avg-mark');
    let maxMark = document.getElementById('max-mark');
    let minMark = document.getElementById('low-mark');

    totalStudents.innerText = `${students.length}+`;

    if (students.length === 0) {
        avgMark.innerText = '0';
        maxMark.innerText = '0';
        minMark.innerText = '0';
        return;
    }
    let totalMarks = 0;
    let max = -Infinity;
    let min = Infinity;

    students.forEach(student => {

        let studentTotal =
            Number(student.m1) +
            Number(student.m2) +
            Number(student.m3) +
            Number(student.m4) +
            Number(student.m5);

        let studentAverage = studentTotal / 5;

        totalMarks += studentTotal;

        max = Math.max(max, studentAverage);
        min = Math.min(min, studentAverage);
    });

    let average = totalMarks / (students.length * 5);

    avgMark.innerText = average.toFixed(2);
    maxMark.innerText = max.toFixed(2);
    minMark.innerText = min.toFixed(2);
}

let tabel = document.getElementById('body-elements');

function getGrade(totalMarks) {

    if (totalMarks >= 450) {
        return 'A';
    }
    else if (totalMarks >= 400) {
        return 'B';
    }
    else if (totalMarks >= 350) {
        return 'C';
    }
    else if (totalMarks >= 300) {
        return 'D';
    }
    else {
        return 'F';
    }
}


function renderStudents(list = students) {
    tabel.innerHTML = '';
    list.forEach((student, index) => {
        let totalMarks =Number(student.m1) +Number(student.m2) +Number(student.m3) +Number(student.m4) +Number(student.m5);
        let grade = getGrade(totalMarks);
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
                <td>${student.dept}</td>
                <td>${totalMarks}</td>
                <td>${grade}</td>
                <td>
                    <button 
                        class="del-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


function deleteStudent(id) {
    students = students.filter(student => student.id != id);
    localStorage.setItem('students',JSON.stringify(students));
    renderStudents();
    updateDashboard();
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let flag = true;
    if (stname.value.trim() === '') {
        flag = false;
        stname.nextElementSibling.style.display = 'block';
    } else {
        stname.nextElementSibling.style.display = 'none';
    }

    if (email.value.trim() === '') {
        flag = false;
        email.nextElementSibling.style.display = 'block';
    } else {
        email.nextElementSibling.style.display = 'none';
    }

    if (age.value.trim() === '') {
        flag = false;
        age.nextElementSibling.style.display = 'block';
    } else {
        age.nextElementSibling.style.display = 'none';
    }

    if (m1.value.trim() === '') {
        flag = false;
        m1.nextElementSibling.style.display = 'block';
    } else {
        m1.nextElementSibling.style.display = 'none';
    }

    if (m2.value.trim() === '') {
        flag = false;
        m2.nextElementSibling.style.display = 'block';
    } else {
        m2.nextElementSibling.style.display = 'none';
    }

    if (m3.value.trim() === '') {
        flag = false;
        m3.nextElementSibling.style.display = 'block';
    } else {
        m3.nextElementSibling.style.display = 'none';
    }

    if (m4.value.trim() === '') {
        flag = false;
        m4.nextElementSibling.style.display = 'block';
    } else {
        m4.nextElementSibling.style.display = 'none';
    }

    if (m5.value.trim() === '') {
        flag = false;
        m5.nextElementSibling.style.display = 'block';
    } else {
        m5.nextElementSibling.style.display = 'none';
    }

    if (flag) {
        let student = {
            id: Date.now(),
            name: stname.value.trim(),
            email: email.value.trim(),
            age: age.value.trim(),
            dept: dept.value,
            m1: m1.value.trim(),
            m2: m2.value.trim(),
            m3: m3.value.trim(),
            m4: m4.value.trim(),
            m5: m5.value.trim()
        };

        students.push(student);

        localStorage.setItem('students',JSON.stringify(students));
        form.reset();
        renderStudents();
        updateDashboard();

        stlist.click();
    }

});

let search = document.getElementById('search');

search.addEventListener('input', function () {
    let searchValue = search.value.toLowerCase().trim();
    let filteredStudents = students.filter(student => {
        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.email.toLowerCase().includes(searchValue) ||
            student.dept.toLowerCase().includes(searchValue)
        );
    });
    renderStudents(filteredStudents);
});

renderStudents();
updateDashboard();
