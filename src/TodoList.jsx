import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <ul className="TodoList">
                { this.props.todos.map(todo => (
                    <li key={ todo.key }>
                        <label htmlFor={ `todo-${ todo.key }` }>{ todo.todo }</label>
                        <input id={ `todo-${ todo.key }` } type="checkbox" defaultChecked={ todo.done } />
                    </li>
                )) }
            </ul>
        );
    }
}

export default TodoList;