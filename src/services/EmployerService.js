import axios from "axios";
export default class EmployerService {
    getEmployerById(employerId) {
        return axios.get(`http://localhost:8080/api/employers/getbyid?id=${employerId}`);
    }

    getUpdateRequests() {
        return axios.get(`http://localhost:8080/api/employers/get-update-requests`);
    }

    updateRequest(employerUpdateDto) {
        return axios.post(
            "http://localhost:8080/api/employers/update-request",
            employerUpdateDto
        );
    }

    approve(employerId) {
        return axios.get(
            `http://localhost:8080/api/employers/approve-update-request?employerId=${employerId}`
        );
    }

    cancel(employerId) {
        return axios.get(
            `http://localhost:8080/api/employers/cancel-update-request?employerId=${employerId}`
        );
    }
}