import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
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
        breakpoint: { max: 1024, min: 800 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1
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
            autoPlay={true}
            autoPlaySpeed={3000}
            className="rounded"
        >
            {items.map(item => (
                <div className="p-1">
                    <div className="overflow-hidden w-100">
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOnce="true"
                        >
                            <img
                                style={{ objectFit: "cover" }}
                                src={item.thumbnail}
                                alt=""
                                draggable="false"
                                className="w-100 rounded"
                                height="300"
                            />
                        </ScrollAnimation>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};
