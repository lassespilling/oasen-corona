import React from "react";
import "./App.scss";
import Intro from "./components/Intro";
import RssList from "./components/rss/RssList";
import FacebookLogo from "./assets/facebook.svg";
import RssCard from "./components/rss/RssCard";
// import Corona from "./components/Corona";

function App() {
    return (
        <div className="App">
            <Intro />
            <div class="rss">
                <div className="row mx-auto">
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
                            src="TWlH6bNQpnadojTR"
                            title="Oasen Skolene"
                        />
                    </div>
                    <div className="col-sm-4 p-0">
                        <h3>Oasen Søgne</h3>
                        <RssList src="1HiyaYcJyXrKpUEI" />
                    </div>
                    <div className="col-sm-4 p-0">
                        <h3>Oasen Mandal</h3>
                        <RssList src="Xd6rOY38yuFbHPTO" />
                    </div>
                    <div className="col-sm-4 p-0">
                        <h3>Oasen Alive</h3>
                        <RssList src="zDJdX70kW9sxZIzH" />
                    </div>
                    <div className="col-sm-4 p-0">
                        <h3>Spiren Barnehage</h3>
                        <RssList src="ceG7HMgU9qbeumdI" />
                    </div>
                    <div className="col-sm-4 p-0">
                        <h3>Oasen Skolene</h3>
                        <RssList src="TWlH6bNQpnadojTR" />
                    </div>
                </div>
            </div>
            {/* <Corona /> */}
        </div>
    );
}

export default App;
