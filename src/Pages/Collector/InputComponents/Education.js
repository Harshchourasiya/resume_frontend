import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addEducation, removeEducation } from "../../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";
import { EMPTY_EDUCATION } from "../../../helper/InitialState";
import { isEducationValid } from "./Validator/Validator";
import getEducationTextFieldData from "../js/getEducationTextFieldData";

const AddEducation = (props) => {
  const isNotEmpty = (props.idx !== -1);
  const data = isNotEmpty ? props.educations[props.idx] : EMPTY_EDUCATION;
  const [education, setEducation] = useState(data);

  const setCollegeName = (event) => {
    setEducation({
      ...education,
      collegeName: event.target.value
    });
  }
  const setMajor = (event) => {
    setEducation({
      ...education,
      major: event.target.value
    });
  }
  const setCGPA = (event) => {
    setEducation({
      ...education,
      CGPA: event.target.value
    });
  }

  const setStartingDate = (event) => {
    setEducation({
      ...education,
      starting: event.target.value
    });
  }

  const setEndingDate = (event) => {
    setEducation({
      ...education,
      ending: event.target.value
    });
  }

  const addData = () => {
    setEducation(EMPTY_EDUCATION);
    props.addEducation(education);
  }

  const deleteData = () => {
    props.removeEducation(props.idx);
  }

  const inputs = getEducationTextFieldData(education, setCollegeName, setMajor, setCGPA, setStartingDate, setEndingDate);

  return (
    <Box sx={{ margin: 'auto', width: '100%' }}>
      <Stack spacing={2}>
        {
          inputs.map((obj, idx) => (
            <TextField
              key={idx}
              onChange={obj.onChange}
              label={obj.label}
              value={obj.value}
              disabled={isNotEmpty}
              helperText={!isNotEmpty && obj.helperText}
            />
          ))
        }
      </Stack>

      {
        isNotEmpty ? <Button onClick={deleteData}>Remove</Button>
          : <Button onClick={addData} disabled={isEducationValid(education)}>Add</Button>
      }
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addEducation: (education) => dispatch(addEducation(education)),
  removeEducation: (idx) => dispatch(removeEducation(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEducation);
