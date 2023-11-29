const container = document.querySelector('.container')

const content = document.createElement('h3')
content.style.cssText = `color: blue;`
content.innerText = "I'm blue"

container.appendChild(content)