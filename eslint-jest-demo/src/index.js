export function sum(a, b) {
  return a + b;
}

export function fetchData(cb) {
  setTimeout(() => {
    cb('hellow world')
  }, 4000)
}

export function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("hello world"))
    }, 100)
  })
}

export function forEach(items, cb) {
  for (let i = 0; i < items.length; i += 1) {
    cb(items[i])
  }
}

// export { sum, fetchData };
