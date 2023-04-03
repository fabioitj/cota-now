import { buildUrl } from "./https"
import axios from "axios"

const getCotation = (de, para) => {
    if(!de || !para) return;

    return axios.get(buildUrl(de, para));
}

export { getCotation };