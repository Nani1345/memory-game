let imageComputerChoice  
let imagePlayerChoice 
let boards = []


const imagesLab = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg', 
    '../images/6.jpg', '../images/7.jpg', '../images/8.jpg', '../images/9.jpg', '../images/10.jpg', 
    '../images/11.jpg', '../images/12.jpg', '../images/13.jpg', '../images/14.jpg', '../images/15.jpg',
    '../images/16.jpg', '../images/17.jpg', '../images/18.jpg', '../images/19.jpg', '../images/20.jpg',
    '../images/21.jpg', '../images/22.jpg', '../images/23.jpg', '../images/24.jpg', '../images/25.jpg',
    '../images/26.jpg', '../images/27.jpg', '../images/28.jpg', '../images/29.jpg', '../images/30.jpg',
    '../images/31.jpg', '../images/32.jpg', '../images/33.jpg', '../images/34.jpg', '../images/35.jpg',
    '../images/36.jpg', '../images/37.jpg', '../images/38.jpg', '../images/39.jpg', '../images/40.jpg',
    '../images/41.jpg', '../images/42.jpg', '../images/43.jpg', '../images/44.jpg', '../images/45.jpg',
    '../images/46.jpg', '../images/47.jpg', '../images/48.jpg', '../images/49.jpg', '../images/50.jpg',
    '../images/51.jpg', '../images/52.jpg', '../images/53.jpg', '../images/54.jpg', '../images/55.jpg',
    '../images/56.jpg', '../images/57.jpg', '../images/58.jpg', '../images/59.jpg', '../images/60.jpg',
    '../images/61.jpg', '../images/62.jpg', '../images/63.jpg']

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