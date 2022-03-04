import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoCreator from './TodoCreator';
import TodoRow from './TodoRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Termito",
      todoItems: [{ action: "Buy Flowers", done: false }, 
                  { action: "Get Shoes", done: false }, 
                  { action: "Collect Tickets", done: true }, 
                  { action: "Call Jem", done: false }],
      // newItemText: "",
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
        this.setState({
          todoItems: [...this.state.todoItems, {action: this.state.newItemText, done: false }],
        });
      }
  }

  toggleTodo = (todo) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action === todo.action
      ? {...item, done: !item.done} : item) });

  todoTableRows = () => this.state.todoItems.map(item =>
    <TodoRow key={item.action} todo={item} toggleTodo={this.toggleTodo} />);

  render = () => {
    return (
      <div>
        <TodoBanner 
          name={ this.state.userName } 
          tasks={ this.state.todoItems } 
        />
        <div className='container'>
          <TodoCreator
            callback={this.createNewTodo}
          />
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
