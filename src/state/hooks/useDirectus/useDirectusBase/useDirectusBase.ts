import { Directus } from "@directus/sdk";
import UseDirectusBase from "./useDirectusBase.types";

const useDirectusBase: UseDirectusBase = (options) => {
    const instance = new Directus('https://9orfhb5z.directus.app', options);
    
    return [ instance ]
}

export default useDirectusBase;