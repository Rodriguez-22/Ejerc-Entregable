function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    if (itemText === '') return;

    const list = document.getElementById('shoppingList');
    const listItem = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = ' X ';
    deleteButton.onclick = function(event) {
        event.stopPropagation();
        list.removeChild(listItem);
    };
    
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    listItem.onclick = function() {
        this.classList.toggle('checked');
    };
    
    list.appendChild(listItem);
    input.value = '';
}