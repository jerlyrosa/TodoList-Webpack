export class Todo {
    constructor( tasks ){

        this.tasks = tasks;

        this.id        = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }
}