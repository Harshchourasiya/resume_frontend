import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Zoom
} from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { NameInput, TitleInput, AboutMeInput } from "./InputComponents/Input";
import Addable from "./InputComponents/Addable";
import AddExperience from "./InputComponents/Experience";
import AddEducation from "./InputComponents/Education";
import AddSkill from "./InputComponents/Skill";
import AddProject from "./InputComponents/Project";
import AddProfile from "./InputComponents/Profile";
import Name from './LottieJSON/Name.json';
import Title from './LottieJSON/Title.json';
import AboutMe from './LottieJSON/AboutMe.json';
import Experience from './LottieJSON/Experience.json';
import Education from './LottieJSON/Education.json';
import Profile from './LottieJSON/Profile.json';
import Skills from './LottieJSON/Skills.json';
import Project from './LottieJSON/Project.json';
import Lottie from 'react-lottie';
import Typewriter from 'typewriter-effect';
import {
  EXPERIENCE,
  EDUCATION,
  SKILL,
  PROJECT,
  PROFILE,
} from "../helper/Strings";

const inputs = [
  {
    title: "Name",
    component: <NameInput />,
    json: Name
  },
  {
    title: "Title",
    component: <TitleInput />,
    json: Title
  },
  {
    title: "Objective",
    component: <AboutMeInput />,
    json: AboutMe
  },

  {
    title: "Experiences",
    component: <Addable component={AddExperience} type={EXPERIENCE} />,
    json: Experience
  },

  {
    title: "Education",
    component: <Addable component={AddEducation} type={EDUCATION} />,
    json: Education
  },
  {
    title: "Skills",
    component: <Addable component={AddSkill} type={SKILL} />,
    json: Skills
  },
  {
    title: "Projects",
    component: <Addable component={AddProject} type={PROJECT} />,
    json: Project
  },
  {
    title: "Profiles",
    component: <Addable component={AddProfile} type={PROFILE} />,
    json: Profile
  },
];

const renderComponent = (idx) => {
  return (
    <Stack
      container
      direction="column"
      justifyContent="space-between"
      spacing={2}
    >
      <Lottie
        options={{ animationData: inputs[idx].json, loop: false }}
        height={100}
        width={100}
      />
      <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <Typography variant="h3">
          Enter Your
        </Typography>
        <Typography variant="h3" sx={{ color: '#e44747' }}>
          <Typewriter
            options={{
              strings: inputs[idx].title,
              autoStart: true,
              loop: false,
            }}
          />
        </Typography>
      </Stack>
      {inputs[idx].component}
    </Stack >
  )
}

const Collector = () => {
  const [idx, setIdx] = useState(0);
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();


  const goBack = () => {
    setCheck(false);
    setTimeout(() => {
      setIdx(idx - 1);
      setCheck(true);
    }, 400);
  };

  const goForward = () => {
    setCheck(false);
    setTimeout(() => {
      setIdx(idx + 1);
      setCheck(true);
    }, 400);
  };
  return (
    <Container>
      <Stack
        container
        direction="column"
        justifyContent="space-between"
        spacing={5}
      >
        <Zoom in={check}>
          {renderComponent(idx)}
        </Zoom>

        <Stack container direction="row" justifyContent="space-between">
          <Box>
            <Button variant="outlined" onClick={goBack} disabled={idx === 0}>
              Back
            </Button>
          </Box>
          {
            idx === inputs.length - 1 ? <Button onClick={() => navigate("/choose")}>Finish</Button> :
              <Box>
                <Button variant="outlined" onClick={goForward}>
                  Next
                </Button>
              </Box>
          }
        </Stack>
      </Stack>
    </Container>
  );
};

export default Collector;
