const inputItem = document.querySelector('#item')
const buttonAddItem = document.querySelector('#add-item')
const shoppingList = document.querySelector('ul')

const addItem = () => {
    const inputValue = inputItem.value;
    // check if inputValue is empty or only contains whitespace
    if (!inputValue.trim()) {
        return;
    }
    inputItem.value = ''

    const listItem = document.createElement('li')

    const shoppingItem = document.createElement('span')
    shoppingItem.innerText = inputValue;
    shoppingItem.style.cssText = `
    font-size: 1rem;
    font-weight: 800;
    color: rgb(30 41 59);
    padding:8px 16px;
    margin: 0.25rem 1rem;`


    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"
    deleteBtn.style.cssText = `
    color: white;
    background-color: rgb(30 41 59);
    margin: 0.25rem 1rem;`


    listItem.appendChild(shoppingItem)
    listItem.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        listItem.parentNode.removeChild(listItem)
    })

    shoppingList.appendChild(listItem)

    inputItem.focus();
}
buttonAddItem.addEventListener('click', addItem)
inputItem.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
})