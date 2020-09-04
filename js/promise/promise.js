let promiseCount = 1;

function mockAjax(url, s, callback){
  setTimeout(()=> {
    callback(`${url} 异步花费${s}秒`)
  }, 1000 * s)
}


const isFunction = value => Object.prototype.toString.call(value) === '[object Function]';
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise{
  state = PENDING;
  value = null;
  callbacks = [];

  constructor(fn){
    if(!isFunction(fn)){
      throw new TypeError(`Promise resolver ${fn} is not a function`)
    }
    this.name = `Promise-${promiseCount++}`;
    console.log('[%s]:constructor', this.name)
    fn(this._resolve.bind(this))
  }

  _resolve(value){
    console.log('[%s]:_resolve', this.name)
    console.log('[%s]:_resolve', this.name, 'value=', value)
    this.state = FULFILLED;
    this.value = value;
    this.callbacks.forEach(callback => this._handle(callback));
  }

  then(onFulfilled){
    console.log('[%s]:then', this.name)
    return new MyPromise(resolve => {
      this._handle({
        onFulfilled: onFulfilled || null,
        resolve
      })
    })
  }

  _handle(callback){
    console.log('[%s]:_handle', this.name, 'state=', this.state)
    if(this.state === PENDING){
      this.callbacks.push(callback);
      console.log('[%s]:_handle', this.name, 'callbacks=', this.callbacks)
      return;
    }

    if(!callback.onFulfilled){
      callback.resolve(this.value);
      return;
    }

    let ret = callback.onFulfilled(this.value);
    callback.resolve(ret);
  }
}

p = new MyPromise((resolve)=>{
  mockAjax('www.baidu.com', 5, function(value){
    resolve(value)
  })
  // resolve(123)
})
// .then((res) => {
//   console.log('then1', res)
//   return res + 1;
// })
// .then((res) => {
//   console.log('then1', res)
//   return res + 1;
// })
.then()

