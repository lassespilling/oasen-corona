import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";

const RessurserCard = ({
    titleEmoji,
    title,
    subtitle,
    body,
    slider,
    topRight
}) => {
    return (
        <div className="p-4 my-2 bg-light text-dark rounded shadow row ressurser__card">
            <div className="col-sm-12">
                <h1>
                    <Emoji symbol={titleEmoji} />
                    {title}
                </h1>
                <h2>{subtitle}</h2>
                <p>{body}</p>
            </div>
            <div className="col-sm-12">
                <h3 class="text-right">{topRight}</h3>
                {slider}
            </div>
        </div>
    );
};

export default RessurserCard;
