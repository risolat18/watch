const kunn = document.querySelector('.kunn'),
    oy = document.querySelector('.oy'),
    yil = document.querySelector('.yil'),
    hours = document.querySelector('.h'),
    minute = document.querySelector('.m'),
    second = document.querySelector('.s')
    // city = document.querySelector('.shaxar')
function watch() {
    let date = new Date,
        h = date.getHours() * 30,
        m = date.getMinutes() * 6,
        s = date.getSeconds() * 6

    hours.style.transform = `rotate(${h}deg)`
    minute.style.transform = `rotate(${m}deg)`
    second.style.transform = `rotate(${s}deg)`

    setTimeout(() => {
        watch()
    }, 1000);

    kunn.innerHTML = date.getDay()
    oy.innerHTML = date.getMonth()
    yil.innerHTML = date.getFullYear()

    date.getDay() < 10 ?  kunn.innerHTML = '0' + date.getDay() : kunn.innerHTML = date.getDay
    date.getMonth() < 10 ? oy.innerHTML = '0' + date.getMonth() : oy.innerHTML = date.getMonth

    // if (date.getDay() < 10) {
    //     kunn.innerHTML = '0' + date.getDay()
    // } else {

    //     kunn.innerHTML = date.getDay
    // }
    // kunn.innerHTML = kunn.innerHTML < 10 ? "0" + kunn.innerHTML : kunn.innerHTML 
    // oy.innerHTML = oy.innerHTML < 10 ? "0" + oy.innerHTML : oy.innerHTML

}
watch()