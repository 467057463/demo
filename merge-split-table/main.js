
const data = {
  a: 1
}

const dep = [];
Object.defineProperty(data, 'a', {
  set(){
    dep.forEach(fn => fn())
  },

  get(){
    dep.push(Target)
  }
})

let Target = null;

function $watch(exp, fn){
  Target = fn;
  data[exp]
}

$watch('a', () => {
  console.log('a 设置了一个值')
})

$watch('a', () => {
  console.log('a 设置了二个值')
})

$watch('a', () => {
  console.log('a 设置了三个值')
})


data.a = 20


