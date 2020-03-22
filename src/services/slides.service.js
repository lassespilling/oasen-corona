import data from "./data.json";

export const fetchBooks = () => {
    return fetch('https://lk85qrxa.api.sanity.io/v1/graphql/test/default', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({query: "{allBook{title, thumbnail}}"})
    }).then(r => r.json()).then(d => d.data.allBook)
};
export const fetchStreaming = () => {
    return Promise.resolve(data.streaming);
};
export const fetchSpill = () => {
    return Promise.resolve(data.spill);
};
