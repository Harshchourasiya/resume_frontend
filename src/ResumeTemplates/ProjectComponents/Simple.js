
import { Container, Stack, Paper, Typography, Link } from "@mui/material"
import {Divide} from '../Helper/Design';

const Project = ({projects}) => {
  return (
    <Container>
      <Divide title="Projects" />
      <Stack container spacing={2}>
        {projects.map((obj) => (
          <Paper sx={{ padding: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5">{obj.name}</Typography>
              <Link href={obj.link}>
                <Typography>Visit</Typography>
              </Link>
            </Stack>
            <Typography variant="p">{obj.details}</Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default Project;
