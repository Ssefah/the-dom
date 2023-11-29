const container = document.querySelector('.container')

const content = document.createElement('p')
content.innerText = "Hi, I'm red"
content.style.color = 'red'

console.log(content)
container.appendChild(content)