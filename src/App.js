import React from "react";
import "./App.scss";
import Intro from "./components/Intro";
// import Corona from "./components/Corona";
import Ressurser from "./components/ressurser/Ressurser";
import Hillsong from "./components/hillsong/Hillsong";
import Footer from "./components/layout/Footer";
import Gave from "./components/Gave";

// get our fontawesome imports
import Rss from "./components/rss/Rss";
import C from "./components/layout/CoronaParticle";

function App() {
    return (
        <div className="App">
            <C speed="500" dir="bottom" size="2" x="80" y="70" />
            <C speed="200" dir="bottom" size="10" x="20" y="20" />
            <C speed="300" dir="bottom" size="35" x="1" y="35" />
            <C speed="500" dir="bottom" size="3" x="5" y="5" blur="1" />
            <C speed="400" dir="bottom" size="5" x="65" y="40" />
            <C speed="300" dir="bottom" size="15" x="80" y="10" blur="1" />
            <C speed="100" dir="bottom" size="25" x="75" y="40" blur="2" />
            <C speed="50" dir="bottom" size="15" x="45" y="80" />
            <Intro />
            <Hillsong />
            <Rss />
            <Ressurser />
            <Gave />
            <Footer />
        </div>
    );
}

export default App;
