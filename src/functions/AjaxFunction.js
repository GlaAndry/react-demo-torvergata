import axios from "axios";
import config from "../config.json";

class ApiService {
    constructor() {
        this.instance = axios.create({
            baseURL: config.BASEURL
        });
    }

    async getComunications() {
        try {
            let response;
            response = await this.instance.get("/getComunications");
            return response;
        } catch (error) {
            throw error;
        }
    }

    async login(data) {
        try {
            let response;
            response = await this.instance.get("docenti/login?email="+data.email+"&password="+data.password);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async registration(data) {
        try {
            let response;
            response = await this.instance.post("docenti/register", data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getStudents() {
        try {
            let response;
            response = await this.instance.get("studenti/findAllStudenti");
            return response;
        } catch (error) {
            throw error;
        }
    }

}

export default new ApiService();