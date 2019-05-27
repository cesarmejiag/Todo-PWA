import React, { Component } from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.todoDone = this.todoDone.bind(this);
    }

    todoDone(event) {
        const key = event.target.dataset['key'];
        const done = event.target.checked;
        
        this.props.todoDone( key, done );
    }

    render() {
        return (
            <ul className="TodoList">
                { this.props.todos.map(todo => (
                    <li key={ todo.key }>
                        <label htmlFor={ `todo-${ todo.key }` } className={ (todo.done ? 'todo-done' : '' ) }>{ todo.todo }</label>
                        <input data-key={ todo.key } defaultChecked={ todo.done } id={ `todo-${ todo.key }` } onChange={ this.todoDone } type="checkbox" />
                    </li>
                )) }
            </ul>
        );
    }
}

export default TodoList;