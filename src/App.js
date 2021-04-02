import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'
import {Link,Route} from 'react-router-dom'
import Search from './components/Search'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
     this.onClickSelect = this.onClickSelect.bind(this);
    }


  state = {
       books: [],
    }
  
  componentDidMount() {
    // Get all books from the server using BooksAPI and update books state be the response 
    BooksAPI.getAll().then((resData) => this.setState({
      books: resData,
   }));
  }
 

  // Handel context menu selection change to move the book to the selected shelf
  onClickSelect = (book,shelf) =>{
        BooksAPI.update(book,shelf).then(() =>{ this.setState({
          books:this.state.books.map(bookEle => {
            //Update the selected book by the selected shelf
            if (bookEle.id===book.id){
              bookEle.shelf=shelf
            }
            return bookEle; } )
         })
        // Return to main page after update the selected book state from search page
        if(window.location.href.includes("search"))
        window.location.href="/"
        })
   }
 

  render() {
    return (
      <div className="app">
          <Route exact path='/search'>
             <Search onClickSelect={this.onClickSelect} books={this.state.books}/>
          </Route>
         
          <Route exact path='/'>
                <div className="list-books-title ">
                  <h1>MyReads</h1></div>
                <div className="list-books">
              
                    <Shelf onClickSelect={this.onClickSelect} shelf="currentlyReading" title="Currently Reading" books={this.state.books}/>
                    <Shelf onClickSelect={this.onClickSelect} shelf="wantToRead" title="Want To Read" books={this.state.books}/>
                    <Shelf onClickSelect={this.onClickSelect} shelf="read" title="Read" books={this.state.books}/>

                  <div className="open-search">
                    <Link to = '/search' ><button >Add a book</button> </Link>
                  
                  </div>
                </div>
          </Route>
      </div>
    )
  }
}

export default BooksApp
