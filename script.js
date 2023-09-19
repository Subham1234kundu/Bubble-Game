let timer = 30;
let score = 0;
let hitrn = 0;
let ting = new Audio("/music/ting.mp3");
let gameOver = new Audio("/music/gameover.mp3");


function printBubble(){
    let clutter = "";


for(let i = 1; i<=169; i++){
  let rn = Math.floor(Math.random()*10);
  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pBtm").innerHTML = clutter;

}


function runTimer(){
   let timerIntarval =  setInterval(()=>{
   if(timer>0 ){
    timer--;
    document.querySelector("#timerVal").textContent = timer;
    
   }else{
    clearInterval(timerIntarval);
    gameOver.play();
    document.querySelector("#pBtm").innerHTML = `<h2>GAME OVER!!!</h2>`;
    document.querySelector("#goHit").innerHTML = "_";

   }
    },1000);
}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#goHit").textContent = hitrn;
}

function scoreUpdate(){
 score += 10;
 document.querySelector("#scoreVal").textContent = score

}


document.querySelector("#pBtm").addEventListener("click",function(dets){
    let clickNum =  Number(dets.target.innerText);
    if(clickNum === hitrn){
        ting.play();
        scoreUpdate();
        newHit();
        printBubble();   
    }else{
        timer = 0;
        hitrn =0;
        document.querySelector("#timerVal").textContent = timer;
        document.querySelector("#goHit").innerHTML = "_";
    }

    
})


// let restart = document.querySelector("#restart").addEventListener("click",()=>{
//     timer =30;
//     document.querySelector("#timerVal").textContent = timer;
    
//     score = 0;
//     document.querySelector("#scoreVal").textContent = score;
//     printBubble();
//     newHit();

// })
newHit();
runTimer();
printBubble();

