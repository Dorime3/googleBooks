
import React from 'react';

const BooksPage = (props) => {

    return (<>
        <img src={props.selectedBook.imageLinks.thumbnail} alt='' />
        <div>{props.selectedBook.categories.map(cath => <span key={cath}> {cath} </span>)}</div>
        <div>{props.selectedBook.title}</div>
        <div>{props.selectedBook.authors[0]}</div>
        <div>{props.selectedBook.description}</div>
    </>
    )
}

export default BooksPage