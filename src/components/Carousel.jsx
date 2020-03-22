import React from "react";
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

export default props => {
    const { items } = props;
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
            {items.map(item => (
                <div className="overflow-hidden w-100">
                    <img
                        style={{ objectFit: "cover" }}
                        src={item.thumbnail}
                        alt=""
                        draggable="false"
                        className="w-100"
                        height="200"
                    />
                </div>
            ))}
        </Carousel>
    );
};
