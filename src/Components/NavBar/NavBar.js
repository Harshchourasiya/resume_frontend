import * as React from 'react';
import { Avatar, Stack, Typography, Link, useTheme, Box, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer, IconButton, Container, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import BugReportIcon from '@mui/icons-material/BugReport';
import { useState } from "react";
import HomeDialog from '../Dialogs/HomeDialog';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL } from '../../helper/URLs';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { isUserLogedIn } from '../../helper/API/AuthenticationAPI';
import { setIsUser } from '../../Redux/Actions';

const menu = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon />
  },
  {
    name: "Github",
    url: "https://github.com/Harshchourasiya/resume_frontend",
    icon: <GitHubIcon />
  },
  {
    name: "Issue",
    url: "https://github.com/Harshchourasiya/resume_frontend/issues",
    icon: <BugReportIcon />
  }
];

const NavBar = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const secondaryMainColor = theme.palette.secondary.main;
  const [isOpen, setOpen] = useState();
  const [isOpenLoginDialog, setOpenLoginDialog] = useState(false);


  useEffect(() => {
    isUserLogedIn(props.setIsUser);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const closeLoginDialog = () => {
    setOpenLoginDialog(false);
  };


  const Name = () => {
    return (
      <Stack spacing={2} direction="row" alignItems="center">
        <Avatar
          alt="Logo"
          src={LOGO_URL}
        />
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          <strong style={{ color: secondaryMainColor }}>Resume </strong>
          Builder
        </Typography>
      </Stack>
    );
  }

  const Menu = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Container sx={{ padding: 5 }}>
        <Name />
      </Container>
      <Divider />
      <List>
        {menu.map((data, index) => (
          <ListItem key={data.name} disablePadding>
            <Link href={data.url} sx={{ color: theme.palette.text.primary }}>
              <ListItemButton>
                <ListItemIcon>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ padding: 1 }}>
      <Stack
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Name />

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >

          <Button variant='outlined' sx={{
            color: '#FFF', backgroundColor: secondaryMainColor, '&:hover': {
              borderColor: secondaryMainColor
            }
          }} onClick={() => {
            if (props.isUser) navigate('/profile')
            else setOpenLoginDialog(true)
          }}>{props.isUser ? "Profile" : "Login"}</Button>

          <React.Fragment>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: secondaryMainColor, fontSize: 35 }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={toggleDrawer(false)}
            >
              {Menu()}
            </Drawer>
          </React.Fragment>

        </Stack>
      </Stack>

      <HomeDialog open={isOpenLoginDialog} onClose={closeLoginDialog} isLogin={true} />

    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setIsUser: (isUser) => dispatch(setIsUser(isUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
