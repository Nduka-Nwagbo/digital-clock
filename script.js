const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const timeofdayElement = document.getElementById("ampm");


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h >= 12) {
        ampm = "PM"
    }
    
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    timeofdayElement.innerText = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000)
    if (h < 18) {
      document.getElementById("body").className = "background2";
      hourElement.className = "time2";
      minuteElement.className = "time2";
      secondElement.className = "time2";
      timeofdayElement.className = "ampm2";
    }
    if (h < 7) {
        document.getElementById("body").className = "body";
        hourElement.className = "time";
        minuteElement.className = "time";
        secondElement.className = "time";
        timeofdayElement.className = "ampm";
    }
    if (h > 18) {
        document.getElementById("body").className = "body";
        hourElement.className = "time";
        minuteElement.className = "time";
        secondElement.className = "time";
        timeofdayElement.className = "ampm";
    }
}
updateClock();
