import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/slides.service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 3
    }
};

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    return (
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
        >
            {books.map(book => (
                <img
                    className="w-100"
                    src={book.thumbnail}
                    alt=""
                    draggable="false"
                />
            ))}
        </Carousel>
    );
};

export default Books;
