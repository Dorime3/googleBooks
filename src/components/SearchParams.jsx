import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import RelevanceSelector from './selectors/relevanceSelector';
import ThemeSelector from './selectors/themeSelector';

const SearchParams = (props) => {

    const onBooksChange = (event) => {
        props.findBook(event.target.value)
    }
    const onSendTextBook = () => {
        props.history.push('/mainpage')
        props.getBooksFromInput(props.textFromField, props.selectedTheme, props.selectedRelevance)
    }
    return (<>
        <input value={props.textFromField} onChange={onBooksChange} placeholder='Введите название книги' />
        <button onClick={onSendTextBook}>Найти</button>
        <ThemeSelector
            availableThemes={props.availableThemes}
            selectedTheme={props.selectedTheme}
            selectTheme={props.selectTheme}
        />
        <RelevanceSelector
            selectedRelevance={props.selectedRelevance}
            selectRelevance={props.selectRelevance}
            availableRelevance={props.availableRelevance}
        />
    </>
    )
}
export default withRouter(SearchParams);