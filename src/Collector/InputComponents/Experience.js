import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addExperience, removeExperience } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState} from "react";
import { EMPTY_EXPERIENCE } from "../../helper/InitialState";
const AddExperience = (props) => {
    const isNotEmpty = (props.idx!==-1);
    const data = isNotEmpty ? props.experiences[props.idx] : EMPTY_EXPERIENCE; 
    const [experience, setExperience] = useState(data);
    const setCompanyName = (event)=> {
        setExperience({
          ...experience,
            companyName : event.target.value
        });
    }
    const setPosition = (event)=> {
        setExperience({
          ...experience,
            position : event.target.value
        });
    }
    const setDuties = (event)=> {
        setExperience({
          ...experience,
            duties : event.target.value
        });
    }

    const setStartingDate = (event) => {
      setExperience({
        ...experience,
          starting : event.target.value
      });
    }

    const setEndingDate = (event) => {
      setExperience({
        ...experience,
          ending : event.target.value
      });
    }

    const addData = () => {
      setExperience(EMPTY_EXPERIENCE);
      props.addExperience(experience);
    }

    const deleteData = () => {
      props.removeExperience(props.idx);
    }
  return (
    <Box sx={{margin: 'auto', width: '100%'}}>
      <Stack spacing={2}>
        <TextField
          onChange={setCompanyName}
          label="Company Name"
          value={experience.companyName}
          disabled={isNotEmpty}
        />
        <TextField
          onChange={setPosition}
          label="Enter Your Position"
          value={experience.position}
          disabled={isNotEmpty}
        />
        <TextField
          onChange={setDuties}
          label="Enter your Duties"
          value={experience.duties}
          disabled={isNotEmpty}
          multiline
        />
        <TextField
          onChange={setStartingDate}
          label="Starting Date"
          value={experience.starting}
          disabled={isNotEmpty}
        />

        <TextField
          onChange={setEndingDate}
          label="Ending Date"
          value={experience.ending}
          disabled={isNotEmpty}
        />
      </Stack>
      
      {
        isNotEmpty ? <Button onClick={deleteData}>Remove</Button> : <Button onClick={addData}>Add</Button>
      }
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addExperience: (experience) => dispatch(addExperience(experience)),
  removeExperience : (idx) => dispatch(removeExperience(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);
