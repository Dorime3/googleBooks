import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BooksCards from './BooksCards';
import { addBooksFromButton } from '../../redux/findBook-reducer';
import s from './MyBooksCards.module.css'
import Preloader from '../common/Preloader/Preloader';



const BooksCardsContainer = (props) => {
    const [stepPagination, setStepPagination] = useState(0)
    useEffect(() => {
        !!stepPagination && props.addBooksFromButton(props.textFromField, props.selectedTheme, props.selectedRelevance, stepPagination)
    }, [stepPagination])
    const onGetMoreBooks = () => {
        setStepPagination(stepPagination + 30)
        // props.addBooksFromButton(props.textFromField, props.selectedTheme, props.selectedRelevance, stepPagination)
    }
    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            {props.totalItems && <h3>Found {props.totalItems} results</h3>}
            <div className={s.wrapperBooks}>
                {props.booksData.map(el =>
                    <BooksCards
                        key={el.id}
                        id={el.id}
                        image={el.volumeInfo.imageLinks.smallThumbnail}
                        title={el.volumeInfo.title}
                        categories={el.volumeInfo.categories}
                        authors={el.volumeInfo.authors}
                        isFetching={props.isFetching} />
                )}
            </div>
            {!!(props.booksData.length) && <button className={s.moreButton} onClick={onGetMoreBooks}>Show more</button>}
        </>
    )
}
const mapStateToProps = (state) => ({
    textFromField: state.findBooksPage.textFromField,
    booksData: state.findBooksPage.booksData,
    totalItems: state.findBooksPage.totalItems,
    selectedTheme: state.findBooksPage.selectedTheme,
    selectedRelevance: state.findBooksPage.selectedRelevance,
    isFetching: state.findBooksPage.isFetching
})

export default connect(mapStateToProps, { addBooksFromButton })(BooksCardsContainer);