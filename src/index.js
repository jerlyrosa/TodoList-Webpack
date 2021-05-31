import './styles.css'
import { Todo, TodoList } from './js/class/index';


const todoList = new TodoList();

const tasks =  new Todo('Aprender cultura nordica');
const tasks2 =  new Todo('Aprender cultura nordica v.2');

todoList.newTodo( tasks );
todoList.newTodo( tasks2 );



console.log( todoList )