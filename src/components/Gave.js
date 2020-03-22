import React from "react";
import Emoji from "./layout/Emoji";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Gave = () => {
    return (
        <section
            className="container p-5"
            style={{ background: "yellow", color: "purple" }}
        >
            <ScrollAnimation animateIn="fadeIn">
                <div className="row">
                    <div className="col-sm-12 mb-5  text-center">
                        <h1 className="mx-auto w-100 mb-5">
                            <span className="mr-3">
                                <div className="heartbeat">
                                    <ScrollAnimation animateIn="pulse">
                                        <Emoji symbol="❤️" label="heart" />
                                    </ScrollAnimation>
                                </div>
                            </span>
                            <span>Gi en gave?</span>
                        </h1>
                        <p>
                            Å drive menighet i en tid som dette kan være
                            krevende, samtidig forstår vi at dette kan være en
                            vanskelig tid økonomisk for mange. Hvis du allikevel
                            har muligheten til å investere noen kroner i
                            menigheten hadde vi satt veldig pris på det.
                        </p>
                    </div>
                    <div className="col-sm-12 mx-auto text-center mb-5">
                        <h3 className="mb-3">Gi med Vipps</h3>
                        <div className="vipps ml-4">
                            <ScrollAnimation animateIn="pulse" className="row">
                                <img
                                    src="https://www.vipps.no/static/vipps_theme/1.0.51/media/extra-images/vipps-logo.svg"
                                    width="150px"
                                    className="ml-auto"
                                    alt="vipps logo mx-3 col-6"
                                ></img>
                                <p
                                    className="h1 text-left mx-3 col-6"
                                    style={{ color: "#ff5c24" }}
                                >
                                    <b>13067</b>
                                </p>
                            </ScrollAnimation>
                        </div>
                        <a
                            href="https://oasen.org/bli-med/gi-en-gave/"
                            className="btn btn-large my-3 btn-outline-dark"
                        >
                            {" "}
                            <b>Les mer</b>
                        </a>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
};

export default Gave;
