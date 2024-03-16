const monthNames = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
setInterval(() => {
    const d = new Date();
    const hourTime = d.getHours();
    const minuteTime = d.getMinutes();
    const secTime = d.getSeconds();
    const hourRotation = 30*hourTime + minuteTime/2;
    const minRotation = 6*minuteTime
    const secRotation = 6*secTime;
    const month = d.getMonth();
    const date = d.getDate();
    const year = d.getFullYear();
    const day = d.getDay();
    let hourStream;
    if(hourTime<10){
        hourStream = `0${hourTime}`
    } else 
    if(hourTime===0){
        hourStream = 12;
    } else 
    if(hourTime > 12){
        hourStream = hourTime%12;
        if(hourStream < 10){
            hourStream = `0${hourStream}`
        }
    } else{
        hourStream = hourTime
    }
    second.style.transform = `rotate(${secRotation}deg)`
    minute.style.transform = `rotate(${minRotation}deg)`
    hour.style.transform = `rotate(${hourRotation}deg)`
    ajDate.innerText = `${date} ${monthNames[month]} ${year}`
    ajDay.innerText = `${days[day]}`
    hStream.innerText = hourStream
    minStream.innerText = minuteTime<10?`0${minuteTime}  `:minuteTime+"  ";
    secStream.innerText = secTime<10?`0${secTime}`:secTime;
    jhamka.classList.toggle("Bitka")
}, 1000);