import React from 'react';
import s from './BooksPage.module.css'

const BooksPage = (props) => {

    return (<div className={s.wrapperPage}>
        <div className={s.imageblock}>
            <img className={s.imagePage} src={props.selectedBook.imageLinks.thumbnail} alt='' />
        </div>
        <div className={s.aboutPage}>
            <div className={s.categoriesPage}>{props.selectedBook.categories.map(cath => <span key={cath}> {cath} </span>)}</div>
            <div className={s.titlePage}>{props.selectedBook.title}</div>
            <div className={s.authorsPage}>{props.selectedBook.authors[0]}</div>
            <div className={s.descriptionPage}>{props.selectedBook.description}</div>
        </div>
    </div>
    )
}

export default BooksPage