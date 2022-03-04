import React, { Component } from 'react';
import TodoBanner from './TodoBanner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Termito",
      todoItems: [{ action: "Buy Flowers", done: false }, 
                  { action: "Get Shoes", done: false }, 
                  { action: "Collect Tickets", done: true }, 
                  { action: "Call Jem", done: false }],
      newItemText: "",
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodo = () => {
    if (!this.state.todoItems
              .find(item => item.action === this.state.newItemText)) {
        this.setState({
          todoItems: [...this.state.todoItems,
              {action: this.state.newItemText, done: false }],
          newItemText: ""
        });
      }
  }

  toggleTodo = (todo) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action === todo.action
      ? {...item, done: !item.done} : item) });

  todoTableRows = () => this.state.todoItems.map(item =>
    <tr key={item.action}>
      <td>{ item.action }</td>
      <td>
        <input 
          type="checkbox"
          checked={item.done}
          onChange={() => this.toggleTodo(item)}
        />
      </td>
    </tr>);

  render = () => {
    return (
      <div>
        <TodoBanner />
        <div className='container'>
          <div className='my-1'>
            <input 
              className='form-control'
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
            />
              <button 
              className='btn btn-primary m-1'
              onClick={this.createNewTodo}>
                 Add
          </button>
          </div>

          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>
                  Description
                </th>
                <th>
                  Done
                </th>
              </tr>
            </thead>
            <tbody>
              {this.todoTableRows()}
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default App;
