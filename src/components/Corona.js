import React from "react";
import logo from "../assets/logo.svg";
import Emoji from "./layout/Emoji";
import "./corona.scss";

class Corona extends React.Component {
    render() {
        return (
            <section id="corona">
                <div class="container pt-5 pb-5">
                    <div className="row mt-5 mb-5">
                        <div className="row">
                            <h2>Corona</h2>
                            <div className="col-sm-12 offset-sm-2 p-4">
                                <p>
                                    Koronavirus er en stor familie av virus.
                                    Noen forårsaker sykdom hos mennesker, andre
                                    smitter bare dyr. I sjeldne tilfeller har
                                    dyrekoronavirus mutert til også å kunne
                                    smitte fra dyr til mennesker og å kunne spre
                                    seg mellom mennesker. Det er dette som antas
                                    å ha skjedd med viruset som forårsaker
                                    covid-19.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5 rounded p-4 bg-faded-brown">
                        <div className="col-sm-6">
                            <img
                                className="w-100"
                                src="https://picsum.photos/1920/1080"
                                alt=""
                            />
                        </div>
                        <div className="col-sm-6">
                            <h3>Wuhan desember 2019</h3>
                            <p>
                                Utbruddet startet i storbyen Wuhan i
                                Hubei-provinsen i Kina i desember 2019, og ble i
                                begynnelsen knyttet til et matmarked i byen.
                                Viruset ble identifisert av kinesiske
                                helsemyndigheter 7. januar 2020.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-sm-6">
                            <h3>Wuhan desember 2019</h3>
                            <p>
                                Corona er latinsk for «krone», og refererer til
                                de karakteristiske piggene som dekker
                                coronavirusene.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <img
                                className="w-100"
                                src="https://picsum.photos/1920/1080"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="row p-5">
                            <div className="col-12 mb-3">
                                <h3>Hvordan forebygge smitte</h3>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 mb-4">
                                <img
                                    className="mb-3 rounded-circle"
                                    src="https://picsum.photos/200"
                                    alt=""
                                    width="100"
                                    height="100"
                                />
                                <h4>Lommetørkle</h4>
                                <p>
                                    Foran munn og nese beskytter andre når du
                                    hoster eller nyser.
                                </p>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 mb-4">
                                <img
                                    className="mb-3 rounded-circle"
                                    src="https://picsum.photos/200"
                                    alt=""
                                    width="100"
                                    height="100"
                                />
                                <h4>Bruk albukroken</h4>
                                <p>
                                    Når du må hoste eller nyse og ikke har
                                    lommetørkle
                                </p>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 mb-4">
                                <img
                                    className="mb-3 rounded-circle"
                                    src="https://picsum.photos/200"
                                    alt=""
                                    width="100"
                                    height="100"
                                />
                                <h4>Vask hendene</h4>
                                <p>
                                    Ofte og grundig, spesielt når du har vært
                                    ute blant folk.
                                </p>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 mb-4">
                                <img
                                    className="mb-3 rounded-circle"
                                    src="https://picsum.photos/200"
                                    alt=""
                                    width="100"
                                    height="100"
                                />
                                <h4>Desinfiser</h4>
                                <p>
                                    Med alkoholholdige midler, når ikke håndvask
                                    er mulig.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Corona;
