import React, { component } from "react";
import RssList from "./RssList";
import RssWall from "./RssWall";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function RssCard({ logo, src, title, variant = "default", classes }) {
    const checkVariant = () => {
        if (variant === "default") {
            return (
                <>
                    <div className="col-md-4 d-none d-md-block">
                        <RssWall src={src} />
                    </div>
                    <div className="col-md-8">
                        <RssList src={src} />
                    </div>
                </>
            );
        } else if (variant === "wall") {
            return (
                <div className="col-12">
                    <RssWall src={src} />
                </div>
            );
        }
    };
    return (
        <div className={classes}>
            <ScrollAnimation animateIn="fadeIn">
                <div>
                    <div className="row">
                        <div className="col-sm-12 text-white">
                            <h3>
                                <span className="mr-3">{logo}</span>
                                {title}
                            </h3>
                        </div>
                        {checkVariant()}
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default RssCard;
