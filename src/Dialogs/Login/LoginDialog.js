import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import  { useNavigate } from 'react-router-dom'
import {
  PasswordInputField,
  EmailInputField,
} from "../../Components/InputField";
import { authenticateUser } from "../../Helper/API/AuthenticationAPI";
import { isRequestSuccess } from "../../Helper/Validator";

const LoginDialog = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password : "",
    isRemember : false,
    status : ""
  });


  const onLoginClick = async() => {
    await authenticateUser(data, storeStatus);
  };

  const storeEmail = (email) => {
    setData({...data, email : email});
  }

  const storePassword = (password) => {
    setData({...data, password: password});
  }

  const storeStatus = (status) => {
    setData({...data, status: status});
  }

  useEffect(()=> {
    if (isRequestSuccess(data.status)) {
      console.log("Authenticate User");
      navigate("/profile");
      
    } else {
      console.log("Not Authenticate user");
      // TODO : User enter Incorrect Crendentials
    }
  }, [data]);

  return (
    <Stack spacing={2}>
      <EmailInputField store={storeEmail} />
      <PasswordInputField store={storePassword}/>
      <Button onClick={onLoginClick}>Login</Button>
    </Stack>
  );
};

export default LoginDialog;
