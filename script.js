// variáveis dos botões
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset")


var seconds = 00
var minutes = 00
var hours = 00


// variáveis das horas, dos minutos e dos segundos
var hh = document.getElementById("hh")
var mm = document.getElementById("mm")
var ss = document.getElementById("ss")

var stopit;


start.addEventListener("click", () => {
    start.style.display = "none"
    clearInterval(stopit)
    stopit = setInterval(() => {
        seconds++
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        ss.innerHTML = ZeroLeft(seconds)
        mm.innerHTML = ZeroLeft(minutes)
        hh.innerHTML = ZeroLeft(hours)
    }, 1000);;
})

// zero à esquerda 

function ZeroLeft(n) {
    return n >= 10 ? n : `0${n}`
}

stop.addEventListener("click", () => {
    start.style.display = "inline-block"
    clearInterval(stopit)
})

reset.addEventListener("click", () => {
    start.style.display = "inline-block"
    clearInterval(stopit);
    seconds = 0
    minutes = 0
    hours = 0
    hh.innerHTML = "00";
    mm.innerHTML = "00";
    ss.innerHTML = "00";
})



