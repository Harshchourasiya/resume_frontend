import { Container, Stack, Paper, Typography } from "@mui/material"
import {Divide} from '../Helper/Design';


const Education = ({educations})=> {
    return (
        <Container>
          <Divide title="Education" />
        <Stack container spacing={2}>
          {educations.map((obj) => (
            <Paper sx={{padding:1}}>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row">
                  <Typography>{obj.name} - {obj.major}</Typography>
                </Stack>
              <Typography variant="h7">CGPA : {obj.CGPA}</Typography>

                <Stack direction="row">
                  <Typography>{obj.starting}  -  {obj.ending}</Typography>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
        </Container>
    )
}

export default Education;