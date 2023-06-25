const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

updateTimer();

function updateTimer(){
    const newYearTime = new Date("Jan 01 2024, 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const gap = newYearTime - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day) / hour);
    const m = Math.floor((gap%hour) / minute);
    const s = Math.floor((gap%minute) / second);

    daysEl.innerText = d;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    setTimeout(updateTimer, 1000)
}