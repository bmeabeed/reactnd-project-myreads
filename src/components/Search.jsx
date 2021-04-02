import React,{Component} from 'react'
import Book from './Book';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types';
class Search extends Component{
  static propTypes={
    onClickSelect: PropTypes.func.isRequired
   }
 
  state = {
    books: [],
    query: ''
 
  }

//Update search query state and perform search and update books state
  onChangeShearch = ( query) => {
   this.setState({
     query: query.trim(),
    });
    query!=='' && BooksAPI.search(query).then((resData) => this.setState({
      books: resData,
     }));
 
}

//Modefy the selected book by it's true shelf
getBook = (book) =>{
  let newBooks=this.props.books.filter( el => el.id=== book.id)
  if (newBooks.length>0)
      return  newBooks[0] 
  book.shelf="none"
  return book;
}

render(){
 
  return(
      <div className="search-books">
      <div className="search-books-bar">
      <Link to='/' className="close-search"/>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={
            (event) => this.onChangeShearch(event.target.value)
              } value={this.state.query}/>

        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
        {(this.state.books && this.state.books.length>0) && this.state.books.map( book =>(
              <li key={book.id}>
                    <Book onClickSelect={this.props.onClickSelect} book={this.getBook(book)}/>           
              </li>
          ))}
        </ol>
      </div>
    </div>
  )
  }
}

export default Search