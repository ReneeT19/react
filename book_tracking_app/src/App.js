import React, {Component} from 'react';
import * as BooksAPI from './components/BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import {Route} from 'react-router-dom';

class BooksApp extends Component {
  state = {
    mybooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((mybooks) => {
      this.setState({mybooks: mybooks})
    })
  }

  shelfChange = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(
      this.setState((prevState, props) => {
        return {
          mybooks: prevState.mybooks.map((b) => b.id === book.id ? book : b)
        }
      }
      )
    )
  }

  addBook = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(
      this.setState(state => (
        {mybooks: state.mybooks.concat([ book ])}
        )
      )
    )
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks mybooks={this.state.mybooks} shelfChange={this.shelfChange}/>
        )} />
        <Route exact path="/search" render={() => (
          <SearchBooks shelfChange={this.addBook} mybooks={this.state.mybooks}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
