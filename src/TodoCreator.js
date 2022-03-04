import React, { Component } from 'react';

class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemText: "" };
    }

    updateNewTextValue = () => {
        this.setState({ newItemText: this.newItemText.value });
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newIitemText: "" });
    }
    render = () => {
        return (
            <div 
                className='form-control' 
                value={this.state.newItemText}
                onChange={this.updateNewTextValue}
                >
                    <button
                        className="btn btn-primary mt-1"
                        onClick={this.createNewTodo}
                    >
                        Add
                    </button>
            </div>
        )
    }
}

export default TodoCreator;