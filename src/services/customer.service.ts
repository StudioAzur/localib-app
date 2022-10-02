import axios from "axios";

class CustomerService {
    getAllCustomers = () => {
        return axios.get(`http://localhost:3000/customer`)
    }
}

export const customerService = Object.freeze(new CustomerService());