function createCol(){
  const result = [];
  for(var i=0; i< 10; i++ ){
    result.push("auto")
  }
  return result;
}

function createTrStyle(){
  const result = [];
  for(var i=0; i< 10; i++ ){
    result.push("50px")
  }
  return result;
}

function createTableData(){
  const result = [];
  for(var i=0; i< 10; i++ ){
    const res = []
    for(var j=0; j< 10; j++){
      res.push({
        colspan: 1,
        rowspan: 1
      })
    }
    result.push(res)
  }
  return result;
}

// 计算鼠标位置是横向还是纵向
function mousePosition(event, $element){
  var boxX = $element.offset().left+ $element.outerWidth();
  var boxY = $element.offset().top + $element.outerHeight();
  // 上下 
  if(event.clientY >= boxY - 5 && event.clientY <= boxY + 5 ){
    return 'vertical'
  }
  // 左右
  if(event.clientX >= boxX - 5 && event.clientX <= boxX + 5 ){
    return 'horizontal'
  }
}

var resize = {
  permitResize: false,
  permitMove: false,
  resizeHorizontal: false,
  resizeVertical: false,
  $line: null,
  _x: null, // 保存按下鼠标一瞬间X坐标
  _y: null, // 保存按下鼠标一瞬间Y坐标
  currentTdIndex: null,
  currentTrIndex: null,
  currentWidth: null,
  nextWidth: null,
  currentHeight: null
}

function mousedown(event, $element){
  const mouseDirection = mousePosition(event, $element)
  resize.permitMove = true;
  if(mouseDirection === 'vertical'){
    resize._y = event.clientY;
    resize.resizeVertical = true;
    resize.currentTrIndex = $element.closest("tr").index()
    resize.currentHeight = $element.outerHeight()
  }else if(mouseDirection === 'horizontal'){
    resize._x = event.clientX;
    resize.resizeHorizontal = true;
    resize.currentTdIndex = $element.index()
    resize.currentWidth = $element.outerWidth()
    resize.nextWidth = $element.next().outerWidth()
  }

  var $line = $("<div class='refer-line'></div>")
  resize.$line = $line;
  if(resize.resizeHorizontal){
    $line
      .addClass("refer-line-ver")
      .css({
        left: event.clientX
      })    
  }else if(resize.resizeVertical){
    $line
      .addClass("refer-line-hor")
      .css({
        top: event.clientY
      })
  }  
  $('body').append($line)
  console.log(resize)
}

function tdResize(event, $element){
  var xDistance = null;
  var yDistance = null;
  // 上下
  if(resize.resizeVertical){
    yDistance = event.clientY - resize._y;
    $element.css({
      'cursor': 'row-resize'
    })
    resize.$line.css({
      top: event.clientY
    })
    if(resize.currentHeight + yDistance < 30){
      return false;
    }
    vm.$set(vm.trStyle, resize.currentTrIndex, (resize.currentHeight + yDistance) + 'px')
  }

  // 左右
  if(resize.resizeHorizontal){
    xDistance = event.clientX - resize._x;
    $element.css({
      'cursor': 'crosshair'
    })
    resize.$line.css({
      left: event.clientX
    })
    if(resize.currentWidth + xDistance < 50 || resize.nextWidth - xDistance < 50){
      return false;
    }
    vm.$set(vm.col, resize.currentTdIndex, (resize.currentWidth + xDistance) + 'px')
    vm.$set(vm.col, resize.currentTdIndex + 1, (resize.nextWidth - xDistance) + 'px')
  }
  
}

const vm = new Vue({
  el: '#app',
  data: {
    message: 'cnmd mht',
    table: createTableData(),
    col: createCol(),
    trStyle: createTrStyle(),
    selectTd: []
  },
  methods: {
    // 水平拆分
    horizontalSplit: function(){
      var postion = this.selectTd[0]
      var trIndex = postion[0]
      var tdIndex = postion[1]
      this.table[trIndex].splice(tdIndex, 0 , {
        colspan: 1,
        rowspan: 1
      })

      this.table.forEach(function(item, index){
        if(index !== trIndex){
          var numer =  0;
          item.slice(0, tdIndex + 1).forEach(function(td){
            console.log(td.colspan)
            var colspan = td.colspan -1;
            numer += colspan
          })
          var colspan = item[tdIndex].colspan ? item[tdIndex].colspan : 1        
          item[tdIndex - numer] = {
            colspan: colspan + 1
          }
        }
      })

      this.col.splice(tdIndex + 1, 0, "auto")
    },
    // 垂直拆分
    verticalSplit: function(){
      var postion = this.selectTd[0]
      var trIndex = postion[0]
      var tdIndex = postion[1]

      this.table[trIndex].forEach(function(item, index){
        var rowspan = item.rowspan
        if(index !==tdIndex){
          item.rowspan = rowspan + 1
        }
      })

      this.table.splice(trIndex + 1, 0 , [[{}]])
    }
  }
})

$(function(){
  $(document).on('mousemove', 'td', function(evnet){
    // 上下
    if(mousePosition(event, $(this)) === 'vertical'){
      if(resize.permitMove){
        return false;
      }      
      resize.permitResize = true;
      $(this).css({
        'cursor': 'row-resize'
      })
      return;
    }
    // 左右
    if(mousePosition(event, $(this)) === 'horizontal'){
      var tdLenght = $(this).parent().children().length;
      // 最后一个td不能拖动
      if($(this).index() + 1 === tdLenght){
        return false
      }
      if(resize.permitMove){
        return false;
      }
      resize.permitResize = true;
      $(this).css({
        'cursor': 'crosshair'
      })
      return;
    }
    // 没按住鼠标时清除鼠标样式
    if(!resize.permitMove){
      resize.permitResize = false;      
      $(this).css({
        'cursor': 'default'
      })
    }    
  })
  .on('mousedown', 'td', function(event){
    if(resize.permitResize){      
      mousedown(event, $(this))
      return
    }    
    var trIndex = $(this).closest('tr').index();
    var tdIndex = $(this).index();
    var ary = []
    $(this).closest('table').find('td').removeClass('td-select')
    $(this).addClass('td-select')
    ary.push([trIndex, tdIndex])
    vm.selectTd = ary
  })
  .on('mousemove', 'td', function(event){
    if(resize.permitMove){
      tdResize(event, $(this))
      return
    }
  })  
  .on('mouseup', function(event){
    $(".refer-line").remove()
    resize = {
      permitResize: false,
      permitMove: false,
      resizeHorizontal: false,
      resizeVertical: false,
      $line: null,
      _x: null, // 保存按下鼠标一瞬间X坐标
      _y: null, // 保存按下鼠标一瞬间Y坐标
      currentTdIndex: null,
      currentTrIndex: null,
      currentWidth: null,
      currentHeight: null
    }
  })
})