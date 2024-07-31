/**
 * getStudentIdsSum: sum of all student ids using reduce
 * @param {Array<Object>} studentsLists
 * @return {number}
 */
export default function getStudentIdsSum(studentsLists) {
  return studentsLists.reduce((result, student) => result + student.id, 0);
}
