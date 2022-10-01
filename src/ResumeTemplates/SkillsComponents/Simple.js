import { Container, Grid, Paper, Typography } from "@mui/material"
import {Divide} from '../Helper/Design';

const Skill = ({skills}) => {
  return (
    <Container>
      <Divide title="Skills" />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {skills.map((obj) => (
          <Grid item>
            <Paper sx={{ padding: 1 }}>
              <Typography>{obj}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skill;
