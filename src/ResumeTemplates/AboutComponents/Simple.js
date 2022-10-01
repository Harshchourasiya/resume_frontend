import { Container, Paper, Typography } from "@mui/material";
import {Divide} from '../Helper/Design';

const About = ({detail}) => {
  return (
    <Container>
      <Divide title="Objective" />
      <Paper sx={{ padding: 2 }}>
        <Typography variant="p">
          {detail}
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
