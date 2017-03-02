class Boxit{
  constructor(){
    this.board = new Board()
    this.lines = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]
    this.columns = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
    this.playCount = 0
    this.player1 = new Player("Player 1", "white")
    this.player2 = new Player("Player 2", "black")
  }

  render(){
    this.board.render(this.addEventHandler.bind(this))
  }

  reset(){
    this.lines = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]
    this.columns = [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]
    this.player1.score = 0
    this.player2.score = 0
    this.board.render(this.addEventHandler.bind(this))
  }

  addEventHandler() {
    lineClickListener.bind(this)()
    columnClickListener.bind(this)()
    $('.scoreboard').append(`${this.player1.name}: ${this.player1.score} || ${this.player2.name}: ${this.player2.score}`)
  }

  playerTurn(){
    if (this.playCount % 2 === 0){
      return this.player1
    }
    else {
      return this.player2
    }
  }

  otherPlayer(){
    if (this.playCount % 2 === 0){
      return this.player2
    }
    else {
      return this.player1
    }
  }

  winner(){
    if(this.player1.score > this.player2.score){
      return this.player1
    }else{
      return this.player2
    }
  }

  linesIsOver() {
    let over = true
    if (this.columnsIsOver()){
      this.lines.forEach(function(element){
        if(element.includes(0)){
          over = false
        }
      })
      return over
    }
  }

  columnsIsOver() {
    let over = true
    this.columns.forEach(function(element){
        if(element.includes(0)){
          over = false
        }
      })
    return over
  }
}
