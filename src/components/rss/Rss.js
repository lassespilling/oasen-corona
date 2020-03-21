import React from "react";
import RssCard from "./RssCard";
import FacebookLogo from "../../assets/facebook.svg";

const Rss = () => {
    return (
        <div className="row mx-auto" id="rss">
            <div className="row p-4" id="hilsen">
                <RssCard
                    logo={FacebookLogo}
                    src="1HiyaYcJyXrKpUEI"
                    title="Oasen - Søgne"
                />
                <RssCard
                    logo={FacebookLogo}
                    src="Xd6rOY38yuFbHPTO"
                    title="Oasen - Mandal"
                />
                <RssCard
                    logo={FacebookLogo}
                    src="zDJdX70kW9sxZIzH"
                    title="Oasen Alive"
                />
                <RssCard
                    logo={FacebookLogo}
                    src="TWlH6bNQpnadojTR"
                    title="Oasen Skolene"
                />
                <RssCard
                    logo={FacebookLogo}
                    src="ceG7HMgU9qbeumdI"
                    title="Spiren Barnehage"
                />
            </div>
        </div>
    );
};

export default Rss;
