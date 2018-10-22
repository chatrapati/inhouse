

export interface Iemployee { 
    empId ?: string,
     empName ?: string,
     surname ?: string,
     gender ?: string,
     dob ?: string,
     birthDate ?: string,
     martialStatus ?: string,
     qualification ?: string,
     presentAddress ?: string,
     permanentAddress ?: string,
     contact ?: string,
     econtact ?: string,
     mail ?: string,
     dojGST ?: string,
     docGST ?: string,
     department ?: string,
     emailOfficial ?: string,
     ctc ?: string,
     reportingManager ?: string,
     designation ?: string,
     prevEmployement ?: string
 } 
 

 export class Employee  {
   employee:Iemployee={};
   
 
   setEmployee(obj){
     this.employee.empId=obj.empId;
     this.employee.empName=obj.empName;
     this.employee.surname=obj.surname;
     this.employee.gender=obj.gender;
     this.employee.dob=obj.dob;
     this.employee.birthDate=obj.birthDate;
     this.employee.martialStatus=obj.martialStatus;
     this.employee.qualification=obj.qualification;
     this.employee.presentAddress=obj.presentAddress;
     this.employee.permanentAddress=obj.permanentAddress;
     this.employee.contact=obj.contact;
     this.employee.econtact=obj.econtact;
     this.employee.mail=obj.mail;
     this.employee.dojGST=obj.dojGST;
     this.employee.docGST=obj.docGST;
     this.employee.department=obj.department;
     this.employee.emailOfficial=obj.emailOfficial;
     this.employee.ctc=obj.ctc;
     this.employee.reportingManager=obj.reportingManager;
     this.employee.designation=obj.designation;
     this.employee.prevEmployement=obj.prevEmployement;
   }
 
   getEmployee(){
     return this.employee
   }
 }
 
 