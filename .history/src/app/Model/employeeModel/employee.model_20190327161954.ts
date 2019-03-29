

export class employeeModel {
    public id: string;
    public name: string ;
    public employeeCode: string;
    public department: string;
    public salary: string;
    public joiningDate: Date;
    constructor(name: string, employeeCode: string,
        department: string, salary: string,
         joiningDate: Date, id: string) {
        this.name = name;
        this.employeeCode = employeeCode;
        this.department = department;
        this.salary = salary;
        this.joiningDate = joiningDate;
        this.id = id;
      }
 }
