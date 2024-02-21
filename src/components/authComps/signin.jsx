// src/components/SignupForm.js
import React, { useState } from "react";
import { loginUser } from "../../redux/reducers/userReducer";
import {useDispatch} from 'react-redux';
import {auth} from '../../config/firebase'

function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatchNewUser=useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    // console.log("Form submitted:", formData);
    const data={
      auth,
      ...formData
    }
    dispatchNewUser(loginUser(data))
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SigninForm;
