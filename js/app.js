let imageComputerChoice  
let imagePlayerChoice 
let boards = []


const imagesLab = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg', '../images/6.jpg', '../images/7.jpg', '../images/8.jpg', '../images/9.jpg', '../images/10.jpg', '../images/11.jpg', '../images/12.jpg', '../images/13.jpg', '../images/14.jpg', '../images/15.jpg']

const startBtnEl = document.getElementById('startButton')
const gamInstruction = document.querySelector('.gameIntrocution')
const imageEl = document.getElementById('imagesContainer')
const boxEls = document.querySelectorAll('.imagebox')


function updateImageBox(){
   
    boxEls.forEach(box => box.innerHTML = '')
    // get 8 random images
    for(let i = 0; i< 8; i++){
        let randomIdx = Math.floor(Math.random() *  imagesLab.length)
        let randomImage = imagesLab.splice(randomIdx, 1)[0]
        boards.push(randomImage)
    }

    // append new images to the boxes
    boards.forEach((board,index) => {
        const img = document.createElement('img')
        img.src = board
        boxEls[index].appendChild(img)
    })
}



startBtnEl.addEventListener('click', (event) => {
    gamInstruction.style.visibility = 'hidden'
    imageEl.style.visibility = 'visible'
    updateImageBox()
})