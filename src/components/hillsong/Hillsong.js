import React, { useState } from "react";
import "./hillsong.scss";
// import Emoji from "../layout/Emoji";
import HillsongLive from "./HillsongLive";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Hillsong = () => {
    const placeholder = (
        <>
            <p className="w-100 text-center mb-3">
                Sendingen vil være tilgjengelig her:
            </p>
            <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCYqNUyLIrVPHE5ts6YB5sUg%3Ffbclid%3DIwAR0UFkELl-kpbVJINAMFdq8MuVNxCHwIr8PDCZ4Dbjgq_jcRLH3dJKfLlbc&h=AT2JILWnldFa3tY8Gcntt1Bby59K_WrYAUk57Z_M651foX9a_xHQHzHP-LtKMNVXqL3G0rxg8orH0RcMQOY5Yghde-ruo2m3M8W95Kop7K5fDTVEGTNc--fQyxwXFdKBzARqYtA5_Ghp2H6TCI5KjlFx"
                className="mx-auto"
            >
                <img
                    className="mx-auto w-100"
                    src="https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2020/03/21030133/hsonline-ogimage.jpg"
                    alt="placeholder"
                    style={{ maxWidth: "800px" }}
                ></img>
            </a>
        </>
    );

    const [error, setError] = useState();
    return (
        <section id="ressurser">
            <ScrollAnimation animateIn="fadeIn">
                <div class="container py-5">
                    <div class="row mb-5">
                        <heading class="w-100 mb-5 row">
                            <h1 class="text-center w-100">
                                <img
                                    src="https://du9lyah05zc6l.cloudfront.net/wp-content/themes/hillsong/images/logo-outline-small.png"
                                    width="60px"
                                    className="mr-3 mb-3"
                                    style={{ filter: "invert(1)" }}
                                    alt=""
                                />
                                <FontAwesomeIcon
                                    color="#c4302b"
                                    icon={faYoutube}
                                    className="mr-3"
                                />
                                Hillsong Live
                            </h1>
                            <h2 class="h4 text-center mx-auto">
                                Neste live sending: Søndag 11.00
                            </h2>
                        </heading>
                        <HillsongLive onError={e => setError(placeholder)} />
                        {error}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
};

export default Hillsong;
