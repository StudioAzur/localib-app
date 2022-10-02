import { customerService } from "../../../services/customer.service";
import { Key, useEffect, useState } from "react";
import CustomerInterface from "../../../types/customer.type";
import HeadTable from "./HeadTable";
import Logo from "../../shared/Logo/Logo";
import { GiEyeball, TiUserDelete } from "../../../icons";

const Customer = () => {
  const [customers, setCustomers] = useState<[] | CustomerInterface[]>([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await customerService.getAllCustomers();
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  const format = (date: string | Date) => {
    date = new Date().toLocaleDateString();
    return date;
  };

  return (
    <div className="list_customer">
      <h2>Liste des clients</h2>
      <div className="wrapper">
        <HeadTable />
        {customers.map((customer: CustomerInterface, key: Key) => (
          <>
            <div className="box">{customer.name}</div>
            <div className="box">{customer.surname}</div>
            <div className="box">{format(customer.birthday)}</div>
            <div className="box">{customer.email}</div>
            <div className="box">{customer.phoneNumber}</div>
            <div className="box">
              <Logo icon={<GiEyeball />} />
            </div>
            <div className="box">
              <Logo icon={<TiUserDelete />} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Customer;
