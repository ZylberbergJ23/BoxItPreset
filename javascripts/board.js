class Board{
  constructor(){
    this.dots = [["■", "■", "■", "■"], ["■", "■", "■", "■"], ["■", "■", "■", "■"], ["■", "■", "■", "■"]]
  }

  render(callback){
    let $board = $('#board')
    this.dots.forEach((column, y) => {
      $board.append(`<div class="hrow" id='${y}'>`)
      let $row = $('.hrow:last-child')
      column.forEach((dot, x) =>{
        if(x === 3){
          $row.append(`<div class="dot" style="margin: 0%; height: 105%;"> </div>`)
        }else{
          $row.append(`<div class="dot" style="margin: 0%; height: 105%;">  </div> <div class="line" id="${x}-${y}">` + '</div>')
        }
      })
      $board.append(`</div>`)
      $board.append(`<div class="vrow" id='${y}' style="margin: 0px;">`)

      if(y != 3){
        let $vrow = $('.vrow:last-child')
        $vrow.append(`<div class="column" id="${0}-${y}">  </div> <div class="box" id="${0}${y}"> </div> <div class="column" id="${1}-${y}">  </div> <div class="box" id="${1}${y}"> </div> <div class="column" id="${2}-${y}">  </div> <div class="box" id="${2}${y}"> </div> <div class="lastcolumn" id="${3}-${y}">  </div>`)
      }
    })
    callback()
  }
}
