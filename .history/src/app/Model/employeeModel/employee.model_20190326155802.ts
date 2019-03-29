

export class employeeModel {
    public id: string;
    public name: string ;
    public EmployeeCode: string;
    public Department: string;
    public Salary: string;
    public joiningDate: Date;
    public CreatedOn: Date;
    public ModifiedBy: string;
    public CreatedBy: string;
    public ModifiedOn: Date;
    public IsDeleted: boolean;

    constructor(name: string, EmployeeCode: string,
        Department: string, Salary: string,
         joiningDate: Date, id: string, CreatedOn: Date, Createdby: string, ModifiedOn: Date,
         ModifiedBy: string, IsDeleted: boolean) {
        this.name = name;
        this.EmployeeCode = EmployeeCode;
        this.Department = Department;
        this.Salary = Salary;
        this.joiningDate = joiningDate;
        this.id = id;
            this.CreatedBy = Createdby;
            this.CreatedOn = CreatedOn;
            this.ModifiedBy = ModifiedBy;
            this.ModifiedOn = ModifiedOn;
            this.IsDeleted = IsDeleted;
      }
 }
