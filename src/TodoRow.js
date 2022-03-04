import React, { Component } from 'react';

class TodoRow extends Component {
    render = () => {
        return (
            <tr>
                <td>{ this.props.todo.action }</td>
                <td>
                    <input 
                        type={'checkbox'}
                        checked={this.props.todo.done}
                        onChange={() => this.props.toggleTodo(this.props.todo)}
                    />
                </td>
            </tr>
        );
    }
}

export default TodoRow;