

export class employeeModel {
    public id: string;
    public name: string ;
    public employeeCode: string;
    public department: string;
    public salary: string;
    public joiningDate: Date;
    public CreatedOn: Date;
    public ModifiedBy: string;
    public CreatedBy: string;
    public ModifiedOn: Date;
    public IsDeleted: boolean;

    constructor(name: string, employeeCode: string,
        department: string, salary: string,
         joiningDate: Date, id: string) {
        this.name = name;
        this.employeeCode = employeeCode;
        this.department = department;
        this.salary = salary;
        this.joiningDate = joiningDate;
        this.id = id
      }
 }
