

export class employeeModel {
    public Name: string ;
    public employeeCode: string;
    public department: string;
    public salary: string;
    public joiningDate: Date;
    constructor(Name: string, employeeCode: string,
        department: string, salary: string,
         joiningDate: Date) {
        this.Name = Name;
        this.employeeCode = employeeCode;
        this.department = department;
        this.salary = salary;
        this.joiningDate = joiningDate;
      }
 }
