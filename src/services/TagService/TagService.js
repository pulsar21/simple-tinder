import axiosRequest from "../../api";

export default class TagService {
    static async getTags() {
        try {
            return await axiosRequest.get(`tags/`)
        } catch (e) {
            console.error(e);
        }
    }
}