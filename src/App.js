import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import BooksCardsContainer from './components/BooksCards/BooksCardsContainer';
import BooksPageContainer from './components/BookPage/BooksPageContainer';
import SearchParams from './components/SearchParams';


const App = () => {
  return (
    <div className="App">
      <SearchParams />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/mainpage' />} />
        <Route path='/mainpage' render={() => <BooksCardsContainer />} />
        <Route path='/bookpage' render={() => <BooksPageContainer />} />
      </Switch>
    </div>
  );
}



export default App;
