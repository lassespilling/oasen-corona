import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";

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
                <div className="col-sm-6"></div>
            </div>
        </div>
    );
};

export default RessurserCard;
