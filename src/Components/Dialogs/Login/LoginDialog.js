import { Button, Stack, Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
  PasswordInputField,
  EmailInputField,
} from "../../InputField";
import { authenticateUser } from "../../../helper/API/AuthenticationAPI";
import { isRequestSuccess } from "../../../helper/Validator";

const LoginDialog = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
    isRemember: true,
    status: ""
  });
  const [openLoginError, setOpenLoginError] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const onLoginClick = async () => {
    setIsLoginClicked(true);
    await authenticateUser(data, storeStatus);
  };

  const storeEmail = (email) => {
    setData({ ...data, email: email });
  }

  const storePassword = (password) => {
    setData({ ...data, password: password });
  }

  const storeStatus = (status) => {
    setData({ ...data, status: status });
  }
  
  const handleClose = () => {
    setOpenLoginError(false);
  }

  useEffect(() => {
    if (isRequestSuccess(data.status)) {
      navigate("/profile");
    } else if(isLoginClicked) {
      setOpenLoginError(true);
    }
  }, [data]);

  return (
    <Stack spacing={2}>
      <EmailInputField store={storeEmail} />
      <PasswordInputField store={storePassword} />
      <Button onClick={onLoginClick}>Login</Button>
      <Snackbar open={openLoginError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Enter Correct Credential
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default LoginDialog;
