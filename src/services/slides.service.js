import data from "./data.json";

export const fetchSlides = () => {
    return Promise.resolve(data.books);
};
