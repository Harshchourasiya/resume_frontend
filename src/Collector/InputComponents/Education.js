import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { addEducation, removeEducation } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState} from "react";
import { EMPTY_EDUCATION } from "../../helper/InitialState";

const AddEducation = (props) => {
    const isNotEmpty = (props.idx!==-1);
    const data = isNotEmpty ? props.educations[props.idx] : EMPTY_EDUCATION; 
    const [education, setEducation] = useState(data);

    const setCollegeName = (event)=> {
        setEducation({
          ...education,
            collegeName : event.target.value
        });
    }
    const setMajor = (event)=> {
        setEducation({
          ...education,
            major: event.target.value
        });
    }
    const setCGPA = (event)=> {
        setEducation({
          ...education,
            CGPA : event.target.value
        });
    }

    const setStartingDate = (event) => {
      setEducation({
        ...education,
          starting : event.target.value
      });
    }

    const setEndingDate = (event) => {
      setEducation({
        ...education,
          ending : event.target.value
      });
    }

    const addData = () => {
      setEducation(EMPTY_EDUCATION);
      props.addEducation(education);
    }

    const deleteData = () => {
      props.removeEducation(props.idx);
    }
  return (
    <Container>
      <Stack spacing={2} sx={{ width: "50%", height: "20%" }}>
        <TextField
          onChange={setCollegeName}
          label="College Or School Name"
          value={education.collegeName}
          disabled={isNotEmpty}
        />
        <TextField
          onChange={setMajor}
          label="Enter Your Major"
          value={education.major}
          disabled={isNotEmpty}
        />
        <TextField
          onChange={setCGPA}
          label="Enter your CGPA"
          value={education.CGPA}
          disabled={isNotEmpty}
          multiline
        />
        <TextField
          onChange={setStartingDate}
          label="Starting Date"
          value={education.starting}
          disabled={isNotEmpty}
        />

        <TextField
          onChange={setEndingDate}
          label="Ending Date"
          value={education.ending}
          disabled={isNotEmpty}
        />
      </Stack>
      
      {
        isNotEmpty ? <Button onClick={deleteData}>Remove</Button> : <Button onClick={addData}>Add</Button>
      }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addEducation: (education) => dispatch(addEducation(education)),
  removeEducation : (idx) => dispatch(removeEducation(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEducation);
