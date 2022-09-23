import { Button, Stack, Typography } from "@mui/material";
import {
  OTPInputField
} from "../../../Components/InputField";

import {verifyOTP} from "../../../Helper/API/CreateAPI"
import { isRequestSuccess } from "../../../Helper/Validator";
const OTPDialog = ({data, isAccountCreated}) => {
  const onVerifyClick = async() => {
    console.log(data);
    await verifyOTP(data, setRes);
  };

  const setRes = (res) => {
    console.log(res);
    isAccountCreated(isRequestSuccess(res.status));
  }

  return (
    <Stack spacing={2}>
        <Typography >OTP Sended to {data.email}</Typography> 
        <OTPInputField />
       <Button onClick={onVerifyClick}>Verify</Button>
    </Stack>
  );
};

export default OTPDialog;
