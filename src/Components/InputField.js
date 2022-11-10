import { InputAdornment, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { isStrongPassword, isEmail } from "../helper/Validator";

const errorData = {
  isError: false,
  label: "Name",
  helperText: "",
  showPassword: false,
};

const NameInputField = ({ store }) => {
  const [state, setState] = useState({ ...errorData, label: "Name" });
  const onTextEnter = (event) => {
    const value = event.target.value;
    if (value.length < 3)
      setState({
        ...state,
        isError: true,
        helperText: "Name Length Must be greater Than 3",
      });
    else {
      store(value);
      setState({ ...state, isError: false, helperText: "" });
    }
  };

  return (
    <TextField
      id="input-with-icon-adornment"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
      }}
      required={true}
      type="text"
      label={state.label}
      error={state.isError}
      placeholder="Enter Name..."
      helperText={state.helperText}
      onChange={onTextEnter}
    />
  );
};

const PasswordInputField = ({ store }) => {
  const [state, setState] = useState({ ...errorData, label: "Password" });
  const onTextEnter = (event) => {
    const value = event.target.value;
    if (!isStrongPassword(value))
      setState({
        ...state,
        isError: true,
        helperText:
          "Password Must Contains 1 Capital, small, number and Special Character and lenght more than 5",
      });
    else {
      store(value);
      setState({ ...state, isError: false, helperText: "" });
    }
  };
  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      id="input-with-icon-adornment"
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <LockIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {state.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      required={true}
      type={state.showPassword ? "text" : "password"}
      label={state.label}
      error={state.isError}
      helperText={state.helperText}
      placeholder="Enter Password..."
      onChange={onTextEnter}
    />
  );
};

const EmailInputField = ({ store }) => {
  const [state, setState] = useState({
    ...errorData,
    label: "Email",
  });
  const onTextEnter = (event) => {
    const value = event.target.value;
    if (!isEmail(value))
      setState({
        ...state,
        isError: true,
        helperText: "Enter Valid EmailAddress",
      });
    else {
      store(value);
      setState({ ...state, isError: false, helperText: "" });
    }
  };

  return (
    <TextField
      id="input-with-icon-adornment"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      required={true}
      type="email"
      label={state.label}
      error={state.isError}
      helperText={state.helperText}
      onChange={onTextEnter}
      placeholder="Enter Email..."
    />
  );
};

const OTPInputField = ({ setOTP }) => {
  const [state, setState] = useState({
    ...errorData,
    label: "OTP",
  });
  const onTextEnter = (event) => {
    const value = event.target.value;
    if (value.length !== 6)
      setState({
        ...state,
        isError: true,
        helperText: "Enter Valid OTP",
      });
    else {
      setOTP(value);
      setState({ ...state, isError: false, helperText: "" });
    }
  };

  return (
    <TextField
      id="input-with-icon-adornment"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      required={true}
      type="number"
      label={state.label}
      error={state.isError}
      helperText={state.helperText}
      onChange={onTextEnter}
      placeholder="Enter OTP..."
    />
  );
};

export { NameInputField, PasswordInputField, EmailInputField, OTPInputField };
