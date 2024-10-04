export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradeLookup = newGrades.reduce((acc, grade) => {
    acc[grade.studentId] = grade.grade;
    return acc;
  }, {});

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const { id, ...rest } = student;
      const grade = gradeLookup[id];
      return {
        id,
        ...rest,
        grade: grade !== undefined ? grade : 'N/A',
      };
    });
}
