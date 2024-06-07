console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isGameover = false;

// function to change the turn
const changeTurn = () => {
   return turn === "X"? "0" : "X"
}


// function tom check win
const checkWin = () =>{
   let boxtext = document.getElementsByClassName('boxtext');
   let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ]
   win.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
         document.querySelector('.info').innerText = boxtext[e[0]].innerText +  " won"
           isGameover = true;
          document.querySelector('.gameInfo').getElementsByTagName('img')[0].style.width = "100px"
      }
   })
}

// game logic

//  music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
      if(boxtext.innerText === ''){
         boxtext.innerText = turn;
         turn = changeTurn()
         audioTurn.play()
         checkWin()
         console.log("Turn For: ",turn)
         if(!isGameover){
            console.log("Turn For: ",turn)
            document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
         }
      }
   })
})

// add onclick listner to reset button
 reset.addEventListener('click',() =>{
   let boxtext = document.querySelectorAll('.boxtext');
   Array.from(boxtext).forEach(element => {
      element.innerText = ''
   })
   turn = "X"
   isGameover = false
   document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
   document.querySelector('.gameInfo').getElementsByTagName('img')[0].style.width = "0px"
 })
