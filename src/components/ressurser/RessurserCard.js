import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";

const RessurserCard = ({ titleEmoji, title, subtitle, body, slider }) => {
    return (
        <div className="p-4 my-2 bg-light text-dark rounded shadow row ressurser__card">
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
