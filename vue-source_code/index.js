var vm = new Vue({
  data:{
    name: 'mm',
    age: 18
  }
})

var userInfo = function(){
  return this.name + '-' + this.age
}

var onUserInfoChange = function(userInfo){
  console.log(userInfo)
}

vm.$watch(userInfo, onUserInfoChange)


function defindReactive(obj, key){
  const dep = []
  let i = 1
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter(){
      dep.push(i++)
      return i;
    },
    set: function reactiveSetter(newValue){
      i = 100;
    }
  })
}
