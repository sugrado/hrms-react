import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }

    getJobAdvertisementById(id) {
        return axios.get(`http://localhost:8080/api/jobadvertisements/getbyid?id=${id}`)
    }

    getApprovedAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/get-approved")
    }

    getAdvertisementRequests() {
        return axios.get("http://localhost:8080/api/jobadvertisements/get-requests")
    }

    getJobAdvertisementsByEmployer(employerId) {
        return axios.get(`http://localhost:8080/api/jobadvertisements/get-by-employer?employerId=${employerId}`)
    }

    approve(id) {
        return axios.get(`http://localhost:8080/api/jobadvertisements/approve?id=${id}`)
    }

    cancel(id) {
        return axios.get(`http://localhost:8080/api/jobadvertisements/cancel?id=${id}`)
    }
}