import React, { useState, useEffect } from "react";
import { fetchSlides } from "../services/slides.service";
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

const Slides = () => {
    const [books, setSlides] = useState([]);
    useEffect(() => {
        fetchSlides().then(setSlides);
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
                <img className="w-100" src={book.thumbnail} alt="" />
            ))}
        </Carousel>
    );
};

export default Slides;
