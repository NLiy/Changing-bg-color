const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'blue', 'green', 'white', 'yellow', 'pink']

body.style.backgroundColor = 'violet'

button.addEventListener('click', changeBG)

function changeBG(){
	const colorIndex = parseInt(Math.random()*color.length)
	body.style.backgroundColor = color[colorIndex]
}