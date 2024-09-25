import immutable from 'immutable';

const { Seq } = immutable;

// Accept an object and filter the students with a grade < 70
// and console.log first and last name with first letter in capital
export default function printBestStudents(students) {
  return Seq(students)
    .filter(student => student.get('score') > 70)
    .forEach(student => console.log(
        `${student.get('firstName')
            .charAt(0).toUpperCase()}${student.get('firstName')
            .slice(1)} ${student.get('lastName').charAt(0)
                .toUpperCase()}${student.get('lastName').slice(1)}`
      ));
}
