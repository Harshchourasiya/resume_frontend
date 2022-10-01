import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Slide,
} from "@mui/material";
import { useState } from "react";
import { NameInput, TitleInput, AboutMeInput } from "./InputComponents/Input";
import Addable from "./InputComponents/Addable";
import AddExperience from "./InputComponents/Experience";
import AddEducation from "./InputComponents/Education";
import AddSkill from "./InputComponents/Skill";
import AddProject from "./InputComponents/Project";
import AddProfile from "./InputComponents/Profile";
import {
  EXPERIENCE,
  EDUCATION,
  SKILL,
  PROJECT,
  PROFILE,
} from "../helper/Strings";
const _Button = ({ txt, onClick, isDisable }) => {
  return (
    <Box>
      <Button variant="outlined" onClick={onClick} disabled={isDisable}>
        {txt}
      </Button>
    </Box>
  );
};

const data = [
  {
    title: "Enter Your Name",
    component: <NameInput />,
  },
  {
    title: "Enter Your Title",
    component: <TitleInput />,
  },
  {
    title: "Enter About Yourself",
    component: <AboutMeInput />,
  },

  {
    title: "Enter Your Experiences",
    component: <Addable component={AddExperience} type={EXPERIENCE} />,
  },

  {
    title: "Enter Your Education",
    component: <Addable component={AddEducation} type={EDUCATION} />,
  },
  {
    title: "Enter Your Skills",
    component: <Addable component={AddSkill} type={SKILL} />,
  },
  {
    title: "Enter Your Projects",
    component: <Addable component={AddProject} type={PROJECT} />,
  },
  {
    title: "Enter Your Profiles",
    component: <Addable component={AddProfile} type={PROFILE} />,
  },
];

const Collector = () => {
  const [idx, setIDX] = useState(0);
  const [direction, setDirection] = useState("right");
  const [check, setCheck] = useState(true);

  const goBack = () => {
    setCheck(false);
    setDirection("left");
    setTimeout(() => {
      setCheck(true);
      setDirection("right");
    }, 300);

    setIDX(idx - 1);
  };
  const goForward = () => {
    setCheck(false);
    setDirection("right");
    setTimeout(() => {
      setCheck(true);
      setDirection("left");
    }, 300);

    setIDX(idx + 1);
  };
  return (
    <Container>
      <Stack
        container
        direction="column"
        justifyContent="space-between"
        spacing={10}
      >
        <Slide direction={direction} in={check}>
          <Stack
            container
            direction="column"
            justifyContent="space-between"
            spacing={10}
          >
            <Typography variant="h3" align="center">
              {data[idx].title}
            </Typography>
            {data[idx].component}
          </Stack>
        </Slide>

        <Stack container direction="row" justifyContent="space-between">
          <_Button onClick={goBack} txt="Back" isDisable={idx === 0} />
          <_Button
            onClick={goForward}
            txt="Next"
            isDisable={idx === data.length - 1}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Collector;