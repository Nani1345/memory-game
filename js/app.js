let imageComputerChoice  
let imagePlayerChoice 
let boards = []
let timeleft = 2
let score = 0
let j = 0
let boxIdx



const imagesLab = [{src:'./images/1.jpg', alt:'Carrots'}, {src:'./images/2.jpg', alt:'Dogs'}, {src:'./images/3.jpg', alt:'Fish'},
    {src:'./images/4.jpg', alt:'Fish'}, {src:'./images/5.jpg', alt:'fish'}, {src:'./images/6.jpg', alt:'fishes'},
    {src:'./images/7.jpg', alt:'fish'}, {src:'./images/8.jpg', alt:'Ginger'}, {src:'./images/9.jpg', alt:'Green beans'},
    {src:'./images/10.jpg', alt:'A white horse'}, {src:'./images/11.jpg', alt:'Color pepper'}, {src:'./images/12.jpg', alt:'Sika deer'},
    {src:'./images/13.jpg', alt:'Tiger'}, {src:'./images/14.jpg', alt:'Tomato'}, {src:'./images/15.jpg', alt:'Turtle'},
    {src:'./images/16.jpg', alt:'Bird'}, {src:'./images/17.jpg', alt:'Cat'}, {src:'./images/18.jpg', alt:'Dog'},
    {src:'./images/19.jpg', alt:'Birds'}, {src:'./images/20.jpg', alt:'Penguin'}, {src:'./images/21.jpg', alt:'Monkey'},
    {src:'./images/22.jpg', alt:'Siberian ibex'}, {src:'./images/23.jpg', alt:'Goldfishes'}, {src:'./images/24.jpg', alt:'Cats'},
    {src:'./images/25.jpg', alt:'Rhinoceros'}, {src:'./images/26.jpg', alt:'Leopard'}, {src:'./images/27.jpg', alt:'Puppies'},
    {src:'../images/28.jpg', alt:'Dogs'}, {src:'./images/29.jpg', alt:'Alpaca'}, {src:'./images/30.jpg', alt:'Goat'}, 
    {src:'./images/31.jpg', alt:'Yak'}, {src:'./images/32.jpg', alt:'Birds'}, {src:'./images/33.jpg', alt:'Cat'},
    {src:'./images/34.jpg', alt:'Rabbit'}, {src:'./images/35.jpg', alt:'Donkey'}, {src:'./images/36.jpg', alt:'Cow'},
    {src:'./images/37.jpg', alt:'Jellyfish'}, {src:'./images/38.jpg', alt:'Birds'}, {src:'./images/39.jpg', alt:'Peacock'},
    {src:'./images/40.jpg', alt:'Cow'}, {src:'./images/41.jpg', alt:'Sheep'}, {src:'./images/42.jpg', alt:'Dogs'},
    {src:'./images/43.jpg', alt:'Bird'}, {src:'./images/44.jpg', alt:'Deer'}, {src:'./images/45.jpg', alt:'Leopard'},
    {src:'./images/46.jpg', alt:'Birds'}, {src:'./images/47.jpg', alt:'Penguins'}, {src:'./images/48.jpg', alt:'Hedgehog'},
    {src:'./images/49.jpg', alt:'Gogs'}, {src:'./images/50.jpg', alt:'Carrots'}, {src:'./images/51.jpg', alt:'Dolphin'},
    {src:'./images/52.jpg', alt:'Turtle'}, {src:'./images/53.jpg', alt:'Crab'}, {src:'./images/54.jpg', alt:'Capybara'},
    {src:'./images/55.jpg', alt:'Cows'}, {src:'./images/56.jpg', alt:'Horses'}, {src:'./images/57.jpg', alt:'Horses'},
    {src:'./images/58.jpg', alt:'Birds'}, {src:'./images/59.jpg', alt:'Polar bear'}, {src:'./images/60.jpg', alt:'Ducks'}, 
    {src:'./images/61.jpg', alt:'Dog'}, {src:'./images/62.jpg', alt:'Wolves'}, {src:'./images/63.jpg', alt:'Puffin'},
    {src:'./images/64.jpg', alt:'Carrots'}, {src:'./images/65.jpg', alt:'Carrots'}, {src:'./images/66.jpg', alt:'Sea turtle'},
    {src:'./images/67.jpg', alt:'Fish'}, {src:'./images/68.jpg', alt:'Starfish'}, {src:'./images/69.jpg', alt:'Fish'},
    {src:'./images/70.jpg', alt:'Fish'}, {src:'./images/71.jpg', alt:'Fish'}, {src:'./images/72.jpg', alt:'Bird'},
    {src:'./images/73.jpg', alt:'Flamingo'}, {src:'./images/74.jpg', alt:'Fishes'}, {src:'./images/75.jpg', alt:'Crab'},
    {src:'./images/76.jpg', alt:'Carrots'}, {src:'./images/77.jpg', alt:'Seal'}, {src:'./images/78.jpg', alt:'Fish'},
    {src:'./images/79.jpg', alt:'Seabird'}, {src:'./images/80.jpg', alt:'Fish'}, {src:'./images/81.jpg', alt:'Carrots'},
    {src:'./images/82.jpg', alt:'Sea lion'}, {src:'./images/83.jpg', alt:'Dolphin'}, {src:'./images/84.jpg', alt:'Fish'},
    {src:'./images/85.jpg', alt:'Fish'}
]

const startBtnEl = document.getElementById('startButton')
const gameInstruction = document.querySelector('#gameInstrocution')
const imageContainerEl = document.getElementById('imagesContainer')
const boxEls = document.querySelectorAll('.imagebox')
const countdownEl = document.getElementById('countdown')
const randomImgEl = document.getElementById('randomImg')
const messageEl =document.getElementById('message')
const resultEl = document.getElementById('result')
const correctSound = new Audio("./sound/correctSound.mp3")
const nopeSound = new Audio('./sound/NopeSound.wav')
console.log(nopeSound.play())


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
    timeleft = 2
    boards = []
    messageEl.textContent = 'Memorize the position of the images'
    boxEls.forEach(box => {
        box.innerHTML = ''
    })
    resultEl.style.display = 'none'
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

        img.src = board.src
        img.alt = board.alt
        boxEls[index].appendChild(img)

        imagesLab.push(board)
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
        boxEls.forEach(box => {
            box.innerHTML = ''
            box.addEventListener('click', handleClick)
        })
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
    img.src = imageComputerChoice.src
    img.alt = imageComputerChoice.alt
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
        resultEl.style.display = ''
        resultEl.textContent = 'Correct!'
        correctSound.play()
    } else {
        resultEl.style.display = ''
        resultEl.textContent = 'Nope!'
        nopeSound.play()
    }
    
    console.log('##### Current score:', score);
    
    boxEls.forEach(box => {
        box.removeEventListener('click', handleClick)
    })

    randomImgReturn()

    setTimeout(() => {
        j++
        if (j < 10) {
            init()
        } else {
            // exit
            imageContainerEl.style.display = 'none'
            console.log('@@@@@ Final score:', score);
            if(score > 7){
                messageEl.textContent = `You scored ${score} out of 10, 
                🐬 excellent memory`
            } else if(score < 7 && score >5){
                messageEl.textContent = `You scored ${score} out of 10, 
                🐶 gougood memory`
            } else {
                messageEl.textContent = `You scored ${score} out of 10, 
                🐟 need improvement`
            }
            resultEl.textContent = 'Restart' 
        }    
    }, 1200);
}
      

function randomImgReturn(){
        const img = document.createElement('img')
        img.src = imageComputerChoice.src
        img.alt = imageComputerChoice.alt
        boxEls[boxIdx].appendChild(img)       
}

resultEl.addEventListener('click', (event) => {
    j = 0
    score = 0
    init()
})