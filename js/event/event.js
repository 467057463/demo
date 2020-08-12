var newEvent = new CustomEvent('build', {
  bubbles:true,
  cancelable:true,
  composed:true,
  detail: {
    foo: 'bar'
  }
})

newEvent.name = '新的事件';

document.addEventListener('build', function(event){
  alert("sssss")
  console.log(event)
}, false)

document.dispatchEvent(newEvent)