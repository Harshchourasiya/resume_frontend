import { connect } from "react-redux";
import { Box, Stack } from "@mui/material";
import {
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECT,
  SKILL,
} from "../../helper/Strings";

const getData = (props) => {
  switch (props.type) {
    case EXPERIENCE:
      return props.experiences;

    case EDUCATION:
      return props.educations;

    case SKILL:
      return props.skills;
    case PROJECT:
      return props.projects;
    case PROFILE:
      return props.profiles;
    default:
      return props.educations;
  }
};

const Addable = (props) => {
  const data = getData(props);
  return (
    <Box sx={{ width: '100%', margin: 'auto', paddingBottom: '100px' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <props.component idx={-1} />
        {data.map((obj, idx) => (
          <props.component idx={idx} key={idx}/>
        ))}
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Addable);
