import React from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";
import RessurserCard from "./RessurserCard";
import Books from "../Books";
import Streaming from "../Streaming";

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
                    slider={<Books />}
                />
                <RessurserCard
                    titleEmoji="📽"
                    title="Streaming"
                    subtitle="Med mange streamingmuligheter
kan det være vanskelig å velge"
                    body="Det finnes mye bra, men det krever at en kommer gjennom jungelen av ukjente,  destruktive og rett og slett dårlige film og tv-produksjoner. Det finnes mye som ikke akkurat gjør deg til et klokere eller bedre menneske, derfor har vi gjort jobben med å gå igjennom streamingtjenester, filmer og tv-serier som vi vet er bra!"
                    slider={<Streaming />}
                />
                <RessurserCard
                    titleEmoji="🎲"
                    title="Spill"
                    subtitle="Fra terning, kort, brett
og kontroller, gir vi deg tipsene."
                    body="Det finnes mye bra, men det krever at en kommer gjennom jungelen av ukjente,  destruktive og rett og slett dårlige film og tv-produksjoner. Det finnes mye som ikke akkurat gjør deg til et klokere eller bedre menneske, derfor har vi gjort jobben med å gå igjennom streamingtjenester, filmer og tv-serier som vi vet er bra!"
                    slider={<Streaming />}
                />
                <RessurserCard
                    titleEmoji="⛪︎"
                    title="Kirke"
                    subtitle="Når brorskap uteblir,
er bønn og bibel desto viktigere."
                    body="I Oasen har vi valgt å følge online gudstjenestene til Hillsong, lifegruppene vil ha videosamtaler med opplegg tilpasset talene fra Hillsong. Samtidig er det også mange andre rescuer der ute som vi anbefaler deg å ta nytte av i denne tiden."
                    slider={<Streaming />}
                />
                <RessurserCard
                    titleEmoji="⛪︎"
                    title="Bibelvers"
                    subtitle="Last ned bibelvers som bakgrunn til telefonen
eller print ut og
heng på veggen"
                    slider={<Streaming />}
                />
                <RessurserCard
                    titleEmoji="🏋️‍♂️"
                    title="Bibelvers"
                    subtitle="Med stengte treningssentre
og en innendørs hverdag kan mosjon
være mer utfordrende enn vanlig."
                    body="Det er nok de færreste som har treningssenter hjemme, og mange hverken tør eller bør bevege seg mye utendørs. Det finnes derimot mange gratis ressurser om tilbyr treningsopplegg for de som er hjemme uten utstyr."
                    slider={<Streaming />}
                />
            </div>
        </section>
    );
};

export default Ressurser;
