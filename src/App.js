import React from "react";
import "./App.scss";
import Intro from "./components/Intro";
import Corona from "./components/Corona";
import Books from "./components/Books";

function App() {
    return (
        <div className="App">
            <Intro />
            <Books />
            <Corona />
        </div>
    );
}

export default App;
