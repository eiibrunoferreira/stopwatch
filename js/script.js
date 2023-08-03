const minutesel = document.querySelector("#minutes");
const secondsel = document.querySelector("#seconds");
const milisecondsel = document.querySelector("#miliseconds");
const btnstart = document.querySelector("#btnstart");
const btnpause = document.querySelector("#btnpause");
const btnresume = document.querySelector("#btnresume");
const btnreset = document.querySelector("#btnreset");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

btnstart.addEventListener("click", startTimer);
btnpause.addEventListener("click", pauseTimer);
btnresume.addEventListener("click", resumeTimer);
btnreset.addEventListener("click", resetTimer);

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused) {

            miliseconds += 10

            if(miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            
            if(seconds === 60) {
                minutes ++;
                seconds =0;
            }

            minutesel.textContent = formatTime(minutes);
            secondsel.textContent = formatTime(seconds);
            milisecondsel.textContent = formatmiliseconds(miliseconds);
        }

    }, 10)

    btnstart.style.display = "none";
    btnpause.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    btnpause.style.display = "none";
    btnresume.style.display = "block";
}

function resumeTimer() {
    isPaused = false
    btnpause.style.display = "block";
    btnresume.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesel.textContent = "00"
    secondsel.textContent = "00"
    milisecondsel.textContent ="000"

    btnstart.style.display = "block";
    btnpause.style.display = "none";
    btnresume.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatmiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") :time
}