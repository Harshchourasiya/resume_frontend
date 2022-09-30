import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { addSkill, removeSkill } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState} from "react";
const AddSkill = (props) => {
    const data = props.skills; 
    const [skill, setSkill] = useState(data[props.idx]);

    const setSkillData = (event) => {
      setSkill(event.target.value);
    }

    const addData = () => {
      setSkill("");
      props.addSkill(skill);
    }

    const deleteData = () => {
      props.removeSkill(props.idx);
    }
  return (
    <Container>
        <TextField
          onChange={setSkillData}
          label="Enter Skill"
          value={skill}
          disabled={props.idx!==0}
        />
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
  addSkill: (skill) => dispatch(addSkill(skill)),
  removeSkill : (idx) => dispatch(removeSkill(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSkill);
