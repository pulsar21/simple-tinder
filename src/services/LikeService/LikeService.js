import axiosRequest from "../../api";

export default class LikeService {
    static async getLikeMe(params) {
        try {
            return await axiosRequest.get(`matches/i-liked/all/`, {params})
        } catch (e) {
            console.error(e);
        }
    }
    static async getLikeOther(params) {
        try {
            return await axiosRequest.get(`matches/who-likes-me/all/`, {params})
        } catch (e) {
            console.error(e);
        }
    }
    static async getMatches(params) {
        try {
            return await axiosRequest.get(`matches/my-matches/all`, {params})
        } catch (e) {
            console.error(e);
        }
    }
}