import React, { useState, useEffect } from "react";
import "./ressurser.scss";
import Emoji from "../layout/Emoji";
import RessurserCard from "./RessurserCard";
import Carousel from "../Carousel";
import {
    fetchBooks,
    fetchStreaming,
    fetchSpill,
    fetchKirke,
    fetchBibelvers,
    fetchMosjon
} from "../../services/slides.service";

const Ressurser = () => {
    const [streaming, setStreaming] = useState([]);
    useEffect(() => {
        fetchStreaming().then(setStreaming);
    }, []);

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    const [spill, setSpill] = useState([]);
    useEffect(() => {
        fetchSpill().then(setSpill);
    }, []);

    const [kirke, setKirke] = useState([]);
    useEffect(() => {
        fetchKirke().then(setKirke);
    }, []);

    const [bibelvers, setBibelvers] = useState([]);
    useEffect(() => {
        fetchBibelvers().then(setBibelvers);
    }, []);

    const [mosjon, setMosjon] = useState([]);
    useEffect(() => {
        fetchMosjon().then(setMosjon);
    }, []);

    return (
        <section id="ressurser">
            <div class="container py-5">
                <div class="row my-5">
                    <h1 class="w-100">
                        <Emoji symbol="📚" label="books" />
                        <Emoji symbol="📽" label="movies" />
                        <Emoji symbol="🎲" label="games" />
                        <Emoji symbol="⛪︎" label="church" />
                        <Emoji symbol="🏋️‍♂️" label="gym" />
                        <br></br>
                        <span class="mt-5 d-block">Ressurser</span>
                    </h1>
                    <h2 class="w-100 mb-5">
                        Tips og triks til den nye hverdagen
                    </h2>
                </div>
                <RessurserCard
                    bg="https://www.xmple.com/wallpaper/black-brown-gradient-linear-1920x1080-c2-000000-cd853f-a-90-f-14.svg"
                    color="white"
                    titleEmoji="📚"
                    title="Bøker"
                    subtitle="Med mer tid alene har vi
også en mulighet til å lese og lære"
                    body="Om du foretrekker selvhjelpsbøker, religiøse bøker, krim eller kanskje Donald pocket, så finnes det mange ressurser tilgjengelig på nett som gjør det mulig å lese."
                    slider={<Carousel items={books} />}
                />
                <RessurserCard
                    bg="https://addons-media.operacdn.com/media/CACHE/images/themes/85/59785/1.0-rev1/images/45fcedea-f252-4df5-b968-f4ff38a3dca1/d1746aaeceabeea2ebee391b283e8f76.jpg"
                    color="white"
                    overlay="rgba(0,0,0,0.5)"
                    titleEmoji="📽"
                    title="Streaming"
                    subtitle="Med mange streamingmuligheter
kan det være vanskelig å velge"
                    body="Det finnes mye bra, men det krever at en kommer gjennom jungelen av ukjente,  destruktive og rett og slett dårlige film og tv-produksjoner. Det finnes mye som ikke akkurat gjør deg til et klokere eller bedre menneske, derfor har vi gjort jobben med å gå igjennom streamingtjenester, filmer og tv-serier som vi vet er bra!"
                    slider={<Carousel items={streaming} />}
                />
                <RessurserCard
                    bg="https://cdn.dribbble.com/users/247458/screenshots/5083720/wallpaper2.jpg"
                    color="white"
                    overlay="rgba(0,0,0,0.5)"
                    titleEmoji="🎲"
                    title="Spill"
                    subtitle="Fra terning, kort, brett
og kontroller, gir vi deg tipsene."
                    body="Det finnes mye bra, men det krever at en kommer gjennom jungelen av ukjente,  destruktive og rett og slett dårlige film og tv-produksjoner. Det finnes mye som ikke akkurat gjør deg til et klokere eller bedre menneske, derfor har vi gjort jobben med å gå igjennom streamingtjenester, filmer og tv-serier som vi vet er bra!"
                    slider={<Carousel items={spill} />}
                />
                <RessurserCard
                    bg="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4702711/300/200/m2/fpnw/wm0/hg6yecrq7vuilyyr2r8qj9rhmn5u95yjxvbz6jdix5cxmuzyddhzfoplg2wlkix6-.jpg?1530644796&s=a965adc2444b000292186a0b9f275d58"
                    color="white"
                    overlay="rgba(0,0,0,0.5)"
                    titleEmoji="⛪︎"
                    title="Kirke"
                    subtitle="Når brorskap uteblir,
er bønn og bibel desto viktigere."
                    body="I Oasen har vi valgt å følge online gudstjenestene til Hillsong, lifegruppene vil ha videosamtaler med opplegg tilpasset talene fra Hillsong. Samtidig er det også mange andre rescuer der ute som vi anbefaler deg å ta nytte av i denne tiden."
                    slider={<Carousel items={kirke} />}
                />
                <RessurserCard
                    bg="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4702711/300/200/m2/fpnw/wm0/hg6yecrq7vuilyyr2r8qj9rhmn5u95yjxvbz6jdix5cxmuzyddhzfoplg2wlkix6-.jpg?1530644796&s=a965adc2444b000292186a0b9f275d58"
                    color="white"
                    overlay="rgba(0,0,0,0.5)"
                    titleEmoji="⛪︎"
                    title="Bibelvers"
                    subtitle="Last ned bibelvers som bakgrunn til telefonen
eller print ut og
heng på veggen"
                    slider={<Carousel items={bibelvers} />}
                />
                <RessurserCard
                    bg="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v384-ning-03b-gradientbg_2.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=551a4fe3e20bf7d62ff98f7a007c30d0"
                    color="white"
                    overlay="rgba(0,0,0,0.5)"
                    titleEmoji="🏋️‍♂️"
                    title="Mosjon"
                    subtitle="Med stengte treningssentre
og en innendørs hverdag kan mosjon
være mer utfordrende enn vanlig."
                    body="Det er nok de færreste som har treningssenter hjemme, og mange hverken tør eller bør bevege seg mye utendørs. Det finnes derimot mange gratis ressurser om tilbyr treningsopplegg for de som er hjemme uten utstyr."
                    slider={<Carousel items={mosjon} />}
                />
            </div>
        </section>
    );
};

export default Ressurser;
