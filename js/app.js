let imageComputerChoice  
let imagePlayerChoice 
const imagesShow = ['', '', '', '', '', '', '', '']
const imageslab = [../images/]
const startBtnEl = document.getElementById('startButton')
const gamInstruction = document.querySelector('.gameIntrocution')
const imageEl = document.getElementById('imagesContainer')

startBtnEl.addEventListener('click', (event) => {
    gamInstruction.style.visibility = 'hidden'
    imageEl.style.visibility = 'visible'
})

