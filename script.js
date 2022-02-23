const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const jpg = document.getElementById('square');

let count = 0;
let active = true;
let idInterval;

const move = () => {
    count++;
    idInterval = requestAnimationFrame(move);

    if (count < 500) {
        jpg.style.left = count * 2 + 'px';
    } else {
        cancelAnimationFrame(idInterval);
    }
};

start.addEventListener('click', () => {
    move();
    active = true;
});

stop.addEventListener('click', () => {
    if (active == true) {
        cancelAnimationFrame(idInterval);
        active = false;
    } else {
        idInterval = requestAnimationFrame(move);
        active = true;
    }
});

reset.addEventListener('click', () => {
    count = 0;
    jpg.style.left = 0 + 'px';
    cancelAnimationFrame(idInterval);
});













// start.addEventListener('click', () => {
//     animate();
// });

// stop.addEventListener('click', () => {
//     if (active) {
//         cancelAnimationFrame(interval);
//         active = false;
//     } else {
//         interval = requestAnimationFrame(animate);
//         active = true;
//     }
// });
