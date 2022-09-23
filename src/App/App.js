import "./css/App.css";
import {
  Box,
  Grid,
  Typography,
  Container,
  Stack,
  Paper,
  useTheme,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Lottie from "react-lottie";
import homeMain from "../LottieFiles/homeMain.json";
import AutoType from "../Components/AutoType";
import cookie from 'react-cookie';
import { useEffect } from "react";

const App = () => {
  const theme = useTheme();
  const Details = [
    {
      headline: "Headline 1",
      detail:
        "Fugiat veniam minim in adipisicing fugiat eiusmod deserunt duis ut elit irure.",
    },
    {
      headline: "Headline 2",
      detail:
        "Fugiat veniam minim in adipisicing fugiat eiusmod deserunt duis ut elit irure.",
    },
    {
      headline: "Headline 3",
      detail:
        "Fugiat veniam minim in adipisicing fugiat eiusmod deserunt duis ut elit irure.",
    },
    {
      headline: "Headline 4",
      detail:
        "Fugiat veniam minim in adipisicing fugiat eiusmod deserunt duis ut elit irure.",
    },
  ];

  return (
    <Stack spacing={2}>
      <Navbar />
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md>
            <Box>
              <Typography variant="h3">
                You Can Improve
                <AutoType str={"Resume"} />
              </Typography>
            </Box>
          </Grid>

          <Grid item xs>
            <Box sx={{ marginLeft: 30 }}>
              <Lottie
                options={{ animationData: homeMain }}
                width={500}
                height={500}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {Details.map((data) => (
            <Grid md={0}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  margin: 1,
                  width: 200,
                  height: 100,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <Typography variant="h6" align="center">
                  {data.headline}
                </Typography>
                <Typography variant="p" align="center">
                  {data.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default App;
