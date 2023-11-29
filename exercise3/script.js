const container = document.querySelector('#container')

const content = document.createElement('div')
content.style.cssText = `
width: 300px;
border: 2px solid black;
border-radius: 0.75rem;
background-color:pink;
padding:24px;`

const heading = document.createElement('h1')
heading.style.cssText =`
font-size: 2rem;
color:red;`
heading.innerText = "I'm in a div"

const para = document.createElement('p')
para.style.cssText = `
font-size: 1.5rem;
font-weight: 900;
color: blue;`
para.innerText = "ME TOO!"

content.appendChild(para)
content.appendChild(heading)

container.appendChild(content)