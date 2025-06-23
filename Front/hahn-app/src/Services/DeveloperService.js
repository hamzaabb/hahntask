import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:8085/api/developers";

const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

class DeveloperService {
    getDevelopers() {
        return axios.get(EMPLOYEE_BASE_URL, authHeader());
    }

    createDeveloper(developer) {
        return axios.post(EMPLOYEE_BASE_URL, developer, authHeader());
    }

    getDeveloperById(developerId) {
        return axios.get(`${EMPLOYEE_BASE_URL}/${developerId}`, authHeader());
    }

    updateDeveloper(developerId, developer) {
        return axios.put(`${EMPLOYEE_BASE_URL}/${developerId}`, developer, authHeader());
    }

    deleteDeveloper(developerId) {
        return axios.delete(`${EMPLOYEE_BASE_URL}/${developerId}`, authHeader());
    }
}

export default new DeveloperService();
