import { Button, Stack, Typography } from "@mui/material";
import {
  OTPInputField
} from "../../../InputField";
import {verifyOTP} from "../../../../helper/API/CreateAPI"
import { isRequestSuccess } from "../../../../helper/Validator";


const OTPDialog = ({data, isAccountCreated}) => {
  const onVerifyClick = async() => {
    await verifyOTP(data, setRes);
  };

  const setRes = (res) => {
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
