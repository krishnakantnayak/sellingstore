// src/components/SignupForm.js
import React, { useState } from "react";
import { registerUser } from "../../redux/reducers/userReducer";
import {useDispatch} from 'react-redux';
import {auth} from '../../config/firebase'

function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name:"",
    phone:""
  });
  const dispatchNewUser=useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Form submitted:", formData);
    const data={
      auth,
      ...formData
    }
    dispatchNewUser(registerUser(data))
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
       
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
