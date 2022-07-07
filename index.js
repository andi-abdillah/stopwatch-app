/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
let stopwatch = document.getElementById('stopwatch');
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');

startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);

var time = 0;
var running = 0;
function start() {
  // TODO: answer here
  if(running == 0){
    running = 1;
    runTime();
    startbtn.innerHTML = "Start";
  }else{
    running = 0;
    startbtn.innerHTML = "Resume";
  }
}

function stop() {
  // TODO: answer here
  running = 0;
  startbtn.innerHTML = "Resume";
}

function reset() {
  // TODO: answer here
  running = 0;
  time = 0;
  startbtn.innerHTML = "Start";
  stopwatch.innerHTML = "00:00:00";
}

function runTime() {
  // TODO: answer here
  if(running == 1){
    setTimeout(function(){
        time++;
        var mins = Math.floor(time/10/60);
        var secs = Math.floor(time/10 % 60);
        var hours = Math.floor(time/10/60/60);
        if(hours < 10){
          hours = "0" + hours;
        } 
        if(mins < 10){
          mins = "0" + mins;
        } 
        if(secs < 10){
          secs = "0" + secs;
        }
        stopwatch.innerHTML = hours + ":" + mins + ":" + secs;
        runTime();
    },100)
  }
}