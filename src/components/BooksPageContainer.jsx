import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import BooksPage from './BooksPage';

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



export default withRouter(BooksPageContainer);