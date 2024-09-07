export const ccp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();

let cTeacher = {
    firstName: 'Maria',
    lastName: 'Santos',
    experienceTeachingC: 10,
};

console.log("C++");
ccp.setTeacher = cTeacher;
console.log(ccp.getRequirements());
console.log(ccp.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
