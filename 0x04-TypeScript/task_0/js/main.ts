interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
};

const student2: Student = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    location: 'San Francisco'
};

const studentsList = [student1, student2];

const table = document.createElement("table");
const tr = document.createElement("tr");
const tr1 = document.createElement("tr");
const td = document.createElement("td");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");

td.innerHTML = '';
td1.innerHTML = '';

tr.appendChild(td);
tr.appendChild(td1);

table.appendChild(tr);

td2.innerHTML = '';
td3.innerHTML = '';

tr1.appendChild(td2);
tr1.appendChild(td3);

table.appendChild(tr1);
