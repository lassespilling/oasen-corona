// import data from "./data.json";

export const fetchBooks = () => {
    return fetch(
        "https://lk85qrxa.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ query: "{allBook{title, thumbnail}}" })
        }
    )
        .then(r => r.json())
        .then(d => d.data.allBook);
};
export const fetchStreaming = () => {
    return fetch(
        "https://lk85qrxa.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ query: "{allStream{title, thumbnail}}" })
        }
    )
        .then(r => r.json())
        .then(d => d.data.allStream);
};
export const fetchSpill = () => {
    return fetch(
        "https://lk85qrxa.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ query: "{allGame{title, thumbnail}}" })
        }
    )
        .then(r => r.json())
        .then(d => d.data.allGame);
};
export const fetchKirke = () => {
    return fetch(
        "https://lk85qrxa.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ query: "{allChurch{title, thumbnail}}" })
        }
    )
        .then(r => r.json())
        .then(d => d.data.allChurch);
};
export const fetchBibelvers = () => {
    return fetch(
        "https://lk85qrxa.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ query: "{allBibleverse{title, thumbnail}}" })
        }
    )
        .then(r => r.json())
        .then(d => d.data.allBibleverse);
};
export const fetchMosjon = () => {
    return fetch(
        "https://lk85qrxa.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ query: "{allGym{title, thumbnail}}" })
        }
    )
        .then(r => r.json())
        .then(d => d.data.allGym);
};
