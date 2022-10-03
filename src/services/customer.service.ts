import axios, { AxiosResponse } from "axios";

export interface NewCustomerPayload{
    // objet en base 
    name:string;
    surname:string;
    email: string;
    phoneNumber:string;
    birthday: Date;
}
class CustomerService {
    getAllCustomers = () => {
        return axios.get(`http://localhost:3000/customer`)
    }

    addCustomer =(payload : NewCustomerPayload) : Promise<AxiosResponse> => {
        return axios.post('http://localhost:3000/customer', payload)
    }
}

export const customerService = Object.freeze(new CustomerService());