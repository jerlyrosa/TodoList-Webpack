import{ Todo } from '../js/class/todo.class';
import { todoList } from '../index'


// REFERENCIAS HTML

const divTodoList = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo')

export const createdTodoHtml = ( todo ) => {
    const htmlTodo =`
        <li class="${( todo.completed) ? 'completed': ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${( todo.completed) ? 'checked': ''}>
            <label>${ todo.tasks }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> 
    
    `
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild


}


//EVENTOS 

textInput.addEventListener('keyup', (event)=>{
    

        if( event.keyCode === 13 && textInput.value.length > 0){

            const newTodo = new Todo( textInput.value );

            todoList.newTodo( newTodo );

            createdTodoHtml( newTodo );

            textInput.value = '';

        }
});
