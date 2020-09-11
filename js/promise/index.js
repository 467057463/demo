
function mockAjax(url, s, callback){
  let status = Math.floor(Math.random() * 1000) % 2 === 0;
  setTimeout(()=> {
    callback(`${url} 异步花费${s}秒`, true)
  }, 1000 * s)
}


p = new MyPromise((resolve, reject)=>{
  mockAjax('www.baidu.com', 1, function(value, status){
    if(status){
      resolve(value)
    }else{
      reject(value + ' error')
    }
  })
  // resolve(123)
})
.then((res) => {
  a + b
  // throw Error("wtf");
  console.log('then1', res)
  return res + 1;
})
.catch(err => {
  console.log(err)
})
.finally(() => {
  console.log("finally")
})
// .then((res) => {
//   console.log('then1', res)
//   return res + 1;
// })
// .then()

