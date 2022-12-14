const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return Intern.name
    }

    getSchool(){
        return this.school
    }
}

module.exports = Intern
