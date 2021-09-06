import requestsAPI from "../api/requestsAPI";

const initialState = {
    textFromField: '',
    booksData: [],
    totalItems: null,
    availableThemes: ['all', 'art', 'biography', 'computers', 'medical', 'poetry'],
    selectedTheme: 'all',
    availableRelevance: ['relevance', 'newest'],
    selectedRelevance: 'relevance',
    bookId: null,
    isFetching: false
}


const findBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_BOOK':
            return {
                ...state,
                textFromField: action.text
            }
        case 'SET_BOOKS':
            return {
                ...state,
                booksData: action.data
            }
        case 'TOTAL_ITEMS':
            return {
                ...state,
                totalItems: action.total
            }
        case 'CHOOSE_THEME':
            return {
                ...state,
                selectedTheme: action.theme
            }
        case 'SELECT_RELEVANCE':
            return {
                ...state,
                selectedRelevance: action.rel
            }
        case 'SET_BOOK_ID':
            return {
                ...state,
                bookId: action.id
            }
        case 'ADD_BOOKS':
            return {
                ...state,
                booksData: [...state.booksData, ...action.books]
            }
        case 'FETCH':
            return {
                ...state,
                isFetching: action.toggle
            }
        default:
            return state;
    }
}

export const findBook = (text) => {
    return {
        type: 'FIND_BOOK',
        text
    }
}

export const totalItems = (total) => {
    return {
        type: 'TOTAL_ITEMS',
        total
    }
}

export const selectTheme = (theme) => {
    return {
        type: 'CHOOSE_THEME',
        theme
    }
}

export const setBooks = (data) => {
    return {
        type: 'SET_BOOKS',
        data
    }
}

export const selectRelevance = (rel) => {
    return {
        type: 'SELECT_RELEVANCE',
        rel
    }
}

export const setBookId = (id) => {
    return {
        type: 'SET_BOOK_ID',
        id
    }
}

export const addBooks = (books) => {
    return {
        type: 'ADD_BOOKS',
        books
    }
}

export const toggleIsFetching = (toggle) => {
    return {
        type: 'FETCH',
        toggle
    }
}

export const getBooksFromInput = (text, theme, rel) => dispatch => {
    dispatch(toggleIsFetching(true))
    requestsAPI.getBooks(text, theme, rel)
        .then(response => {
            dispatch(setBooks(response.data.items))
            dispatch(totalItems(response.data.totalItems))
        }).then(() => {
            dispatch(toggleIsFetching(false))
        })
}

export const addBooksFromButton = (text, theme, rel, index) => dispatch => {
    dispatch(toggleIsFetching(true))
    requestsAPI.getBooks(text, theme, rel, index)
        .then(response => {
            dispatch(addBooks(response.data.items))
        }).then(() => {
            dispatch(toggleIsFetching(false))
        })
}

export default findBookReducer;