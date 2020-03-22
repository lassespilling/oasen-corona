import React from "react";
import RssCard from "./RssCard";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Rss = () => {
    return (
        <div className="row mx-auto" id="rss">
            <div className="row p-4" id="hilsen">
                <div className="col-8 mx-auto my-5">
                    <ScrollAnimation animateIn="fadeIn">
                        <img src={logo} className="App-logo mb-4" alt="logo" />
                        <h1>Hold deg oppdatert</h1>
                    </ScrollAnimation>
                </div>
                <RssCard
                    logo={<FontAwesomeIcon icon={faFacebook} />}
                    src="1HiyaYcJyXrKpUEI"
                    title="Oasen - Søgne"
                />
                {/* <RssCard
                    logo={<FontAwesomeIcon icon={faFacebook} />}
                    src="Xd6rOY38yuFbHPTO"
                    title="Oasen - Mandal"
                /> */}
                <RssCard
                    logo={<FontAwesomeIcon icon={faInstagram} />}
                    src="zDJdX70kW9sxZIzH"
                    title="Oasen Alive"
                />
                <RssCard
                    logo={<FontAwesomeIcon icon={faFacebook} />}
                    src="TWlH6bNQpnadojTR"
                    title="Oasen Skolene"
                />
                <RssCard
                    logo={<FontAwesomeIcon icon={faFacebook} />}
                    src="ceG7HMgU9qbeumdI"
                    title="Spiren Barnehage"
                />
            </div>
        </div>
    );
};

export default Rss;
