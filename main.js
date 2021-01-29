let startButton = document.getElementById("start-button")
let inflateButton = document.getElementById("inflate-button")

// DATA
let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let popCount = 0
let gameLenght = 5000
let clockId = 0
let timeRemaining = 0


function startGame(){

  startButton.setAttribute("disabled", "true")
  inflateButton.removeAttribute("disabled")
  startClock()
  setTimeout(stopGame, gameLenght)
}

function startClock(){
  timeRemaining = gameLenght
  drawClock()
  clockId = setInterval(drawClock, 1000)
}

function stopClock(){
  clearInterval(clockId)
}

function drawClock(){
  let countdownElem = document.getElementById("countdown")
  countdownElem.innerText = (timeRemaining / 1000).toString()
  timeRemaining -= 1000
}

function inflate(){
  clickCount++
  height += inflationRate
  width += inflationRate

  if(height >= maxsize){
    popCount++
    console.log("pop the balloon")
    height = 0
    width = 0
  }
  draw()
}


function draw(){
  let balloonElement = document.getElementById("balloon")
  let clickCountElem = document.getElementById("click-count")
  let popCountElem = document.getElementById("pop-count")
  
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  
  clickCountElem.innerText = clickCount.toString()
  popCountElem.innerText = popCount.toString()
}

function stopGame(){
  console.log("the game is over")

  inflateButton.setAttribute("disabled", "true")
  startButton.removeAttribute("disabled")

  clickCount = 0
  height = 120
  width = 100

  stopClock()
  draw()
}