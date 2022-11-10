import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Stack,
  Alert,
  Snackbar
} from "@mui/material";
import { useState } from "react";
import LoginDialog from "./Login/LoginDialog";
import CreateAccountDialog from "./CreateAccount/CreateAccountDialog";

const HomeDialog = ({ onClose, open, isLogin }) => {
  const [login, setLogin] = useState({
    title: "Login",
    detail:
      "Laboris amet exercitation velit reprehenderit consequat incididunt reprehenderit aliquip consectetur.",
    isLogin: isLogin,
  });
  const [toastOpen, setToastOpen] = useState(false);
  const [responeMessage, setResponeMessage] = useState();
  const [responeStatus, setResponeStatus] = useState();

  const create = {
    title: "Create Account",
    detail: "Do ex duis irure mollit exercitation.",
    isCreate: !isLogin,
  };

  const handleClose = () => {
    onClose();
  };

  const openCreateAccountDialog = () => {
    setLogin({ ...login, isLogin: false });
  };
  const openLoginDialog = () => {
    setLogin({ ...login, isLogin: true });
  };

  const isAccountCreated = (isCreated) => {
    if (isCreated) {
      setLogin({ ...login, isLogin: true });
      setResponeMessage("Account is Created!");
      setResponeStatus("success");
    }
    else {
      setLogin({ ...login, isLogin: true });
      setResponeMessage("unable to create Account, try again!");
      setResponeStatus("error");
    }
    setToastOpen(true)
  }
  return (
    <Dialog open={open} maxWidth={'sm'} fullWidth>
      <DialogTitle align="center">
        {login.isLogin ? login.title : create.title}
      </DialogTitle>
      <DialogContentText mx={2}>
        {login.isLogin ? login.detail : create.detail}
      </DialogContentText>
      <DialogContent>
        {login.isLogin ? <LoginDialog toCloseLoginDialog={onClose} /> : <CreateAccountDialog isAccountCreated={isAccountCreated} />}
        <Stack>
          {login.isLogin ? (
            <Button onClick={openCreateAccountDialog}>Create Account</Button>
          ) : (
            <Button onClick={openLoginDialog}>Login</Button>
          )}

          <Button onClick={handleClose}>Close</Button>
        </Stack>
        <Snackbar open={toastOpen} autoHideDuration={6000} onClose={() => setToastOpen(false)}>
          <Alert onClose={() => setToastOpen(false)} severity={responeStatus} sx={{ width: '100%' }}>
            {
              responeMessage
            }
          </Alert>
        </Snackbar>
      </DialogContent>
    </Dialog>
  );
};

export default HomeDialog;
