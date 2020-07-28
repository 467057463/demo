
function Person(){
}

Person.prototype.name = 'mm';
Person.prototype.sayName = function(){
  console.log(this.name)
}
const p1 = new Person()