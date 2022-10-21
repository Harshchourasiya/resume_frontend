import "./css/App.css";
import AppBar from "../Components/NavBar/NavBar";
import { Container, Stack } from "@mui/system";
import { Avatar, Button, Paper, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom"
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material';
import Options from '../ChooseTemplate/Options';
import Footer from "../Components/Footer";
const App = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const secondaryMainColor = theme.palette.secondary.main;
  const Front = () => {
    return (
      <Container sx={{ margin: 0 }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          spacing={4}>
          <Container sx={{ textAlign: "center" }}>
            <Typography variant="h2">Create Professional Resume</Typography>
            <Typography variant="h7">
              Prepare for Real Interview
            </Typography>
          </Container>

          <Button onClick={() => navigate('/collector')} variant="outlined" sx={{
            width: 200, backgroundColor: secondaryMainColor, borderColor: secondaryMainColor, color: '#FFF', "&:hover": {
              color: secondaryMainColor,
              borderColor: secondaryMainColor,
            }
          }}>
            Try Now
          </Button>

          <Avatar
            variant={"rounded"}
            src="https://cdn.pixabay.com/photo/2017/10/31/00/23/portfolio-2903909_1280.png"
            sx={{ width: "auto", height: 100, padding: 1 }}
          />
        </Stack>
      </Container>
    );
  }
  const iconStyle = {fontSize: 50};
  const stepData = [
    {
      icon: <InfoIcon  sx={iconStyle}/>,
      title: "Enter Your Information",
      detail: "Laboris tempor enim consectetur proident minim exercitation ullamco eiusmod qui consectetur et."
    },
    {
      icon: <ArticleIcon  sx={iconStyle}/>,
      title: "Select Your Template",
      detail: "Laboris tempor enim consectetur proident minim exercitation ullamco eiusmod qui consectetur et."
    },
    {
      icon: <DownloadIcon sx={iconStyle}/>,
      title: "Download the Resume",
      detail: "Laboris tempor enim consectetur proident minim exercitation ullamco eiusmod qui consectetur et."
    },

  ]

  const Steps = () => {

    return (
      <Paper sx={{ textAlign: "center", width: '100%'}}>
        <Typography variant="h5" my={2}> <strong>Create Professional Resume in 3 Steps</strong></Typography>
        <Stack
        m={3}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        flexWrap={'wrap'}>
          {
            stepData.map((data) => (
                <Paper sx={{width: "300px", padding: '10px'}}>
                    {data.icon}
                  <Typography variant="h6">{data.title}</Typography>
                  <Typography variant="p">
                    {data.detail}
                  </Typography>
                </Paper>
            ))
        }

        </Stack>
      </Paper>
    );
  }


  const Example = () => {
    return (
      <Paper sx={{ width: '100%', textAlign:"center"}}>
        <Typography variant="h5" my={2}> <strong>Example Templates</strong></Typography>
        <Options/>
      </Paper>
    );
  }
  

  return (
    <Stack spacing={5} alignItems="center" sx={{ backgroundImage: `url(${"/static/transparent.png"})` }}>
      <AppBar />
      <Front />
      <Divider />
      <Steps />
      <Example/>
      <Footer/>
    </Stack>
  );
};

export default App;
