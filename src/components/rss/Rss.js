import React from "react";
import RssCard from "./RssCard";
import RssWall from "./RssWall";
import {
    faFacebook,
    faInstagram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./rss.scss";
const colors = {
    facebook: "#3b5998",
    youtube: "#c4302b",
    instagram: "orange"
};

const Rss = () => {
    return (
        <div className="mx-auto" id="rss">
            <div className="container">
                <div className="row p-4" id="hilsen">
                    <div className="mx-auto p-3 my-5">
                        <ScrollAnimation animateIn="fadeIn">
                            <img
                                src={logo}
                                className="App-logo mb-4"
                                alt="logo"
                            />
                            <h1>Hold deg oppdatert</h1>
                        </ScrollAnimation>
                    </div>
                    {/* <RssCard
                        logo={
                            <FontAwesomeIcon
                                icon={faYoutube}
                                color={colors.youtube}
                            />
                        }
                        src="wWgOYyZzLiVA9AdR"
                        title="Oasen - Siste videoer"
                    /> */}
                    <RssCard
                        logo={
                            <FontAwesomeIcon
                                icon={faFacebook}
                                color={colors.facebook}
                            />
                        }
                        src="1HiyaYcJyXrKpUEI"
                        title="Oasen - Søgne"
                    />
                    <RssCard
                        logo={
                            <FontAwesomeIcon
                                icon={faFacebook}
                                color={colors.facebook}
                            />
                        }
                        src="Xd6rOY38yuFbHPTO"
                        title="Oasen - Mandal"
                    />
                    <RssCard
                        logo={
                            <FontAwesomeIcon
                                icon={faInstagram}
                                color={colors.instagram}
                                id="insta"
                            />
                        }
                        src="zDJdX70kW9sxZIzH"
                        title="Oasen Alive"
                    />
                    <RssCard
                        logo={
                            <FontAwesomeIcon
                                icon={faFacebook}
                                color={colors.facebook}
                            />
                        }
                        src="TWlH6bNQpnadojTR"
                        title="Oasen Skolene"
                    />
                    <RssCard
                        logo={
                            <FontAwesomeIcon
                                icon={faFacebook}
                                color={colors.facebook}
                            />
                        }
                        src="ceG7HMgU9qbeumdI"
                        title="Spiren Barnehage"
                    />
                </div>
            </div>
        </div>
    );
};

export default Rss;
