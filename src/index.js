import './styles.css'
import { Todo, TodoList } from './js/class/index';
import { createdTodoHtml } from './js/components'

export const todoList = new TodoList();

const task =  new Todo('Aprender cultura nordica');

todoList.newTodo( task );

task.completed =  false;

createdTodoHtml( task );