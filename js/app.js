let imageComputerChoice  
let imagePlayerChoice 
let boards = []
let timeleft = 10
let score = 0


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
const countdownEl = document.getElementById('countdown')
const scoreEl = document.getElementById('score')
const randomImgEl = document.getElementById('randomImg')

const img = document.createElement('img')

function render(){
    boards = []
    updateImageBox()
}


// this function there is no return, why can execute auto??????
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
        //Inside the loop: document.createElement('img') creates a new img element 
        //for each iteration. Each img element has its own src and can be appended 
        //to a different boxEls element. 
        //Outside the loop: document.createElement('img') creates only one img element. 
        //You then set the src attribute and append the same img element to multiple boxEls, 
        //which will overwrite the src attribute in each iteration, resulting in only the last image 
        //being shown in all boxes.
        
        img.src = board
        boxEls[index].appendChild(img)
    })

    // images disappear 10s later
    countDown()
    
}



// function finalScore(){

// }

function countDown(){
   let timerInterval = setInterval(tick, 1000)
    function tick(){
        timeleft -= 1
        countdownEl.textContent = timeleft
        if(timeleft === 0){
            clearInterval(timerInterval)
            boxEls.forEach(box => box.innerHTML = '')
            randomImgShow()
        }
    } 
}

function randomImgShow(){
    let boxIdx = Math.floor(Math.random() * 8)
    // randomImgEl.src = boars[boxIdx]   boxEls[index].src = board is invalid because the elements in the boxEls array are DOM elements (such as div), and these elements do not have a src attribute. The src attribute is specific to img elements, used to specify the image source. The correct approach is to create an img element, set its src attribute, and then append this img element to one of the elements in the boxEls array.
    img.src = boards[boxIdx]
    randomImgEl.appendChild(img)
}


startBtnEl.addEventListener('click', (event) => {
    gamInstruction.style.visibility = 'hidden'
    imageEl.style.visibility = 'visible'
    updateImageBox()
})