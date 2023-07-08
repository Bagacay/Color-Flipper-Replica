const simple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += simple[randomHex()];
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
})

function randomHex() {
    return Math.floor(Math.random() * simple.length)
}