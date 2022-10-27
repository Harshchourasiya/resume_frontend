import { Button, CircularProgress, Stack } from "@mui/material";
import {
  PasswordInputField,
  EmailInputField,
  NameInputField,
} from "../../InputField";
import { useState } from "react";
import OTPDialog from "./OTPDialog/OTPDialog";
import { sendOTP } from "../../../helper/API/CreateAPI"
import { isRequestSuccess } from "../../../helper/Validator"
import { isLoginInputValid } from '../../../helper/UtilityMethods';
import { CREATE_ACCOUNT_INITIAL_STATE } from "../../../helper/InitialState";

const CreateAccountDialog = ({ isAccountCreated }) => {

  const [sendData, setSendData] = useState(CREATE_ACCOUNT_INITIAL_STATE)
  const [loading, setLoading] = useState(false);
  const onVerifyClick = async () => {
    setLoading(true);
    await sendOTP(sendData, setSendData);
  };

  const storeEmail = (email) => {
    setSendData({ ...sendData, email: email });
  }

  const storePassword = (password) => {
    setSendData({ ...sendData, password: password });

  }

  const storeName = (name) => {
    setSendData({ ...sendData, name: name });
  }

  const isValid = () => {
    return (
      sendData.name.length !== 0 &&
      isLoginInputValid(sendData.email, sendData.password)
    )
  }
  return (
    <div>
      {isRequestSuccess(sendData.status) ? (
        <OTPDialog data={sendData} isAccountCreated={isAccountCreated} setData={setSendData} />
      ) : (
        <Stack spacing={2}>
          <NameInputField store={storeName} />
          <EmailInputField store={storeEmail} />
          <PasswordInputField store={storePassword} />
          <Button onClick={onVerifyClick} disabled={!isValid() || loading}>
            {loading ? <CircularProgress size={14} />
              : "Send OTP"
            }
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default CreateAccountDialog;
