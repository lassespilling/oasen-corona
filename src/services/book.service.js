import data from './data.json';

export const fetchBooks = () => {
    return Promise.resolve(data.books);
}
