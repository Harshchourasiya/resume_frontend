import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addExperience, removeExperience } from "../../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";
import { EMPTY_EXPERIENCE } from "../../../helper/InitialState";
import { isExperienceValid } from "./Validator/Validator";
import getExperienceTextFieldData from "../js/getExperienceTextFieldData";

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

  const inputs = getExperienceTextFieldData(experience, setCompanyName, setPosition, setDuties, setStartingDate, setEndingDate);

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
        isNotEmpty ? <Button onClick={deleteData}>Remove</Button> : <Button onClick={addData} disabled={isExperienceValid(experience)}>Add</Button>
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
