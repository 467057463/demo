const person = {
  name: 'mm'
}

function sayName(){
  console.log(this.name)
}

console.log(sayName.bind(person).name)