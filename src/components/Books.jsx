import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../services/book.service';

export default () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(fetchBooks());
    }, []);

    return (
        <>
            {books.map(book => (
                <img src={book.thumbnail} width="64px"></img>
            ))}
        </>
    );
}