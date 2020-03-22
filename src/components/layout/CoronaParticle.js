import React from "react";

const CoronaParticle = ({ speed, dir, size, x, y, blur }) => {
    return (
        <span
            className="plax position-absolute hideonsmheight"
            data-jsuplxdir={dir}
            data-jsuplxperspective={speed}
            style={{
                top: y + "vh",
                left: x + "vw",
                width: size + "vmin",
                height: size + "vmin",
                filter: `blur(${blur}px)`
            }}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png"
                alt=""
                className="w-100"
            />
        </span>
    );
};

export default CoronaParticle;
