import React from "react";
import "./hillsong.scss";
// import Emoji from "../layout/Emoji";
import HillsongLive from "./HillsongLive";

const Hillsong = () => {
    return (
        <section id="ressurser">
            <div class="container py-5">
                <div class="row mb-5">
                    <h1 class="text-center">Neste tale fra hillsong</h1>
                    <HillsongLive />;
                </div>
            </div>
        </section>
    );
};

export default Hillsong;
