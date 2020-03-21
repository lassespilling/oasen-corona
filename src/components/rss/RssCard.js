import React from "react";
import RssList from "./RssList";
import RssWall from "./RssWall";

function RssCard({ logo, src, title }) {
    return (
        <div className="col-xl-6 mb-3">
            <div className="p-4 bg-light text-dark rounded shadow">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>
                            <img
                                src={logo}
                                width="100"
                                className="mr-3 mb-2"
                                alt="social-media-logo"
                            />
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
        </div>
    );
}

export default RssCard;
