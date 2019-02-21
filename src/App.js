import React, { Component } from 'react';
import './App.css';
import BooklList from './BookList';
import './index.css' // for the fonts 



class App extends Component {
  //   I added state so a user can enter what ever they want and add to the list ? 

  state = {
    bookAdded: {
      bookItem: ''
    },
    books: []
  }


  // Set user input as a new value , user here can add values to the list
  addValue = (event) => {
    // console.log(event.target.value)
    // set value to what user types  
    this.setState({ bookItem: event.target.value });
  }



  submitForm = (event) => {
    // to prevent the form from rereshing everytime we hit the button
    event.preventDefault()
    // Add books a new var and push to books array
    const newBooks = this.state.books;
    newBooks.push(this.state.bookItem);
    console.log(this.state.books)
    this.setState({
      books: newBooks,
      // bookAdded: {
      //   bookItem: ''
      // },
      bookItem: ""
    })
  }

  // Clear all list items by setting the array to empty again. 
  clearList = (event) => {
    this.setState({
      books: []
    })
  }

  render() {
    // loop through books array and save user inputs in bookList var.
    const bookList = this.state.books.map((book) => {
      return <BooklList book={book} />
    })

    return (

      <div className='container'>

        <form onSubmit={this.submitForm} id='App'>
          <h1> Reading List  </h1>
          {/* when user leave input field onChange runs add value function   */}
          <input type='text' id="inputOne" onChange={this.addValue} placeholder='book title' value={this.state.bookItem} />
          <button type='submit' className='btn'> Add to list</button>
          <button onClick={this.clearList} className='btn'> Clear List</button>
        </form >

        {/*  show list items here  */}
        <p id='listItem'>  {bookList} </p>


      </div>
    );
  }
}

export default App;
