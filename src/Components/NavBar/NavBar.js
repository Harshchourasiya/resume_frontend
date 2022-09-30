import { Avatar, Stack, Typography, Button, Paper, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const NavBar = () => {
  const MenuButton = ({ url, name }) => {
    return (
      <Paper>
        <Link href={url} underline="hover">
          <Button variant="outlined">{name}</Button>
        </Link>
      </Paper>
    );
  };

  const menu = [
    {
      name: "Github",
      url: "#",
    },
    {
      name: "Issue",
      url: "#",
    },
    {
      name: "About us",
      url: "#",
    },
  ];
  
  return (
    <AppBar position="static" sx={{ padding: 1 }}>
      <Stack
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar
            alt="Logo"
            src="https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_1280.png"
          />
          <Typography variant="h6">Resume Builder</Typography>
        </Stack>

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {menu.map((data) => (
            <MenuButton url={data.url} name={data.name} />
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
