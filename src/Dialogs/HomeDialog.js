import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Stack,
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

  const [create, setCreate] = useState({
    title: "Create Account",
    detail: "Do ex duis irure mollit exercitation.",
    isCreate: !isLogin,
  });

  const handleClose = () => {
    onClose();
  };

  const openCreateAccountDialog = () => {
    setLogin({...login, isLogin: false});
  };
  const openLoginDialog = () => {
    setLogin({...login, isLogin: true});
  };

  const isAccountCreated = (isCreated) => {
    if (isCreated) {
      console.log("Account Created");
      setLogin({...login, isLogin: true});
    }
    else {
      console.log("Sorry Try again Later!");
    }
  }
  return (
    <Dialog open={open}>
      <DialogTitle align="center">
        {login.isLogin ? login.title : create.title}
      </DialogTitle>
      <DialogContentText>
        {login.isLogin ? login.detail : create.detail}
      </DialogContentText>
      <DialogContent>
        {login.isLogin ? <LoginDialog /> : <CreateAccountDialog  isAccountCreated={isAccountCreated} />}
        <Stack>
          {login.isLogin ? (
            <Button onClick={openCreateAccountDialog}>Create Account</Button>
          ) : (
            <Button onClick={openLoginDialog}>Login</Button>
          )}

          <Button onClick={handleClose}>Close</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default HomeDialog;
