interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [propName: string]: any;
}

/** Tesr Teacher Class **/
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullTimeEmployee: true,
    yearsOfExperience: 3,
    location: 'Toronto',
    contract: false,
};
console.log(teacher3);


/******* Extend the Teacher Class *******/

interface Directors extends Teacher {
    numberOfReports: number;
}

/** Test Director Class **/
const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 45,
    fullTimeEmployee: true,
    yearsOfExperience: 20,
    location: 'Vancouver',
    numberOfReports: 4,
};
console.log(director1);

// Print Teacher and Director
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

/** Test printTeacher **/
console.log(printTeacher('John', 'Doe'));


/********* Student Class *********/

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

/** Test Student Class **/
const student1 = new StudentClass('John', 'Doe');
console.log(student1.displayName(), student1.workOnHomework());
