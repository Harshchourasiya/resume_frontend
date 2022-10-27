import { Button, Stack, Typography } from "@mui/material";
import {
  OTPInputField
} from "../../../InputField";
import { verifyOTP } from "../../../../helper/API/CreateAPI"
import { useState } from "react";


const OTPDialog = ({ data, isAccountCreated, setData }) => {
  const [otp, setOTP] = useState("");
  const reqData = {...data, otpCode: otp};
  const onVerifyClick = async () => {
    await verifyOTP(reqData, setRes);
  };
  
  const setRes = (res) => {
    isAccountCreated(res);
  }

  return (
    <Stack spacing={2}>
      <Typography >OTP Sended to {data.email}</Typography>
      <OTPInputField setOTP={setOTP} />
      <Button disabled={otp.length === 0 || otp.length > 6} onClick={onVerifyClick}>Verify</Button>
    </Stack>
  );
};

export default OTPDialog;
