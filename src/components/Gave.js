import React from "react";
import Emoji from "./layout/Emoji";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./gave.scss";

const Gave = () => {
    return (
        <section
            className="p-5"
            style={{ background: "yellow", color: "purple" }}
            id="gave"
        >
            <ScrollAnimation animateIn="fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-5">
                            <h1 className="mx-auto w-100 mb-5 text-center">
                                <span className="mr-3">
                                    <div className="heartbeat">
                                        <ScrollAnimation
                                            animateIn="pulse"
                                            animateOnce="true"
                                        >
                                            <Emoji symbol="❤️" label="heart" />
                                        </ScrollAnimation>
                                    </div>
                                </span>
                                <span>Gi en gave?</span>
                            </h1>
                            <p>
                                Å drive menighet i en tid som dette kan være
                                krevende, samtidig forstår vi at dette kan være
                                en vanskelig tid økonomisk for mange. Hvis du
                                allikevel har muligheten til å investere noen
                                kroner i menigheten hadde vi satt veldig pris på
                                det.
                            </p>
                        </div>
                        <div className="col-sm-12 mx-auto mb-5">
                            <div className="vipps ml-4 row text-center">
                                <div className="col-6 mt-2 text-right">
                                    <img
                                        src="https://www.vipps.no/static/vipps_theme/1.0.51/media/extra-images/vipps-logo.svg"
                                        width="150px"
                                        alt="vipps logo mx-3"
                                    ></img>
                                </div>
                                <div className="col-6">
                                    <p
                                        className="h1 text-left"
                                        style={{ color: "#ff5c24" }}
                                    >
                                        <b>13067</b>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <a
                                    href="https://oasen.org/bli-med/gi-en-gave/"
                                    className="mx-auto btn btn-large my-3 btn-outline-dark"
                                >
                                    {" "}
                                    <b>Les mer</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
};

export default Gave;
