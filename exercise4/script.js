const inputItem = document.querySelector('#item')
const buttonAddItem = document.querySelector('#add-item')
const shoppingList = document.querySelector('ul')

/**
 * Adds a new item to the shopping list when the Enter key is pressed in the input field.
 */
const addItem = () => {
    const inputValue = inputItem.value.trim();

    if (!inputValue) {
        return;
    }

    inputItem.value = '';

    const listItem = document.createElement('li');

    const shoppingItem = document.createElement('span');
    shoppingItem.textContent = inputValue;
    shoppingItem.style.cssText = `
        font-size: 1rem;
        font-weight: 800;
        color: rgb(30 41 59);
        padding: 8px 16px;
        margin: 0.25rem 1rem;
    `;

    const deleteBtn = document.createElement('button');
    // deleteBtn.style.backgroundColor = 'rgb(30 40 59)'
    deleteBtn.style.cssText = `padding: 4px 16px; background-color: rgb(30 40 59); `

    fetch('bin-recycle-20-regular.svg')
        .then(response => response.text())
        .then(svgContent => {
            const deleteIcon = document.createElement('svg');
            deleteIcon.innerHTML = svgContent;
            deleteBtn.appendChild(deleteIcon);
        });

    listItem.appendChild(shoppingItem);
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

    shoppingList.appendChild(listItem);

    inputItem.focus();
};
buttonAddItem.addEventListener('click', addItem)
inputItem.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
})