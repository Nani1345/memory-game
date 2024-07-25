let imageComputerChoice  
let imagePlayerChoice 
let boards = []
let timeleft = 7
let score = 0
let j = 0
let boxIdx


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
    '../images/61.jpg', '../images/62.jpg', '../images/63.jpg', '../images/64.jpg', '../images/65.jpg',
    '../images/66.jpg', '../images/67.jpg', '../images/68.jpg', '../images/69.jpg', '../images/70.jpg',
    '../images/71.jpg', '../images/72.jpg', '../images/73.jpg', '../images/74.jpg', '../images/75.jpg',
    '../images/76.jpg', '../images/77.jpg', '../images/78.jpg', '../images/79.jpg', '../images/80.jpg',
    '../images/81.jpg', '../images/82.jpg', '../images/83.jpg', '../images/84.jpg', '../images/85.jpg',]

const startBtnEl = document.getElementById('startButton')
const gameInstruction = document.querySelector('#gameInstrocution')
const imageContainerEl = document.getElementById('imagesContainer')
const boxEls = document.querySelectorAll('.imagebox')
const countdownEl = document.getElementById('countdown')
const randomImgEl = document.getElementById('randomImg')
const messageEl =document.getElementById('message')

startBtnEl.addEventListener('click', (event) => {
    gameInstruction.style.display = 'none'
    imageContainerEl.style.display = ''
    countdownEl.style.display = ''

    init()
})

function init(){
    // countdownEl.style.display = ''
    resetStates()
    refreshImageBox()
}

function resetStates() {
    imageContainerEl.style.display = ''
    timeleft = 7
    boards = []
    messageEl.textContent = 'Memorize the position of the images'
    boxEls.forEach(box => {
        box.innerHTML = ''
        box.removeEventListener('click', handleClick)
    })
}

function refreshImageBox(){
    for(let i = 0; i < 8; i++){
        let randomIdx = Math.floor(Math.random() * imagesLab.length)
        let randomImage = imagesLab.splice(randomIdx, 1)[0]
        boards.push(randomImage)
    }

    boards.forEach((board,index) => {
        const img = document.createElement('img')
        // //Inside the loop: document.createElement('img') creates a new img element for each iteration. Each img element has its own src and can be appended to a different boxEls element. Outside the loop: document.createElement('img') creates only one img element. You then set the src attribute and append the same img element to multiple boxEls, which will overwrite the src attribute in each iteration, resulting in only the last image being shown in all boxes.

        img.src = board
        boxEls[index].appendChild(img)
        boxEls[index].addEventListener('click', handleClick)
    })
    displayCountdown()  
}

function displayCountdown(){
   let timerInterval = setInterval(tick, 1000)
   function tick(){
    timeleft -= 1
    countdownEl.textContent = timeleft
    if(timeleft === 0){
        clearInterval(timerInterval)
        boxEls.forEach(box => box.innerHTML = '')
        randomImgShow()
        countdownEl.innerHTML = ''
    }
    } 
}

function randomImgShow(){
    boxIdx = Math.floor(Math.random() * 8)
    // randomImgEl.src = boars[boxIdx]   boxEls[index].src = board is invalid because the elements in the boxEls array are DOM elements (such as div), and these elements do not have a src attribute. The src attribute is specific to img elements, used to specify the image source. The correct approach is to create an img element, set its src attribute, and then append this img element to one of the elements in the boxEls array. 
    imageComputerChoice = boards[boxIdx] 
    const img = document.createElement('img')
    img.src = imageComputerChoice
    randomImgEl.appendChild(img)

    messageEl.textContent = 'Click the location of this image'

}

function handleClick(evt){
    randomImgEl.innerHTML = ''
    const clickedBoxIdx = parseInt(evt.target.id)
    console.log("Expected: ", imageComputerChoice)
    console.log("Selected: ", boards[clickedBoxIdx])
    if(boards[clickedBoxIdx] === imageComputerChoice){
        score += 1 
    }
    
    console.log('##### Current score:', score);

    randomImgReturn()



    setTimeout(() => {
        j++
        if (j < 10) {
            init()
        } else {
            // exit
            imageContainerEl.style.display = 'none'
            console.log('@@@@@ Final score:', score);
            messageEl.textContent = `You scored ${score} out of 10`   
        }    
    }, 1200);
}


function randomImgReturn(){
        const img = document.createElement('img')
        img.src = imageComputerChoice
        boxEls[boxIdx].appendChild(img)       
}