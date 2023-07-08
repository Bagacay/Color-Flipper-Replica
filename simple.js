const simple = ['red', 'green', 'blue', 'white', 'black'];

const color = document.querySelector('.color')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    let simpleColor = randomColor();
    color.textContent = simple[simpleColor];
    document.body.style.backgroundColor = simple[simpleColor];
})

function randomColor() {
    return Math.floor(Math.random() * simple.length)
}