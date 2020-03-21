import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Books from "../Books";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const RessurserCard = ({ titleEmoji, title, subtitle, body }) => {
    return (
        <div className="row">
            <div className="p-4 my-2 bg-light text-dark rounded shadow row">
                <div className="col-sm-6 ressurser__card">
                    <h1>
                        <Emoji symbol={titleEmoji} />
                        {title}
                    </h1>
                    <h2 class="my-4">{subtitle}</h2>
                    <p class="mb-4">{body}</p>
                </div>
                <div className="col-sm-6">
                    <Carousel responsive={responsive}>
                        <Books />
                    </Carousel>
                    ;
                </div>
            </div>
        </div>
    );
};

export default RessurserCard;
