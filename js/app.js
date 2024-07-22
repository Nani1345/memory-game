let imageComputerChoice  
let imagePlayerChoice 
let board


const imagesLab = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg']

const startBtnEl = document.getElementById('startButton')
const gamInstruction = document.querySelector('.gameIntrocution')
const imageEl = document.getElementById('imagesContainer')
const squareEls = document.querySelectorAll('.sqr')


function getRandomImage(){
    let randomIdx = Math.floor(math.random() *  imagesLab.length)
    return imagesLab[randomIdx]
}



function init(){
    board = ['', '', '', '', '', '', '', '']
    render()
}

function render(){
    updateBoard()
}

function updateBoard(){
    board.forEach((cell, idx) => {
        cell = getRandomImage()
        squareEls[idx].src = cell
        squareEls.appendChild()
    });
}

// function updateMessage(){

// }

startBtnEl.addEventListener('click', (event) => {
    gamInstruction.style.visibility = 'hidden'
    imageEl.style.visibility = 'visible'
    init()
})

