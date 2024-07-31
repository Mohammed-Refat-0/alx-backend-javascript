export default function getStudentsByLocation(studentsLists, city) {
  return studentsLists.filter((student) => student.location === city);
}
