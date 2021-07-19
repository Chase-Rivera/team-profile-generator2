const Employee = require("./employee");

class Manager extends Employee {
    constructor({name, id, email, officenumber}) {
        super(name, id, email);

        this.officeNumber = this.officeNumber;
    };

    getofficenumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;