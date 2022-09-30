import { connect } from "react-redux";
import { Stack } from "@mui/material";
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
    <Stack>
      {data.map((obj, idx) => (
        <props.component idx={idx} />
      ))}
    </Stack>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Addable);
