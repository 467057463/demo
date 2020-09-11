function foo(){
  console.log(a)
}

function bar(){
  var b = 3;
  foo()
}

var a = 2;
bar()