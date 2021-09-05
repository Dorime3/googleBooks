import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import BooksCardsContainer from './components/BooksCardsContainer';
import BooksPageContainer from './components/BooksPageContainer';
import SearchParams from './components/SearchParams';
import { findBook, getBooksFromInput, selectTheme, selectRelevance, setBookId } from './redux/findBook-reducer';


const App = (props) => {
  return (
    <div className="App">
      <SearchParams {...props} />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/mainpage' />} />
        <Route path='/mainpage' render={() =>
          <BooksCardsContainer
            {...props}
          />}
        />
        <Route path='/bookpage' render={() =>
          <BooksPageContainer
            booksData={props.booksData}
            setBookId={props.setBookId}
            bookId={props.bookId}
            textFromField={props.textFromField}
          />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  textFromField: state.findBooksPage.textFromField,
  booksData: state.findBooksPage.booksData,
  totalItems: state.findBooksPage.totalItems,
  availableThemes: state.findBooksPage.availableThemes,
  selectedTheme: state.findBooksPage.selectedTheme,
  selectedRelevance: state.findBooksPage.selectedRelevance,
  availableRelevance: state.findBooksPage.availableRelevance,
  bookId: state.findBooksPage.bookId
})

export default connect(mapStateToProps, { findBook, getBooksFromInput, selectTheme, selectRelevance, setBookId })(App)
