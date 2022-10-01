import { Divide } from "../Helper/Design";
import { Paper, Grid, Link, Container } from "@mui/material";

const Profile = ({ profiles }) => {
  return (
    <Container>
      <Divide title="Contact me" />
      <Paper sx={{ padding: 2 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {profiles.map((obj) => (
            <Grid item>
              <Link href={obj.link}>{obj.name}</Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
