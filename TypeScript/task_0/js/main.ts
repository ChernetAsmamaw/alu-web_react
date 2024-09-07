// Declaration of the interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

// Create student instances
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 21,
    location: 'California'
};

// Create an array of students
const studentsList: Array<Student> = [student1, student2];

// Create a table with each student information per line (<tr>)
const tableHtml: HTMLTableElement = document.createElement('table');
const theadHtml: HTMLTableSectionElement = document.createElement('thead');
const tbodyHtml: HTMLTableSectionElement = document.createElement('tbody');

// Header of the table
const rowHeader: HTMLTableRowElement = theadHtml.insertRow();
rowHeader.insertCell(0).textContent = 'First Name';
rowHeader.insertCell(1).textContent = 'Last Name';
rowHeader.insertCell(2).textContent = 'age';
rowHeader.insertCell(3).textContent = 'Location';

// Body of the table
tableHtml.appendChild(theadHtml);
studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tbodyHtml.insertRow();

    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.lastName;
    row.insertCell(2).textContent = student.age.toString();
    row.insertCell(3).textContent = student.location;
});

tableHtml.appendChild(tbodyHtml);
document.body.appendChild(tableHtml);
