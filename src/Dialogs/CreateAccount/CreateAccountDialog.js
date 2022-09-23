import { Button, Stack } from "@mui/material";

import {
  PasswordInputField,
  EmailInputField,
  NameInputField,
} from "../../Components/InputField";
import OTPDialog from "./OTPDialog/OTPDialog";
import { useEffect, useState } from "react";
import {sendOTP} from "../../Helper/API/CreateAPI"
import {isRequestSuccess} from "../../Helper/Validator"

const CreateAccountDialog = ({isAccountCreated}) => {

  const [verifyOTP, setVerifyOTP] = useState(false);
  const [sendData, setSendData] = useState({
    email : "",
    password : "",
    name : "",
    verificationCode : "",
    otpCode: "", // Only For Testing 
    status : "Failed"
  })

  const onVerifyClick = async() => {
    await sendOTP(sendData, setSendData);
  };
  
  const storeEmail = (email) => {
    setSendData({...sendData, email : email});
  }
  
  const storePassword = (password) => {
    setSendData({...sendData, password : password});
    
  }
  
  const storeName = (name) => {
    setSendData({...sendData, name : name});
  }
  
  useEffect(()=> {
    if (isRequestSuccess(sendData.status)) setVerifyOTP(true);
  }, [sendData])

  return (
    <div>
      {verifyOTP ? (
        <OTPDialog data={sendData} isAccountCreated={isAccountCreated}/>
      ) : (
        <Stack spacing={2}>
          <NameInputField store={storeName}/>
          <EmailInputField store={storeEmail}/>
          <PasswordInputField store={storePassword}/>
          <Button onClick={onVerifyClick}>Send OTP</Button>
        </Stack>
      )}
    </div>
  );
};

export default CreateAccountDialog;
