interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface
{
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface 
{
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

/** Test createEmployee function **/
console.log(createEmployee(200));
console.log(createEmployee(1000));


/****** Employee specific functions ******/
export const isDirector = (employee: DirectorInterface | TeacherInterface): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

/** Test executeWork function **/
console.log(executeWork(new Director()));
console.log(executeWork(new Teacher()));


/***** Write String Literal Types *****/
export type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

/** Test teachClass function **/
console.log(teachClass('Math'));
