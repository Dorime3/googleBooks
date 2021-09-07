import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import RelevanceSelector from './selectors/relevanceSelector';
import ThemeSelector from './selectors/themeSelector';
import { findBook, getBooksFromInput, selectTheme, selectRelevance } from '../redux/findBook-reducer';
import s from './SearchParams.module.css';

const SearchParams = (props) => {

    const onBooksChange = (event) => {
        props.findBook(event.target.value)
    }
    const onSendTextBook = (e) => {
        if (e.target.value !== '' & e.charCode === 13 || e.target.nodeName === 'BUTTON') {
            console.log(e)
            props.history.push('/mainpage')
            props.getBooksFromInput(props.textFromField, props.selectedTheme, props.selectedRelevance)
        }
    }
    return (
        <div className={s.wrapperSearch}>
            <h1>Search for books</h1>
            <div className={s.searchForm}>
                <input
                    className={s.inputField}
                    value={props.textFromField}
                    onChange={onBooksChange}
                    placeholder='Введите название книги'
                    onKeyPress={onSendTextBook} />
                <button className={s.buttonSearch} onClick={onSendTextBook}>Search</button>
            </div>
            <div className={s.searchFilters}>
                <ThemeSelector
                    availableThemes={props.availableThemes}
                    selectedTheme={props.selectedTheme}
                    selectTheme={props.selectTheme} />
                <RelevanceSelector
                    selectedRelevance={props.selectedRelevance}
                    selectRelevance={props.selectRelevance}
                    availableRelevance={props.availableRelevance} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    textFromField: state.findBooksPage.textFromField,
    availableThemes: state.findBooksPage.availableThemes,
    selectedTheme: state.findBooksPage.selectedTheme,
    selectedRelevance: state.findBooksPage.selectedRelevance,
    availableRelevance: state.findBooksPage.availableRelevance
})

export default compose(
    connect(mapStateToProps, { selectTheme, selectRelevance, findBook, getBooksFromInput }),
    withRouter)(SearchParams);