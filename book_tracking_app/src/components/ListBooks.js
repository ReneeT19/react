import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelfInfo from './BookShelfInfo'

class ListBooks extends Component {
  
  render() {
    const { mybooks, shelfChange } = this.props

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelfInfo title="Currently Reading" books={mybooks.filter((book) => book.shelf === 'currentlyReading')} shelfChange={shelfChange}/>
            <BookShelfInfo title="Want to Read" books={mybooks.filter((book) => book.shelf === 'wantToRead')} shelfChange={shelfChange}/>
            <BookShelfInfo title="Read" books={mybooks.filter((book) => book.shelf === 'read')} shelfChange={shelfChange}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>

    )
  }
}

export default ListBooks