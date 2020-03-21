import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";

const RessurserCard = ({
    bg,
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
                background: `url('${bg}')`,
                color: `url('${color}')`
            }}
            className="p-4 my-2 bg-light rounded shadow row ressurser__card"
        >
            <div className="col-sm-12 my-5">
                <h1>
                    <Emoji symbol={titleEmoji} />
                    {title}
                </h1>
                <h2 class="my-4">{subtitle}</h2>
                <p class="my-1">{body}</p>
            </div>
            <div className="col-sm-12">{slider}</div>
        </div>
    );
};

export default RessurserCard;
