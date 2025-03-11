document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
});

function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    if (!itemText) return;

    let shoppingList = new Set(JSON.parse(localStorage.getItem('shoppingList')) || []);
    if (shoppingList.has(itemText)) return; // Evita duplicados

    shoppingList.add(itemText);
    localStorage.setItem('shoppingList', JSON.stringify([...shoppingList]));

    addItemToDOM(itemText);
    input.value = '';
}

function addItemToDOM(itemText) {
    const list = document.getElementById('shoppingList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `<span>${itemText}</span> <button onclick="removeItem('${itemText}', this)">❌</button>`;
    listItem.onclick = () => listItem.classList.toggle('checked');

    list.appendChild(listItem);
}

function removeItem(itemText, button) {
    let shoppingList = new Set(JSON.parse(localStorage.getItem('shoppingList')) || []);
    shoppingList.delete(itemText);
    localStorage.setItem('shoppingList', JSON.stringify([...shoppingList]));

    button.parentElement.remove();
}

function loadFromLocalStorage() {
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    shoppingList.forEach(addItemToDOM);
}
