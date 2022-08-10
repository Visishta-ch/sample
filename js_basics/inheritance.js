class User{
   
    static count =0;
    constructor(username,email,password,membershipActivateDate){
        this.username = username;
        this.email = email;
        this.password = password;
        this.membershipActivateDate = new Date(membershipActivateDate);
        
        User.count++;
        
    }
    RegisterdUser(){
        console.log("\n RegisterdUsers: "+ User.count);
    }

    register(){        

        var newDate= new Date();
        var days = 31;
        newDate.setDate(newDate.getDate() + days);
        let dueDate = newDate.toISOString();
        console.log('\n'+this.username + ' you are registered successfully \n your free trail ends on: ' + dueDate);

    }
}


class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.memberPackage = memberPackage;
    }
    
    getPackage(){
        console.log('\n'+ this.username + " is subscribed to" + this.memberPackage);
        
    }
    renewMembership(memberPackage){
        if(memberPackage == 'standard'){
            var curDate = new Date();
            var days = 30;
            curDate.setDate(curDate.getDate() + days);
            let activationDate = curDate.toISOString();
            
            console.log('\nyour next activation is on: '+ activationDate);
        }
        else if(memberPackage == 'yearly'){
            var curDate = new Date();
            var days = 365;
            curDate.setDate(curDate.getDate() + days);
            console.log('\nyour next activation is on: '+ curDate);
        }
    
    }
     
}
let user1 = new User('alex','alex@gmai.com','12345',0);
user1.register();
let user3 = new User('john','john@gmai.com','12345',0);
user3.register();

let user2 = new Member('Mike','mike@gmai.com','18u735','Standard');
user2.getPackage();
let user4 = new Member('jack','jack4@gmai.com','18u735','Standard');
user4.getPackage();
let user5 = new Member('Leo','leo12@gmai.com','kinh23','Yearly');
user5.getPackage();

user1.RegisterdUser();
user2.renewMembership('standard');
user4.renewMembership('yearly');


