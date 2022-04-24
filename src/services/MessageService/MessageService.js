import axiosRequest from "../../api";

export default class MessageService {
    static async createChat(params) {
        try {
            return await axiosRequest.get(`/messages/create-new-chat/`, {params})
        } catch (e) {
            console.error(e);
        }
    }

    static async getChats(params) {
        try {
            return await axiosRequest.get(`/messages/`, {params})
        } catch (e) {
            console.error(e);
        }
    }
}