

export class EmployeeModel {
    public id : string
    public Name: string ;
    public EmployeeCode: string;
    public Department: string;
    public Salary: string;
    public joiningDate: Date;
    public CreatedOn: Date;
    public ModifiedBy: string;
    public CreatedBy: string;
    public ModifiedOn: Date;
    public IsDeleted: boolean;

    constructor(Name: string, EmployeeCode: string, Department: string, Salary: string, joiningDate: Date) {
        this.Name = Name;
        this.EmployeeCode = EmployeeCode;
        this.Department = Department;
        this.Salary = Salary;
        this.joiningDate = joiningDate;
      }
 }
