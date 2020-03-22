import data from "./data.json";

export const fetchBooks = () => {
    return Promise.resolve(data.books);
};
export const fetchStreaming = () => {
    return Promise.resolve(data.streaming);
};
export const fetchSpill = () => {
    return Promise.resolve(data.spill);
};
export const fetchKirke = () => {
    return Promise.resolve(data.kirke);
};
export const fetchBibelvers = () => {
    return Promise.resolve(data.bibelvers);
};
export const fetchMosjon = () => {
    return Promise.resolve(data.mosjon);
};
