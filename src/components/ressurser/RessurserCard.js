import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const RessurserCard = ({
    bg,
    overlay,
    color,
    titleEmoji,
    title,
    subtitle,
    body,
    slider
}) => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div
                style={{
                    background: `url('${bg}') center center / cover no-repeat`,
                    color: color
                }}
                className="my-5 bg-light rounded shadow ressurser__card"
            >
                <div
                    className="p-4 m-0 rounded row"
                    style={{
                        background: overlay
                    }}
                >
                    <div className="col-sm-12 my-5">
                        <h1>
                            <span className="mr-4">
                                <Emoji symbol={titleEmoji} />
                            </span>

                            <ScrollAnimation
                                animateIn="fadeInDown"
                                animateOnce="true"
                            >
                                {title}
                            </ScrollAnimation>
                        </h1>
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOnce="true"
                        >
                            <h2 class="my-4">{subtitle}</h2>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOnce="true"
                        >
                            <p class="my-1">{body}</p>
                        </ScrollAnimation>
                    </div>
                    <div className="col-sm-12">{slider}</div>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default RessurserCard;
