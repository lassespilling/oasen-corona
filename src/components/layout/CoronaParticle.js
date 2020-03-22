import React from "react";

const CoronaParticle = ({ speed, dir, id, size, x,y,blur }) => {
    return (
        <span
            className="plax"
            data-jsuplxdir={dir}
            data-jsuplxperspective={speed}
        >
            <div className="coronaparticle" id={`coronaparticle${id}`} style={{top: y+"vh", left: x+"vw", width: size+"vmin", height:size+"vmin", filter: `blur(${blur}px)`}}></div>
        </span>
    );
};

export default CoronaParticle;
