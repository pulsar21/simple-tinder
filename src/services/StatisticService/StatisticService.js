import axiosRequest from "../../api";

export default class StatisticService {
    static async getStatisticGender() {
        try {
            return await axiosRequest.get(`/graphics/getGenders/`)
        } catch (e) {
            console.error(e);
        }
    }

    static async getStatisticAge() {
        try {
            return await axiosRequest.get(`/graphics/age/`)
        } catch (e) {
            console.error(e);
        }
    }

    static async getStatisticStatus() {
        try {
            return await axiosRequest.get(`/graphics/getStatuses/`)
        } catch (e) {
            console.error(e);
        }
    }
}