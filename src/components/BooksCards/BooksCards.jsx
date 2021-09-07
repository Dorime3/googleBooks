import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MyBooksCards.module.css'


const BooksCards = ({ image, categories, title, authors, id, isFetching }) => {
    return (
        <div className={s.book} >
            <div className={s.wrapperBook}>
                <NavLink to={'/bookpage/' + id}>
                    <img src={image} className={s.bookImage} alt='books cover is`not found' />
                </NavLink>
                <div className={s.bookParams}>
                    {categories
                        ? <div className={s.categoryBook}>{categories[0]}</div>
                        : <div></div>
                    }
                    <div className={s.titleBook}>{title}</div>
                    {authors
                        ? <div className={s.authorsBook}>{authors.map(autr => <span key={autr}>{autr}. </span>)}</div>
                        : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default BooksCards;