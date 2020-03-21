import React from "react";
import "./App.scss";
import Intro from "./components/Intro";
// import Corona from "./components/Corona";
import Ressurser from "./components/ressurser/Ressurser";

import RssList from "./components/rss/RssList";
import FacebookLogo from "./assets/facebook.svg";
import RssCard from "./components/rss/RssCard";

function App() {
    return (
        <div className="App">
            {/* <Books />
            <Intro />
            <div>
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
                            src="zDJdX70kW9sxZIzH"
                            title="Oasen Alive"
                        />
                        <RssCard
                            logo={FacebookLogo}
                            src="TWlH6bNQpnadojTR"
                            title="Oasen Skolene"
                        />
                        <RssCard
                            logo={FacebookLogo}
                            src="ceG7HMgU9qbeumdI"
                            title="Spiren Barnehage"
                        />
                    </div>
                </div>
            </div>
            <Corona /> */}
            <Ressurser />
        </div>
    );
}

export default App;
