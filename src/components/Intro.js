import React from "react";
import logo from "../assets/logo.svg";
import Emoji from "./layout/Emoji";
import "./intro.scss";
class Intro extends React.Component {
    render() {
        return (
            <section id="intro">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png"
                    alt=""
                />
                <div class="container pt-5 pb-5">
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
