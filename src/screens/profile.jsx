import React from "react";
import NewProdForm from "../components/product/NewProdForm";
import { useSelector } from "react-redux";
import ProductTile from "../components/product/productTile";
import SignupForm from "../components/authComps/signup";
import SigninForm from "../components/authComps/signin";
import { auth } from "../config/firebase";
import { useEffect, useState, Image } from "react";
import logo from "./logo512.png";
import { Avatar } from "@mui/material";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "gray",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  if (!currentUser)
    return (
      <>
        <div className="flex-direction:'row'">
          <div>
            <h1>Profile Page</h1>
          </div>
          <div className="  justify-content-center flex-direction-row">
            <Avatar
              {...stringAvatar("Kent Dodds")}
              sx={{ width: 76, height: 76 }}
            />
            <h4>Name</h4>
          </div>
          <div> currentUser.name</div>
        </div>
      </>
    );
}
