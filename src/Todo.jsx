import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {

    constructor() {
        super();
        this.state = { newTodo: '', todos: [] };

        this.addTodo = this.addTodo.bind(this);
        this.todoDone = this.todoDone.bind(this);
        this.writingTodo = this.writingTodo.bind(this);
    }

    componentDidMount() {
        this.setState({
            todos: [ 
                { key: Date.now(), todo: "Study React JS", done: false },
                { key: Date.now() + 1, todo: "Go to the GYM", done: true },
                { key: Date.now() + 2, todo: "Save money", done: false }
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

    todoDone(key, value) {

    }

    writingTodo(value) {
        this.setState({ newTodo: value });
    }

    render() {
        return (
            <div className="Todo">
                <h1>Todo List</h1>
                <TodoList todos={ this.state.todos } />
                <TodoForm addTodo={ this.addTodo } 
                            newTodo={ this.state.newTodo } 
                            todoDone={ this.todoDone }
                            writingTodo={ this.writingTodo }  />
            </div>
        );
    }

}

export default Todo;