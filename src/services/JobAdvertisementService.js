import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }

    getJobAdvertisementsByEmployer(employerId) {
        return axios.get(`http://localhost:8080/api/jobadvertisements/get-by-employer?employerId=${employerId}`)
    }
}