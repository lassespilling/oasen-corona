import React, { useState } from "react";
import "./hillsong.scss";
// import Emoji from "../layout/Emoji";
import HillsongLive from "./HillsongLive";

const Hillsong = () => {
    const placeholder = (<img src="https://i.picsum.photos/id/794/200/200.jpg" alt="placeholder"></img>);
    const [error, setError] = useState();
    return (
        <section id="ressurser">
            <div class="container py-5">
                <div class="row mb-5">
                    <h1 class="text-center mx-auto">Neste tale fra hillsong</h1>
                    <HillsongLive onError={(e) => setError(placeholder)}/>
                    {error}
                </div>
            </div>
        </section>
    );
};

export default Hillsong;
