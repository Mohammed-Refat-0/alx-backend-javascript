/**
 * Update the grade of a specific student by the city
 * @param {Array} getListStudents - Array of students
 * @param {String} city - City of the students
 * @param {Array} newGrades - Array of grades
 * @return {Array} - Array of students with the updated grade
 */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.city === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: grades ? grades.grade : 'N/A',
      };
    });
}
