class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string){
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return "Hello, " + person;
}

// let user = "Jane User";
// let user = [1, 2];
// let user = {
//   firstName: 'm',
//   lastName: 'm'
// }
let user = new Student("Jane", "m", "wen")

document.body.innerHTML = greeter(user);