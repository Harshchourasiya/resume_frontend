import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addExperience, removeExperience } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";
import { EMPTY_EXPERIENCE } from "../../helper/InitialState";
const AddExperience = (props) => {
  const isNotEmpty = (props.idx !== -1);
  const data = isNotEmpty ? props.experiences[props.idx] : EMPTY_EXPERIENCE;
  const [experience, setExperience] = useState(data);
  const setCompanyName = (event) => {
    setExperience({
      ...experience,
      companyName: event.target.value
    });
  }
  const setPosition = (event) => {
    setExperience({
      ...experience,
      position: event.target.value
    });
  }
  const setDuties = (event) => {
    setExperience({
      ...experience,
      duties: event.target.value
    });
  }

  const setStartingDate = (event) => {
    setExperience({
      ...experience,
      starting: event.target.value
    });
  }

  const setEndingDate = (event) => {
    setExperience({
      ...experience,
      ending: event.target.value
    });
  }

  const addData = () => {
    setExperience(EMPTY_EXPERIENCE);
    props.addExperience(experience);
  }

  const deleteData = () => {
    props.removeExperience(props.idx);
  }

  const inputs = [
    {
      label : "Enter Company Name",
      value : experience.companyName,
      helperText: "Enter Company Name must be between 1 to 100 characters",
      onChange : setCompanyName
    },
    {
      label : "Enter Your Position",
      value : experience.position,
      helperText: "Enter Major must be between 1 to 50 characters",
      onChange : setPosition
    },
    {
      label : "Enter your Duties",
      value : experience.duties,
      helperText: "Enter Duties should be between 100 to 300 characters",
      onChange : setDuties,
      multiline: true
    },
    {
      label : "Starting Date",
      value : experience.starting,
      helperText: "Enter Starting Date must be like May 2021 or 01-07-2020",
      onChange : setStartingDate
    },
    {
      label : "Ending Date",
      value : experience.ending,
      helperText: "Enter Starting Date must be like May 2021 or 01-07-2020 or Present",
      onChange : setEndingDate
    },
  ];

  const isValid = () => {
    return (
      experience.companyName.length === 0 || experience.position.length === 0
          || experience.duties.length === 0 || experience.starting.length === 0 || experience.ending.length=== 0
    );
  }

  return (
    <Box sx={{ margin: 'auto', width: '100%' }}>
      <Stack spacing={2}>
        {
          inputs.map((obj, idx)=> (
            <TextField
            key={idx}
            onChange={obj.onChange}
            label={obj.label}
            value={obj.value}
            disabled={isNotEmpty}
            helperText={!isNotEmpty && obj.helperText}
            multiline={obj.multiline}
            inputProps={{
              style: {
                height: obj.multiline && "100px",
              },
            }}
          />
          ))
        }
      </Stack>

      {
        isNotEmpty ? <Button onClick={deleteData}>Remove</Button> : <Button onClick={addData} disabled={isValid()}>Add</Button>
      }
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addExperience: (experience) => dispatch(addExperience(experience)),
  removeExperience: (idx) => dispatch(removeExperience(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);
