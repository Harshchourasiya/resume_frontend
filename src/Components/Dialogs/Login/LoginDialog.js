import { Button, Stack, Alert, Snackbar, CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
  PasswordInputField,
  EmailInputField,
} from "../../InputField";
import { authenticateUser } from "../../../helper/API/AuthenticationAPI";
import { isRequestSuccess } from "../../../helper/Validator";
import { setIsUser } from "../../../Redux/Actions";
import { connect } from "react-redux";
import { isLoginInputValid } from '../../../helper/UtilityMethods';

const LoginDialog = ({ toCloseLoginDialog, setIsUser }) => {
  const navigate = useNavigate()
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    isRemember: rememberMe,
    status: ""
  });
  const [openLoginError, setOpenLoginError] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const onLoginClick = async () => {
    setIsLoginClicked(true);
    setLoading(true);
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
      toCloseLoginDialog();
      setIsUser(true);
    } else if (isLoginClicked) {
      setOpenLoginError(true);
      setLoading(false);
    }
  }, [data]);

  return (
    <Stack spacing={2}>
      <EmailInputField store={storeEmail} />
      <PasswordInputField store={storePassword} />
      <FormControlLabel control={<Checkbox onChange={() => {
        setRememberMe(!rememberMe);
        setData({ ...data, isRemember: rememberMe });
      }} />} label="Remember me" />
      <Button onClick={onLoginClick} disabled={!isLoginInputValid(data.email, data.password) || loading}>
        {loading ? <CircularProgress size={14} />
          : "Login"
        }
      </Button>
      <Snackbar open={openLoginError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Enter Correct Credential
        </Alert>
      </Snackbar>
    </Stack>
  );
};


const mapDispatchToProps = (dispatch) => ({
  setIsUser: (isUser) => dispatch(setIsUser(isUser)),
});

export default connect(null, mapDispatchToProps)(LoginDialog);
