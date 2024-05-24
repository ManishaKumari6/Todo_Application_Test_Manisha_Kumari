import axios from "axios";
export let BASE_URL = "http://localhost:5000/";

class ApiServices {

    TaskAdd(data) {
        return axios.post(BASE_URL + 'admin/task/add', data)
    }
    AllTask(data1) {
        return axios.post(BASE_URL + 'admin/task/all', data1)
    }
    Delete(data) {
        return axios.post(BASE_URL + 'admin/task/delete', data)
    }
}
export default new ApiServices;