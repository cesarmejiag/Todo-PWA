import React, { Component } from 'react';

class TodoTools extends Component {

    countTodosDone() {
        const todosDone = this.props.todos.filter(todo => todo.done);

        return todosDone.length;
    }

    render() {
        const done = this.countTodosDone();
        const total = this.props.todos.length;

        return (
            <div className="TodoTools">
                <div>{ done } of { total } remaining [ <button>archive</button> ]</div>
            </div>
        );
    }

}

export default TodoTools;
