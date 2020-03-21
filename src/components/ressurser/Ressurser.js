import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";
import RessurserCard from "./RessurserCard";
import Books from "../Books";

const Ressurser = () => {
    return (
        <section id="ressurser">
            <div class="container py-5">
                <div class="row mb-5">
                    <h1 class="w-100">
                        <Emoji symbol="📚" label="books" />
                        <Emoji symbol="📽" label="movies" />
                        <Emoji symbol="🎲" label="games" />
                        <Emoji symbol="⛪︎" label="church" />
                        <Emoji symbol="🏋️‍♂️" label="gym" />
                        <br></br>
                        Ressurser
                    </h1>
                    <h2 class="w-100">Tips og triks til den nye hverdagen</h2>
                </div>
                <RessurserCard
                    title="Hverdagen"
                    subtitle="Hverdagen har brått endret seg for mange av oss"
                    body="Hverdagen er brått blitt endret for mange mennesker.
                        Flere jobber hjemmefra og mange arbeidsplasser og
                        privatpersoner kjenner på trykket. Barna er hjemme,
                        skoler og samlingsplasser er stengt og mange av oss
                        kjenner nok at dette er en ensom og isolert tid."
                />
                <RessurserCard
                    titleEmoji="📚"
                    title="Bøker"
                    subtitle="Med mer tid alene har vi
også en mulighet til å lese og lære"
                    body="Om du foretrekker selvhjelpsbøker, religiøse bøker, krim eller kanskje Donald pocket, så finnes det mange ressurser tilgjengelig på nett som gjør det mulig å lese."
                />
            </div>
        </section>
    );
};

export default Ressurser;
