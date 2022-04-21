import axiosRequest from "../../api";

export default class AuthService {
    static async signIn(data) {
        try {
            return await axiosRequest.post(`login/`, data)
        } catch (e) {
            console.error(e);
        }
    }

    static async signUp(data) {
        try {
            return await axiosRequest.post(`register/`, data)
        } catch (e) {
            console.error(e);
        }
    }

    static async me(params) {
        try {
            return await axiosRequest.get(`me/`, {params});
        } catch (e) {
            console.error(e);
        }
    }
}