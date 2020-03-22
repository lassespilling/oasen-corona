import React from "react";
import logo from "../assets/logo.svg";
import Emoji from "./layout/Emoji";
import "./intro.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import C from "./layout/CoronaParticle";
class Intro extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://lasse.media/assets/plax.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <section id="intro">
            <C speed="500" dir="bottom" size="2" x="80" y="70"/>
            <C speed="200" dir="bottom" size="10" x="20" y="20"/>
            <C speed="300" dir="bottom" size="35" x="1" y="35"/>
            <C speed="500" dir="bottom" size="3" x="5" y="5" blur="1"/>
            <C speed="400" dir="bottom" size="5" x="65" y="40"/>
            <C speed="300" dir="bottom" size="15" x="80" y="10" blur="1"/>
            <C speed="100" dir="bottom" size="25" x="85" y="40" blur="2"/>
            <C speed="50" dir="bottom" size="15" x="45" y="80"/>
                <div class="container pt-5 pb-5">
                    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                        <div class="row text-center pb-5">
                            <div class="col-12">
                                <img
                                    src={logo}
                                    className="App-logo mb-4"
                                    alt="logo"
                                />
                                <h1 class="text-uppercase">
                                    <div class="subtitle">Hjelpeside under</div>
                                    <div>Corona</div>
                                </h1>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="fadeIn"
                        animateOnce="true"
                    ></ScrollAnimation>
                    <div className="row" id="hilsen">
                        <div className="col-sm-8 mx-auto p-4 bg-light text-dark rounded shadow">
                            <p>
                                Vi er i en rar periode, mange har alle barna
                                hjemme, samtidig som de prøver å jobbe. Noen
                                sitter i karantene, noen er bekymret for hva
                                viruset kan gjøre hvis man selv eller noen av de
                                nærmeste blir smittet, noen er bekymret for
                                økonomien sin, for arbeidsplassen sin osv. Men
                                er det en ting mange av oss plutselig har fått
                                litt mer av, så er det nettopp tid!
                                <Emoji symbol="❤️" label="heart" />
                                <Emoji symbol="😊" label="smile" />
                            </p>
                            <p class="author text-right">- Daniel K.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;
