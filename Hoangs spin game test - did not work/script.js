const WHEEL_COUNT = 5;

let counter = 0;

// let imgArray = [
//     `url('../img/7.png#'${timeNow})`;
//     `url('../img/duck.png#'${timeNow})`;
//     `url('../img/magnet.png#'${timeNow})`;
//     `url('../img/pikachu.png#'${timeNow})`;
//     `url('../img/pokeball.png#'${timeNow})`;
//     `url('../img/r.png#'${timeNow})`;
//     `url('../img/shell.png#'${timeNow})`;
//     `url('../img/spinning.gif#'${timeNow})`;
// ]

while(counter < WHEEL_COUNT) {
    const newWheel = document.createElement('div');
    newWheel.className = `wheel wheel-${counter}`;
    const timeNow = new Date().getTime(); // time now in milliseconds
    newWheel.style.backgroundImage = `url('../img/spinning.gif#'${timeNow})`;
    document.getElementById('wheels').append(newWheel);

    counter++;
}

setTimeout(() => {
    const timeNow = new Date().getTime(); // time now in milliseconds
    document.getElementsByClassName('wheel')[0].style.backgroundImage = `url('../img/7.png#'${timeNow})`;
}, 5000);

setTimeout(() => {
    const timeNow = new Date().getTime(); // time now in milliseconds
    document.getElementsByClassName('wheel')[0].style.backgroundImage = `url('../img/spinning.gif#'${timeNow})`;
}, 5000)