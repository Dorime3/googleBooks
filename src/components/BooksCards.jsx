import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MyBooks.module.css'


const BooksCards = ({ image, categories, title, authors, id }) => {
    return (
        <div className={s.book} >
            <NavLink to={'/bookpage/' + id}>
                <img src={image} alt='books cover is`not found' />
            </NavLink>
            {categories
                ? <div>{categories[0]}</div>
                : <div></div>
            }
            <div>{title}</div>
            {authors
                ? <div>{authors.map(autr => <span key={autr}>{autr}</span>)}</div>
                : <div></div>
            }
        </div>
    )
}

export default BooksCards;