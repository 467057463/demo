const tasks = [];

for(var i = 0; i < 5; i++){
  ((i)=>{
    tasks.push(new Promise((resolve)=>{
      setTimeout(() => {
        console.log(i)
        resolve()
      }, i * 1000)
    }))
  })(i)
}

Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log(i)
  }, 1000)
})