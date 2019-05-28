import React, { Component } from 'react';

class TodoTools extends Component {

    constructor(props) {
        super(props);

        this.archive = this.archive.bind(this);
    }

    archive() {
        this.props.archive();
    }
    
    countTodosDone() {
        const todosDone = this.props.todos.filter(todo => todo.done);

        return todosDone.length;
    }

    render() {
        const done = this.countTodosDone();
        const total = this.props.todos.length;

        return (
            <div className="TodoTools">
                <div>{ done } of { total } remaining [ <button onClick={ this.archive }>archive</button> ]</div>
            </div>
        );
    }

}

export default TodoTools;
