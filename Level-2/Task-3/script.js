const form = document.getElementById('form');
const tasks = document.getElementById('tasks');
const submit = document.querySelector('.submit');
const btnValue = submit.innerText;

let todoArray = [];
let isEdited = null;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = inputText.value;
    if (isEdited != null) {
        todoArray.splice(isEdited, 1, {"todo" : todo});
    }
    else {
        todoArray.push({"todo" : todo});
    }
    displayContent();
    inputText.value = '';
    submit.innerText = btnValue;
});

const displayContent = () => {
    let statement = '';
    todoArray.forEach((element, i) => {
        statement += `
        <div id="displayContent">
        <div class="content">
        <h2>${element.todo}</h2>
        </div>
        <div class="editDelete">
        <div class="edit" onClick="editContent(${i})">
        <img src="./icons8-create-48.png" alt="">
        </div>
        <div class="delete" onClick="deleteContent(${i})">
        <img src="./icons8-delete-48.png" alt="">
        </div>
        </div>
        </div>
        `
    });
    tasks.innerHTML = statement;
};

function editContent (id) {
    isEdited = id;
    inputText.value = todoArray[id].todo;
    submit.innerText = 'Edit';
}

function deleteContent (id) {
    todoArray.splice(id, 1);
    displayContent();
}