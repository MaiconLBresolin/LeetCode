function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  let employees = hours.filter((element) => element >= target).length;
  return employees;
}
