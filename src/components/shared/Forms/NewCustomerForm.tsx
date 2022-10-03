import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { customerService, NewCustomerPayload } from "../../../services/customer.service";
import "./newCustomerForm.css";

const NewCustomerForm: React.FC<any> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewCustomerPayload>();

  let navigate = useNavigate();

  const onSubmit = async(formValues : NewCustomerPayload): Promise<void> => {
     await customerService.addCustomer(formValues);
    navigate("/customers");
  };
  return (
    <div id="customer_add_form">
      <h2>Ajouter un client</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            {...register("name", { required: true })}
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Prénom</label>
          <input type="text" {...register("surname", { required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email", { required: true })} />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Numéro de téléphone</label>
          <input type="text" {...register("phoneNumber", { required: true })} />
        </div>

        <div className="form-group">
          <label htmlFor="birthday">Date de naissance:</label>
          <input type="date" {...register("birthday", { required: true })} />
        </div>

        <button type="submit">Ajouter un client</button>
      </form>
    </div>
  );
};

export default NewCustomerForm;
