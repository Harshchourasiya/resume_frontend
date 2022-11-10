import { Button, Stack, CircularProgress, Typography } from "@mui/material";
import {
  OTPInputField
} from "../../../InputField";
import { verifyOTP } from "../../../../helper/API/CreateAPI"
import { useState } from "react";


const OTPDialog = ({ data, isAccountCreated }) => {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const reqData = { ...data, otpCode: otp };

  const onVerifyClick = async () => {
    setLoading(true);
    await verifyOTP(reqData, setRes);
  };

  const setRes = (res) => {
    isAccountCreated(res);
    setLoading(false);
  }

  return (
    <Stack spacing={2}>
      <Typography >OTP Sended to {data.email}</Typography>
      <OTPInputField setOTP={setOTP} />
      <Button disabled={otp.length === 0 || otp.length > 6 || loading} onClick={onVerifyClick}>
        {loading ? <CircularProgress size={14} />
          : "Verify"
        }
      </Button>
    </Stack>
  );
};

export default OTPDialog;
