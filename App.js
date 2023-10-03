import { useState } from 'react';
import './App.css';
// import Login from './Login';
import FormInput from './components/FormInput';


function App() {

  const [values, setValues] = useState({
    userName: "",
    contact: "",
    Email: "",
    password: "",
    confirm_password: ""
  });
  const inputs = [
    {
      Id: 1,
      type: "text",
      label: "User name",
      placeholder: "enter username",
      name: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      Id: 2,
      type: "date",
      label: "D.O.B",
      placeholder: "D.O.B",
      name: "D.O.B"

    },
    {
      Id: 3,
      type: "email",
      label: "Email",
      placeholder: "enter email",
      name: "email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      Id: 4,
      type: "password",
      label: "Password",
      placeholder: "enter password",
      name: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      Id: 5,
      type: "password",
      label: "Confirm password",
      placeholder: "confirm password",
      name: "confirm password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    }
  ]


  function handleSubmit(e) {
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="App">


      <form onSubmit={handleSubmit}>
        <h1>REGISTERATION FORM</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.Id}
            {...input}
            values={values[input.name]}
            onChange={onChange}

          />
        ))}


        <button>SUBMIT</button>

      </form>

    </div>

  )
}
export default App;

