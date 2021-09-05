import React, { useState } from 'react';
import BooksCards from './BooksCards';

const BooksCardsContainer = (props) => {
    const [stepPagination, setStepPagination] = useState(0)
    const onGetMoreBooks = () => {
        setStepPagination(stepPagination + 30)
        props.getBooksFromInput(props.textFromField, props.selectedTheme, props.selectedRelevance, stepPagination)
    }
    return (
        <>
            {props.totalItems && <div>Found {props.totalItems} results</div>}
            {props.booksData.map(el =>
                <BooksCards
                    key={el.id}
                    id={el.id}
                    image={el.volumeInfo.imageLinks.smallThumbnail}
                    title={el.volumeInfo.title}
                    categories={el.volumeInfo.categories}
                    authors={el.volumeInfo.authors} />
            )}
            {!!(props.booksData.length) && <button onClick={onGetMoreBooks}>Show more</button>}
        </>
    )
}

export default BooksCardsContainer;