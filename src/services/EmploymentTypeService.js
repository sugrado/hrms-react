import axios from "axios"

export default class EmploymentTypeService {
    getEmploymentTypes() {
        return axios.get("http://localhost:8080/api/employmenttypes/getall")
    }
}