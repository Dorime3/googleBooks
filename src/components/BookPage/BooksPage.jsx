import React from 'react';
import s from './BooksPage.module.css'

const BooksPage = (props) => {
    const { categories, title, authors, description, imageLinks } = props.selectedBook
    return (<div className={s.wrapperPage}>
        <div className={s.imageblock}>
            {imageLinks.thumbnail && <img className={s.imagePage} src={imageLinks.thumbnail} alt='' />}
        </div>
        <div className={s.aboutPage}>
            {categories && <div className={s.categoriesPage}>{categories.map(cath => <span key={cath}> {cath} </span>)}</div>}
            {title && <div className={s.titlePage}>{title}</div>}
            {authors && <div className={s.authorsPage}>{authors[0]}</div>}
            {description && <div className={s.descriptionPage}>{description}</div>}
        </div>
    </div>
    )
}

export default BooksPage