import * as React from 'react';
import { Avatar, Stack, Typography, Link, useTheme, Box, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer, IconButton, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';
import { useState } from "react";
const NavBar = () => {
  const theme = useTheme();
  const [isOpen, setOpen] = useState();


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const Name = () => {
    return (
      <Stack spacing={2} direction="row" alignItems="center">
        <Avatar
          alt="Logo"
          src="https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_1280.png"
        />
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          <strong style={{ color: theme.palette.secondary.main }}>Resume </strong>
          Builder
        </Typography>
      </Stack>
    );
  }
  const menu = [
    {
      name: "Github",
      url: "#",
      icon: <GitHubIcon />
    },
    {
      name: "Issue",
      url: "#",
      icon: <BugReportIcon />
    }
  ];

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
          <React.Fragment>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: theme.palette.secondary.main, fontSize: 35 }} />
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
    </AppBar>
  );
};

export default NavBar;
