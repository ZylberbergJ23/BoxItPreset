var lineClickListener = function () {
  $('.line').on('click', function(event){
      $(event.target).css({"background-color": "#662b22"})
      // let boxit = this
      let coordinates = getCoordinates.call(event.target)
      let highlightedLine = this.lines[coordinates[0]][coordinates[1]] = 1
      let columnsToCheck = getLeftColumnsForLines(coordinates)
      isBox.bind(this)(columnsToCheck)
    }.bind(this))
}

var columnClickListener = function() {
  $('.column').on('click', function(event) {
    $(event.target).css({"background-color": "#662b22"})
    let coordinates = getCoordinates.call(event.target)
    let highlightedcolumns = this.columns[coordinates[0]][coordinates[1]] = 1
    let columnsToCheck = getLeftColumnForColumn(coordinates)
    isBox.bind(this)(columnsToCheck)
  }.bind(this))
  $('.lastcolumn').on('click', function() {
    $(event.target).css({"background-color": "#662b22"})
    let coordinates = getCoordinates.call(event.target)
    let highlightedcolumns = this.columns[coordinates[0]][coordinates[1]] = 1
    let columnsToCheck = getLeftColumnForColumn(coordinates)
    isBox.bind(this)(columnsToCheck)
  }.bind(this))
}

function getCoordinates(){
  let x = parseInt(this.id.split("-")[0])
  let y = parseInt(this.id.split("-")[1])
  let coordinates = [x,y]
  return coordinates
}

function getLeftColumnsForLines(coordinates) {
  let x = coordinates[0]
  let y = coordinates[1]
  if ((y-1) >= 0){
    return [[x, y], [x, y-1]]
  }else{
    return [[x, y]]
  }
}

function getLeftColumnForColumn(coordinates){
  let x = coordinates[0]
  let y = coordinates[1]
  if ((x-1) >= 0){
    return [[x-1, y],[x,y]]
  }
  else{
    return [[x,y]]
  }
}

function isBox(columnsToCheck){
  let column1 = columnsToCheck[0] //checking the box below
  let column2 = columnsToCheck[1] //checking the box above
  console.log(column2)
  let x = column1[0]
  let y = column1[1]
  if (this.columns[x][y] === 1 && this.lines[x][y] === 1 && this.columns[x+1][y] === 1 && this.lines[x][y+1] === 1){
    alert('BOX!')
  }
  if (column2){
    x = column2[0]
    y = column2[1]
    if (this.columns[x][y] === 1 && this.lines[x][y] === 1 && this.columns[x+1][y] === 1 && this.lines[x][y+1] === 1){
      alert('BOX!')
    }
  }
}
