import { Button, TextField, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { addSkill, removeSkill } from "../../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";

const AddSkill = (props) => {
  const isNotEmpty = (props.idx !== -1);
  const data = isNotEmpty ? props.skills[props.idx] : "";
  const [skill, setSkill] = useState(data);

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
    <Box sx={{ margin: 'auto', width: '70%' }}>
      <Stack spacing={2}>
        <TextField
          onChange={setSkillData}
          label="Enter Skill"
          value={skill}
          disabled={isNotEmpty}
          helperText={!isNotEmpty && "Skills Must contains at least 1 character and at most 50 Character"}
        />
        {
          isNotEmpty ? <Button onClick={deleteData}>Remove</Button> : <Button onClick={addData} disabled={skill.length === 0 || skill.length > 50}>Add</Button>
        }
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  addSkill: (skill) => dispatch(addSkill(skill)),
  removeSkill: (idx) => dispatch(removeSkill(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSkill);
