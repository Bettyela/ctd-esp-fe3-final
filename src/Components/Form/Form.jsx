import { useState } from "react";
import './Form.css';

const initialState = {
  name: "",
  email: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [validation, setValidation] = useState(undefined);

    const onChange = (event) => {
    const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
  };

    const onSubmit = (event) => {
      event.preventDefault();

    if (formValues.name.trim().length < 5 || !validateEmail(formValues.email)) {
      setValidation(false);
    } else {
      setValidation(true);
      setFormValues(initialState);
    }
  };

    const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

  return (
    <div>
      <div className="div-contact" >
        <div>
          <h1>Want to know more?</h1>
          <h3>Send us your questions and we will contact you</h3>
        </div>
        <form onSubmit={onSubmit} id="Formulario">
        <p>Complete the form:</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="full name *"
            value={formValues.name}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            value={formValues.email}
            onChange={onChange}
          />
          <button type="submit">SEND</button>
        </form>
        
        {validation && (
          <div>
            Thank you  {formValues.name}, we will contact you shortly by email.
          </div>
        )}

        {validation === false && (
          <div className="error-message">Please double check the information entered.</div>
        )}
      </div>
    </div>
  );
};

export default Form;