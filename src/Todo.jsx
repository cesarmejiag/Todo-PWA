import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {

    constructor() {
        super();
        this.state = { newTodo: '', todos: [] };

        this.addTodo = this.addTodo.bind(this);
        this.writingTodo = this.writingTodo.bind(this);
    }

    componentDidMount() {
        this.setState({
            todos: [ 
                { key: 1, todo: "Study React JS", done: false },
                { key: 2, todo: "Go to the GYM", done: true },
                { key: 3, todo: "Save money", done: false }
            ]
        });
    }

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

    writingTodo(value) {
        this.setState({ newTodo: value });
    }

    render() {
        return (
            <div className="Todo">
                <h1>Todo List</h1>
                <TodoList todos={ this.state.todos } />
                <TodoForm newTodo={ this.state.newTodo } writingTodo={ this.writingTodo } addTodo={ this.addTodo } />
            </div>
        );
    }

}

export default Todo;