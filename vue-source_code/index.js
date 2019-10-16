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