import React from "react";
import logo from "../../assets/logo.svg";
import Emoji from "../layout/Emoji";
import "./intro.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
class Intro extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://lasse.media/assets/plax.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <section id="intro" className="container-fluid">
                <div class="container pt-5 pb-5">
                    <ScrollAnimation animateIn="fadeIn">
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
                                Vi er i en unntakstilstand, men Gud er fremdeles
                                Gud. Og kirken er fremdeles kirken. Gud vil være
                                vår stødige klippe og våre utømmelige kilde til
                                liv, også når vi ikke kan treffes fysisk. Denne
                                hjelpesiden samler alt fra Oasen på et sted. Vi
                                ønsker også å høre fra deg i denne tiden, så ta
                                mer enn gjerne kontakt nederst på siden!
                                <Emoji symbol="❤️" label="heart" />
                                <Emoji symbol="😊" label="smile" />
                            </p>
                            <p class="author text-right">- Pastor Daniel</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;
