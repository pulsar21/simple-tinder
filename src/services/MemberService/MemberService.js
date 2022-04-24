import axiosRequest from "../../api";

export default class MemberService {
    static async getMembers(params) {
        try {
            return await axiosRequest.get(`/all-users/`, {params})
        } catch (e) {
            console.error(e);
        }
    }

    static async getMember(id) {
        try {
            return await axiosRequest.get(`/view/${id}/`)
        } catch (e) {
            console.error(e);
        }
    }

    static async getMemberChat(params) {
        try {
            return await axiosRequest.get(`/messages/view/`, {params})
        } catch (e) {
            console.error(e);
        }
    }

    static async targetMember(id, status, params) {
        try {
            return await axiosRequest.get(`/matches/matched/${id}/${status}/`, {params})
        } catch (e) {
            console.error(e);
        }
    }

    static async targetMemberChange(id, status, params) {
        try {
            return await axiosRequest.get(`/matches/matched/change/${id}/${status}/`, {params})
        } catch (e) {
            console.error(e);
        }
    }
}