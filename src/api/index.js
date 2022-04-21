import axios from "axios";
import {BASE_URL} from "../config";
import {ACCESS_TOKEN} from "../consts";
import {AUTH_ROUTE} from "../routes/consts";

export let accessToken = localStorage.getItem(ACCESS_TOKEN);

const axiosRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
});

axiosRequest.interceptors.request.use(
    (request) => {
        if (!accessToken) {
            accessToken = localStorage.getItem(ACCESS_TOKEN)
            if (accessToken) {
                request.headers["Authorization"] = `Bearer ${accessToken}`;
            }
        }
        return request;
    },
    (error) => Promise.reject(error)
);

axiosRequest.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem(ACCESS_TOKEN);
            window.location.href = AUTH_ROUTE;
        }
        return Promise.reject(error);
    }
);

export default axiosRequest;