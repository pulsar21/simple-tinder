import axiosRequest from "../../api";
import {findError, notify} from "../../utils/functions";

export default class AuthService {
    static async signIn(data) {
        try {
            return await axiosRequest.post(`login/`, data)
        } catch (e) {
            notify(e.response.data.message, "error");
        }
    }

    static async signUp(data) {
        try {
            return await axiosRequest.post(`register/`, data)
        } catch (e) {
            notify(e.response.data.errors ? findError(e.response.data.errors) : e.response.data.message, "error");
        }
    }

    static async me(params) {
        try {
            return await axiosRequest.get(`me/`, {params});
        } catch (e) {
            console.error(e);
        }
    }

    static async updateProfile(data, id) {
        try {
            return await axiosRequest.post(`/update-profile/me/${id}/`, data);
        } catch (e) {
            notify(findError(e.response.data), "error");
            console.error(e);
        }
    }
}