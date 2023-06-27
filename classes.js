class Employee {
    constructor(id, name, role) {
        this.number = id;
        this.name = name;
        this.role = role;
    }
    setRole(role) {
        this.role = role
    }
}

const employee = new Employee(123, "Tom")

console.log(employee)

employee.setRole("accounting")

console.log(employee)