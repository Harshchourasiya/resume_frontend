import "./css/App.css";
import AppBar from "../Components/NavBar/NavBar";
import { Container, Stack } from "@mui/system";
import { Avatar, Button, Paper, Typography, Link } from "@mui/material";
const App = () => {
  return (
    <Stack spacing={5} alignItems="center">
      <AppBar />
      <Container sx={{ margin: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <Container>
            <Typography variant="h2">Create Professional Resume</Typography>
            <Typography variant="h7" sx={{ display: "block", padding: 1 }}>
              Prepare for Real Interview
            </Typography>

            <Link href='/collector' underline="hover">
              <Button variant="outlined" sx={{ py: 1, my: 2, width: 200 }}>
                Try Now
              </Button>
            </Link>
          </Container>
          <Avatar
            variant={"rounded"}
            src="https://cdn.pixabay.com/photo/2017/10/31/00/23/portfolio-2903909_1280.png"
            sx={{ width: "auto", height: 500, padding: 1 }}
          />
        </Stack>
      </Container>

      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <Paper sx={{ padding: 2 }}>
            <Typography>
              Non ipsum deserunt minim ipsum non non quis proident est dolore
              enim. Non ipsum deserunt minim ipsum non non quis proident est
              dolore enim. Non ipsum deserunt minim ipsum non non quis proident
              est dolore enim.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 2 }}>
            <Typography>
              Non ipsum deserunt minim ipsum non non quis proident est dolore
              enim. Non ipsum deserunt minim ipsum non non quis proident est
              dolore enim. Non ipsum deserunt minim ipsum non non quis proident
              est dolore enim.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 2 }}>
            <Typography>
              Non ipsum deserunt minim ipsum non non quis proident est dolore
              enim. Non ipsum deserunt minim ipsum non non quis proident est
              dolore enim. Non ipsum deserunt minim ipsum non non quis proident
              est dolore enim.
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Stack>
  );
};

export default App;
