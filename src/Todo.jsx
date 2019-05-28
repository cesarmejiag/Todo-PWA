import React, { Component } from 'react';
import TodoTools from './TodoTools';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {

    constructor() {
        super();
        this.state = { newTodo: '', todos: [] };

        this.addTodo = this.addTodo.bind(this);
        this.archive = this.archive.bind(this);
        this.todoDone = this.todoDone.bind(this);
        this.writingTodo = this.writingTodo.bind(this);
    }

    componentDidMount() {
        this.setState({
            todos: [ 
                { key: Date.now() + 1, todo: "Study React JS", done: false },
                { key: Date.now() + 2, todo: "Go to the GYM", done: true },
                { key: Date.now() + 3, todo: "Save money", done: false }
            ]
        });
    }

    /**
     * Add new todo.
     */
    addTodo() {
        if (this.state.newTodo.length > 0) {
            let newTodo = {
                key: Date.now(),
                todo: this.state.newTodo,
                done: false
            };

            this.setState(prevState => ({
                todos: prevState.todos.concat(newTodo),
                newTodo: ''
            }));
        }
    }

    /**
     * Archive done todos.
     */
    archive() {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => !todo.done)
        }));
    }

    /**
     * Handles todo state.
     * @param {string} key
     * @param {boolean} done 
     */
    todoDone(key, done) {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if ((String(todo.key) === key)) {
                    todo.done = done;
                }

                return todo;
            }) 
        }));
    }

    /**
     * Handles writing todo event.
     * @param {string} value 
     */
    writingTodo(value) {
        this.setState({ newTodo: value });
    }

    /**
     * Render component into DOM.
     */
    render() {
        return (
            <div className="Todo">
                <h1>Todo List</h1>
                <TodoTools todos={ this.state.todos } archive={ this.archive } />
                <TodoList todos={ this.state.todos } todoDone={ this.todoDone } />
                <TodoForm addTodo={ this.addTodo } newTodo={ this.state.newTodo } writingTodo={ this.writingTodo } />
            </div>
        );
    }

}

export default Todo;