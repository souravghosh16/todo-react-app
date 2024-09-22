import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';


const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors } } = useForm()
  const [input, setInput] = useState({
    username: "",
    password: "",
    gender: "",
    addresss: "",
    postcode: "",
  });

  const onSubmit = (data) => console.log(data)

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_control">
          <label htmlFor="user-email">Email:</label>
          <input
            type="email"
            id="user-email"
            name="email"
            placeholder="example@yahoo.com"
            aria-describedby="user-email"
            aria-invalid="false"
            onChange={handleInput}
            {...register("email", { required: true, maxLength: 20 })}
          />
          <div id="user-email" className="sr-only">
            Please enter a valid username. It must contain at least 6 characters.
          </div>
        </div>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <div className="form_control">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInput}
            {...register("password", { required: true, maxLength: 7 })}
          />
          <div id="user-password" className="sr-only">
            your password should be more than 6 character
          </div>

        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </>
  );
};

export default Login;