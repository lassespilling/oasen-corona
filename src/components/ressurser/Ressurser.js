import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";
import RessurserCard from "./RessurserCard";
import Slides from "../Slides";

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
                    titleEmoji="📚"
                    title="Bøker"
                    subtitle="Med mer tid alene har vi
også en mulighet til å lese og lære"
                    body="Om du foretrekker selvhjelpsbøker, religiøse bøker, krim eller kanskje Donald pocket, så finnes det mange ressurser tilgjengelig på nett som gjør det mulig å lese."
                    topRight="Vi anbefaler"
                    slider={<Slides />}
                />
                <RessurserCard
                    titleEmoji="📚"
                    title="Streaming"
                    subtitle="Med mange streamingmuligheter
kan det være vanskelig å velge"
                    body="Det finnes mye bra, men det krever at en kommer gjennom jungelen av ukjente,  destruktive og rett og slett dårlige film og tv-produksjoner. Det finnes mye som ikke akkurat gjør deg til et klokere eller bedre menneske, derfor har vi gjort jobben med å gå igjennom streamingtjenester, filmer og tv-serier som vi vet er bra!"
                    topRight="Vi anbefaler"
                    slider={<Slides />}
                />
            </div>
        </section>
    );
};

export default Ressurser;
