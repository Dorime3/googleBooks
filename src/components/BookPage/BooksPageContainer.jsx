import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import BooksPage from './BooksPage';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setBookId } from '../../redux/findBook-reducer';



const BooksPageContainer = (props) => {

    useEffect(() => {
        const urlId = props.location.pathname.match(/\b(\w+)\b$/gm)[0]
        props.setBookId(urlId)
        debugger
    }, [props.bookId])
    return (<>
        {props.bookId &&
            <BooksPage
                selectedBook={props.booksData.filter(el => el.id === props.bookId)[0].volumeInfo}
            />
        }
    </>)
}

const mapStateToProps = (state) => ({
    textFromField: state.findBooksPage.textFromField,
    booksData: state.findBooksPage.booksData,
    bookId: state.findBooksPage.bookId
})

export default compose(
    connect(mapStateToProps, { setBookId }),
    withRouter)
    (BooksPageContainer);