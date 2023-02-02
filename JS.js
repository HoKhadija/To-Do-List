let title = document.createElement('h1');
let titleCont = document.createTextNode('To Do List');
title.appendChild(titleCont);

var list = document.getElementById('list');
list.appendChild(title);

let addText = document.createElement('input');
addText.setAttribute('id', 'addText');
addText.setAttribute('type', 'text');
addText.setAttribute('placeholder', 'enter your list');
list.appendChild(addText);

let btn = document.createElement('button');
btn.textContent = 'Add';
btn.setAttribute('class', 'addBtn');
btn.addEventListener('click', newElement);
list.appendChild(btn);

let ul = document.createElement('ul')
list.appendChild(ul);

let btn_reset = document.createElement('button');
btn_reset.textContent = 'Reset';
btn_reset.setAttribute('class', 'reset')

function newElement(){
    const listValue = document.querySelector('#addText').value;
    let li = document.createElement('li');
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    ul.appendChild(li).innerHTML = listValue;
    li.appendChild(checkbox)
}



