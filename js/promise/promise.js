let promiseCount = 1;

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
    fn(this._resolve.bind(this), this._reject.bind(this))
  }

  then(onFulfilled, onRejected){
    console.log('[%s]:then', this.name)
    return new MyPromise((resolve, reject) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve,
        reject
      })
    })
  }

  catch(onError){
    return this.then(null, onError)
  }

  finally(onDone){
    return this.then(onDone, onDone)
  }

  _resolve(value){
    if(value && (typeof value === 'object' || typeof value === 'function')){
      const { then } = value;
      console.log(value.then)
      if(typeof then === 'function'){
        then.call(value, this._resolve.bind(this))
        return;
      }
    }
    console.log('[%s]:_resolve', this.name)
    console.log('[%s]:_resolve', this.name, 'value=', value)
    this.state = FULFILLED;
    this.value = value;
    this.callbacks.forEach(callback => this._handle(callback));
  }


  _handle(callback){
    console.log('[%s]:_handle', this.name, 'state=', this.state)
    if(this.state === PENDING){
      this.callbacks.push(callback);
      console.log('[%s]:_handle', this.name, 'callbacks=', this.callbacks)
      return;
    }

    let cb = this.state === FULFILLED ? callback.onFulfilled : callback.onRejected;

    if(!cb){
      cb = this.state == FULFILLED ? callback.resolve : callback.reject;
      cb(this.value)
      return;
    }

    let ret;

    try{
      ret = cb(this.value);
      cb = this.state == FULFILLED ? callback.resolve : callback.reject;
    }catch(error){
      ret = error
      cb = callback.reject;
    }finally{
      cb(ret);
    }
  }
}

