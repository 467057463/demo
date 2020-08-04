

function inheritPrototype(subClass, superClass){
  var prototype = Object.create(superClass.prototype);
  prototype.constructor = subClass;
  subClass.prototype = prototype;
}

function Person(name){
  this.name = name
  this.firends = ['red']
}

Person.prototype.sayName = function(){
  console.log(this.name)
}

function Boy(name, age){
  Person.call(this, name)
  this.age = age
}

// Boy.prototype = Object.create(Person.prototype)
// Boy.prototype.constructor = Boy;
inheritPrototype(Boy, Person)

