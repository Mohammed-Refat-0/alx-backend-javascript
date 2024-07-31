/**
 * getStudentIdsSum: sum all student ids in array of objects using reduce
 * @param {Array<Object>} studentsLists
 * @return {number}
 */
export default function getStudentIdsSum(studentsLists) {
  return studentsLists.reduce((result, student) => result + student.id, 0);
}
