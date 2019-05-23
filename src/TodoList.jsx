import React, { Component } from 'react';

class TodoList extends Component {

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        // this.props.todoDone();
        console.log(e.target.checked);
        console.log(e);
    }

    render() {
        return (
            <ul className="TodoList">
                { this.props.todos.map(todo => (
                    <li key={ todo.key }>
                        <label htmlFor={ `todo-${ todo.key }` }>{ todo.todo }</label>
                        <input id={ `todo-${ todo.key }` } type="checkbox" onChange={ this.onChange } defaultChecked={ todo.done } />
                    </li>
                )) }
            </ul>
        );
    }
}

export default TodoList;