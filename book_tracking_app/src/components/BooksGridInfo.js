import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
  state = {}

  render(){
    const { books, shelfChange } = this.props
    let { currentBook } = this.state

    return(
      <ol className="books-grid">
        {books.map(book => (
          <Book key={book.id} book={book} shelfChange={shelfChange}/>
        ))}
      </ol>
    )
  }
}

export default BooksGrid