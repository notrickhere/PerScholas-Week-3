let playerRed = 'R'
let playerYellow = 'Y'
let currentPlayer = playerRed
let board
let rows = 6
let columns = 7
let currentColumns

window.onload = function (){
    setGame();
}

function setGame() {
    board = []
    currentColumns = [5, 5, 5, 5, 5, 5, 5]
    for (let r = 0; r < rows; r++){
        let row = []
        for (let c = 0; c < columns; c++){
            row.push(' ')

            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString()
            tile.classList.add('tile')
            tile.addEventListener('click', setPiece) 
            document.getElementById('board').append(tile)
        }
        board.push(row)
    }
}

function setPiece() {
    let coords = this.id.split("-")
    let r = parseInt(coords[0])
    let c = parseInt(coords[1])

    r = currentColumns[c]

    board[r][c] = currentPlayer
    let tile = document.getElementById(r.toString() + '-' + c.toString())
    if(currentPlayer == playerRed){
        tile.classList.add('red-piece')
        currentPlayer = playerYellow
    }else{
        tile.classList.add('yellow-piece')
        currentPlayer = playerRed
    }

    r -= 1
    currentColumns[c] = r

}