import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})

const ApiKey = 'AIzaSyAuyb5oH7QI9m1KI4unkwi0i8f-AirshXw';

const requestsAPI = {
    getBooks(booksName, theme, relevant, index = 0) {
        return instance.get(`volumes?q=${booksName}+subject=${theme}&startIndex=${index}&maxResults=30&orderBy=${relevant}&key=${ApiKey}`)
    }
}
export default requestsAPI;

// https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=relevance&key=AIzaSyAuyb5oH7QI9m1KI4unkwi0i8f-AirshXw