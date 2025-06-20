import axios from 'axios';
const EMPLOYEE_BASE_URL = "http://localhost:8085/api/developers"
class DeveloperService {
    getDevelopers() {
        return axios.get(EMPLOYEE_BASE_URL);
    }
    createDeveloper(developer) {
        return axios.post(EMPLOYEE_BASE_URL,developer)
    }
    getDeveloperById(developerId) {
        return axios.get(EMPLOYEE_BASE_URL+'/'+developerId);
    }
    updateDeveloper(developerId,developer) {
        return axios.put(EMPLOYEE_BASE_URL+'/'+developerId,developer);
    }
    DeleteDeveloper(developerId) {
        return axios.delete(EMPLOYEE_BASE_URL+'/'+developerId);
    }
}
export default new DeveloperService();