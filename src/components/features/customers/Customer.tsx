import { customerService } from "../../../services/customer.service";
import { Key, useEffect, useState } from "react";
import CustomerInterface from "../../../types/customer.type";
import HeadTable from "./HeadTable";
import Logo from "../../shared/Logo/Logo";
import { GiEyeball, TiUserDelete } from "../../../icons";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [customers, setCustomers] = useState<[] | CustomerInterface[]>([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await customerService.getAllCustomers();
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  const format = (date: Date, separator: string) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}${separator}${month}${separator}${year}`;
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/addCustomer");
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
            <div className="box">{format(new Date(customer.birthday), "/")}</div>
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
        <button className="button_add_customer" onClick={routeChange}>
          Ajouter un utilisateur
        </button>
      </div>
    </div>
  );
};

export default Customer;
