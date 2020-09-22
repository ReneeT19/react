import React, { Component } from 'react'
import BooksGridInfo from './BooksGridInfo'


class BookShelf extends Component {
  state = {}

  render(){
    const { title, books, shelfChange } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGridInfo books={books} shelfChange={shelfChange}/>
        </div>
      </div>
    )
  }
}

export default BookShelf