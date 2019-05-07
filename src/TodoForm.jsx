import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.props.writingTodo(e.target.value);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTodo();
    }

    render() {
        return (
            <form className="TodoForm" onSubmit={ this.onSubmit }>
                <input name="Nombre" placeholder="New Todo" onChange={ this.onChange } type="text" value={this.props.newTodo} />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }

}

export default TodoForm;