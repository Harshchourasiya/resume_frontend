import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { addExperience, removeExperience } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState} from "react";
import { EMPTY_EXPERIENCE } from "../../helper/InitialState";
const AddExperience = (props) => {
    const data = props.experiences.length === 0 ? EMPTY_EXPERIENCE : props.experiences[props.idx]; 
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
    <Container>
      <Stack spacing={2} sx={{ width: "50%", height: "20%" }}>
        <TextField
          onChange={setCompanyName}
          label="Company Name"
          value={experience.companyName}
          disabled={props.idx!==0}
        />
        <TextField
          onChange={setPosition}
          label="Enter Your Position"
          value={experience.position}
          disabled={props.idx!==0}
        />
        <TextField
          onChange={setDuties}
          label="Enter your Duties"
          value={experience.duties}
          disabled={props.idx!==0}
          multiline
        />
        <TextField
          onChange={setStartingDate}
          label="Starting Date"
          value={experience.starting}
          disabled={props.idx!==0}
        />

        <TextField
          onChange={setEndingDate}
          label="Ending Date"
          value={experience.ending}
          disabled={props.idx!==0}
        />
      </Stack>
      
      {
        props.idx > 0 ? <Button onClick={deleteData}>Remove</Button> : <Button onClick={addData}>Add</Button>
      }
    </Container>
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
