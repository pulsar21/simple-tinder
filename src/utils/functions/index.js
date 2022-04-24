import {EXTERNAL_BASE_URL} from "../../config";
import notify from "./notify";
import findError from "./findError";

const formatWebp = (src) => {
    const newSrc = src.split(".")[0];
    return `${newSrc}.webp`;
};

const findImage = (image, size="500x500") => {
    return `${EXTERNAL_BASE_URL}upload/webp/${size}/${formatWebp(image)}`;
};



export {formatWebp, findImage, notify, findError};