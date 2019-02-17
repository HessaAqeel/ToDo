import React, { Component } from 'react';
import './App.css';


class App extends Component {
  //  I should add state here, so a user can enter what ever they want and add to the list ? 
  render() {
    // map ? 
    return (

      <div className="App">
        <h1> Reading List </h1>

        <form>
          {/* onSubmit={this.submitForm} */}

          <label> Book Title </label>
          <input type='text' name='title' />
          {/* onChange={this.updateForm} value={this.state.newData.title} */}

          <button> Add to list</button>

        </form >
      </div>
    );
  }
}

export default App;
