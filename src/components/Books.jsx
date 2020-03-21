import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/book.service";

export default () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    return (
        <>
            {books.map(book => (
                <div>
                    <img src={book.thumbnail} width="64px"></img>
                </div>
            ))}
        </>
    );
};
