import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addEducation, removeEducation } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";
import { EMPTY_EDUCATION } from "../../helper/InitialState";

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

  const inputs = [
    {
      label: "College Or School Name",
      value: education.collegeName,
      helperText: "Enter College Name must be between 1 to 100 characters",
      onChange: setCollegeName
    },
    {
      label: "Enter Your Major",
      value: education.major,
      helperText: "Enter Major must be between 1 to 50 characters",
      onChange: setMajor
    },
    {
      label: "Enter your CGPA",
      value: education.CGPA,
      helperText: "Enter CGPA must be between 1 to 4 characters",
      onChange: setCGPA
    },
    {
      label: "Starting Date",
      value: education.starting,
      helperText: "Enter Starting Date must be like May 2021 or 01-07-2020",
      onChange: setStartingDate
    },
    {
      label: "Ending Date",
      value: education.ending,
      helperText: "Enter Starting Date must be like May 2021 or 01-07-2020 or Present",
      onChange: setEndingDate
    },
  ];

  const isValid = () => {
    return (
      education.collegeName.length === 0 || education.major.length === 0
      || education.CGPA.length === 0 || education.starting.length === 0 || education.ending.length === 0
    );
  }

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
          : <Button onClick={addData} disabled={isValid()}>Add</Button>
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
