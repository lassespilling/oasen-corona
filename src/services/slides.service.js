import data from "./data.json";

export const fetchBooks = () => {
    return Promise.resolve(data.books);
};
export const fetchStreaming = () => {
    return Promise.resolve(data.streaming);
};
