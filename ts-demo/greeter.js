var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person;
}
// let user = "Jane User";
// let user = [1, 2];
// let user = {
//   firstName: 'm',
//   lastName: 'm'
// }
var user = new Student("Jane", "m", "wen");
document.body.innerHTML = greeter(user);
