import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component{
static propTypes={
   books: PropTypes.array.isRequired,
   shelf: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
}

 render() {
        return (
            
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              
            <ol className="books-grid">
                {
                this.props.books && this.props.books.filter(el=>el.shelf === this.props.shelf).map( book =>(
                <li key={book.id}>
                   <Book onClickSelect={this.props.onClickSelect}   book={book} />
                </li>
                  ))
                  }

              </ol>
            </div>
          </div>

        )
    }
}

export default Shelf
