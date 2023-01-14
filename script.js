// get elements 
const startBtn = document.querySelector(".btn");
const pauseBtn = document.getElementById("pauseBtn");
const counter = document.querySelector(".counter");
let count = 0;
// const intId = setInterval(countFunction, 1000);
let intervalId


startBtn.addEventListener("click", function (){
    intervalId = setInterval(function(){
        counter.textContent = count ++
    }, 1000)
});

pauseBtn.addEventListener("click", function() {
    clearInterval(intervalId)
})

