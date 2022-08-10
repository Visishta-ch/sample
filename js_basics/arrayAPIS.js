class Student {
    constructor(firstName, lastName, dob){
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob); 
      //this.dob =dob
    }
    getBirthYear() {
      return this.dob.getFullYear();
    }
    getFullName(){
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const s1 = new Student('Vish','alex','06-17-1998');
  console.log(s1);
  
  console.log(s1.getBirthYear());
  
  console.log(s1.getFullName());
  
  