import { EventEmitter } from "events";
import dispatcher, { Dispatcher } from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Water Bills",
                complete: false
            }
        ];
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit("change");
    }

    recieveTodos(todos) {
        this.todos = todos;
        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECIEVE_TODOS": {
                this.recieveTodos(action.todos);
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;

export default todoStore;
