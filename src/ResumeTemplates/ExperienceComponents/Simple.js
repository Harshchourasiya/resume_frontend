import { Container, Stack, Paper, Typography } from "@mui/material"
import {Divide} from '../Helper/Design';


const Experience = ({experiences})=> {
    return (
        <Container>
            <Divide title="Experience" />
        <Stack container spacing={2}>
          {experiences.map((obj) => (
            <Paper sx={{padding:1}}>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row">
                  <Typography>{obj.companyName} </Typography>
                  <Typography marginX={1} >
                    -
                  </Typography>
                  <Typography>{obj.position}</Typography>
                </Stack>

                <Stack direction="row">
                  <Typography>{obj.starting}</Typography>
                  <Typography marginX={1} >
                    -
                  </Typography>
                  <Typography>{obj.ending}</Typography>
                </Stack>
              </Stack>
              <Typography variant="p">{obj.duties}</Typography>
            </Paper>
          ))}
        </Stack>
        </Container>
    )
}

export default Experience;