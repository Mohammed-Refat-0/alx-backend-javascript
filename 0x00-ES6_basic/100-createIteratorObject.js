export default function createIteratorObject(report) {
  const myarray = [];
  for (const elem of Object.values(report.allEmployees)) {
    myarray.push(...elem);
  }

  return myarray;
}
