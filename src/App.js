import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Termito",
    }
  }

  changeState = () => {
    this.setState({
      userName: this.state.userName === "Termito" ? "Jeff" : "Termito"
    });
  };

  render() {
    return (
      <div>
        <h4 className='bg-primary text-white text-center p-2'>
          {this.state.userName}'s To Do List
        </h4>
        <button 
          className='btn btn-primary m-2'
          onClick={this.changeState}>
            Change Name
          </button>
      </div>
    );
  }
}

export default App;
