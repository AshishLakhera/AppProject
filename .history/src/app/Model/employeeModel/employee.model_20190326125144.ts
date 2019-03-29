

export class EmployeeModel {
    public Name: string ;
    public EmployeeCode: string;
    public Department: string;
    public Salary: string;
    public joiningDate: Date;
    constructor(Name: string, EmployeeCode: string, Department: string, Salary: string, joiningDate: Date) {
        this.Name = Name;
        this.EmployeeCode = EmployeeCode;
        this.Department = Department;
        this.Salary = Salary;
        this.joiningDate=joiningDate;
      }
 }
