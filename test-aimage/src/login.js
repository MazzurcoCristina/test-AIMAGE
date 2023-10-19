
import './App.css';
import React, { useState, useEffect } from 'react';




function LoginForm() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    tel: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);


  const validateValues = (inputValues) => {
    let errors = {};

    if (!inputValues.surname || !isNaN(inputValues.surname)) {
      errors.surname = "usare lettere";
    }
    if (!inputValues.name || !isNaN(inputValues.name)) {
      errors.name = "usare solo lettere";
    }
    if (inputValues.email.length < 10 || !inputValues.email) {
      errors.email = "email troppo corta";
    }
    if (isNaN(inputValues.tel) || !inputValues.tel) {
      errors.tel = "non sono numeri";
    }
    return errors;

  };


  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(input));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(input);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className='login-form'>

   {Object.keys(errors).length === 0 && submitting ? (
        <span className="success">Successfully submitted ✓</span>
      ) : null}
      
      <form onSubmit={handleSubmit}>

        <input
          type='name'
          name='name'
          value={input.name}
          placeholder='nome'
          onChange={handleChange}
        ></input>
        {errors.name ? (
          <p className="error">Inserisci il tuo nome utilizzando solo lettere</p>
        ) : null}

        <input
          type='surname'
          name='surname'
          value={input.surname}
          placeholder='cognome'
          onChange={handleChange}
        ></input>
        {errors.surname ? (
          <p className="error">Inserisci il tuo cognome utilizzando solo lettere</p>
        ) : null}

        <input
          type='email'
          name='email'
          value={input.email}
          placeholder='email'
          onChange={handleChange}
        ></input>
        {errors.email ? (
          <p className="error">Inserisci una email che abbia almeno 10 caratteri</p>
        ) : null}


        <input
          type='tel'
          name='tel'
          value={input.tel}
          placeholder='numero di telefono'
          minLength="10" maxLength="10"
          onChange={handleChange}
        ></input>
        {errors.tel ? (
          <p className="error">Inserisci un numero di telefono che abbia almeno 10 caratteri</p>
        ) : null}


        <label type="text">
          Corso di interesse

          <select name='course'>
            <option value="none"></option>
            <option value="react">react</option>
            <option value="vuejs">vuejs</option>
            <option value="nodejs">nodejs</option>
            <option value="mongodb">mongodb</option>
          </select>
        </label>
        <br />



        <button className='btn' type='submit'>Registrati</button>


      </form>


    </div>

  );
}





export default LoginForm;

