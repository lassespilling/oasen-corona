import React from "react";

const C = ({ speed, dir, id, size, x,y,blur }) => {
    return (
        <span
            className="plax"
            style={{width:"100vw", height: "100vh", position: "absolute"}}
            data-jsuplxdir={dir}
            data-jsuplxperspective={speed}
        >
            <div className="coronaparticle" id={`coronaparticle${id}`} style={{top: y+"vh", left: x+"vw", width: size+"vmin", height:size+"vmin", filter: `blur(${blur}px)`}}></div>
        </span>
    );
};

export default C;
