import React from "react";
import "./App.scss";
import Intro from "./components/Intro";
// import Corona from "./components/Corona";
import Ressurser from "./components/ressurser/Ressurser";
// import Hillsong from "./components/hillsong/Hillsong";

import Rss from "./components/rss/Rss";

function App() {
    return (
        <div className="App">
            {/* <Hillsong /> */}
            <Intro />
            <Rss />
            <Ressurser />
        </div>
    );
}

export default App;
