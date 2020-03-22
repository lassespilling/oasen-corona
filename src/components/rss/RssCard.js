import React from "react";
import RssList from "./RssList";
import RssWall from "./RssWall";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function RssCard({ logo, src, title }) {
    return (
        <div className="col-xl-6 mb-3">
            <ScrollAnimation animateIn="fadeIn">
                <div className="p-4">
                    <div className="row">
                        <div className="col-sm-12 text-white">
                            <h3>
                                <span className="mr-3">{logo}</span>
                                {/* <img
                                src={logo}
                                width="100"
                                className="mr-3 mb-2"
                                alt="social-media-logo"
                            /> */}
                                {title}
                            </h3>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <RssWall src={src} />
                        </div>
                        <div className="col-md-8">
                            <RssList src={src} />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default RssCard;
