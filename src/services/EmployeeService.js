import axios from "axios";
export default class EmployeeService {

    getById(employeeId) {
        return axios.get(`http://localhost:8080/api/employees/getbyid?id=${employeeId}`)
    }

    update(employee) {
        return axios.post("http://localhost:8080/api/employees/update", employee)
    }
}