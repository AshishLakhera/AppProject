import { Guid } from 'guid-typescript';


export class employeeModel {
    public name: string ;
    public employeeCode: string;
    public department: string;
    public salary: string;
    public joiningDate: Date;
    public id: Guid;
    constructor(name: string, employeeCode: string,
        department: string, salary: string,
         joiningDate: Date) {
        this.name = name;
        this.employeeCode = employeeCode;
        this.department = department;
        this.salary = salary;
        this.joiningDate = joiningDate;
      }
 }

// type GUID = string & { isGuid: true};
// function guid(guid: string): GUID {
//     return  guid as GUID; // maybe add validation that the parameter is an actual guid ?
// }

// export class employeeModel {
//     public Name: string ;
//     public employeeCode: string;
//     public department: string;
//     public salary: string;
//     public joiningDate: Date;
//     public id: GUID;
//     constructor(Name: string, employeeCode: string,
//         department: string, salary: string,
//          joiningDate: Date, id: GUID) {
//         this.Name = Name;
//         this.employeeCode = employeeCode;
//         this.department = department;
//         this.salary = salary;
//         this.joiningDate = joiningDate;
//         this.id = id;
//       }
//  }
