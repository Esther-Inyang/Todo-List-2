console.log('testing...')

let inputField = document.querySelector('.input-field');
let addBtn = document.querySelector('.add-btn');
let todoListContainer = document.querySelector('.todo-list-container')

//create a function for the Todo items
function todoItem(){
    //if the input field is empty, do nothing.
    let text = inputField.value;

    if(text === ""){
        return;
    }

    //create li
    let li = document.createElement('li');
    li.classList.add('li');

    //create checkbox
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    //to cross out the todo item
    checkbox.addEventListener("click", function(){
        todoItemPara.style.textDecoration = "line-through";
    })

    //create paragraph (to hold the inputText)
    let todoItemPara = document.createElement('p');
    todoItemPara.classList.add('todoItemPara');
    todoItemPara.textContent = text;

    //create delete-button
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = "X"

    //to delete the list
    deleteBtn.addEventListener("click", function(){
        todoListContainer.removeChild(li);
    })

    //append all
    li.appendChild(checkbox);
    li.appendChild(todoItemPara);
    li.appendChild(deleteBtn);
    todoListContainer.appendChild(li);

    console.log(todoListContainer)

    //clear the input field
    inputField.value = "";

}

addBtn.addEventListener("click", todoItem);

//when the ENTER KEY is pressed, show the todo list just like the "add todo button"
inputField.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        todoItem();
    }
})
