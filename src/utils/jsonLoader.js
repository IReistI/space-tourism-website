import data from "../data/data.json"

export const jsonLoader = async(url) => {
    return data[url]
};