export default function createIteratorObject(report) {
  const result = [];
  const allEmployees = Object.values(report.allEmployees);
  allEmployees.forEach((setOfEmployees) => {
    setOfEmployees.forEach((employee) => {
      result.push(employee);
    });
  });
  return result;
}
