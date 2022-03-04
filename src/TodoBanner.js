import React, { Component } from 'react';

class TodoBanner extends Component {
    render = () => {
        return (
            <div>
                <h4 className='bg-primary text-white text-center p-2'>
                    {this.props.name}'s To Do List
                    ({this.props.tasks.filter(t => !t.done).length} items left)
                </h4>
            </div>
        );
    }
}

export default TodoBanner;