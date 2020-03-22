import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";

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
                    <h1 style={{ marginLeft: "-4rem" }}>
                        <span className="mr-4">
                            <Emoji symbol={titleEmoji} />
                        </span>
                        {title}
                    </h1>
                    <h2 class="my-4">{subtitle}</h2>
                    <p class="my-1">{body}</p>
                </div>
                <div className="col-sm-12">{slider}</div>
            </div>
        </div>
    );
};

export default RessurserCard;
