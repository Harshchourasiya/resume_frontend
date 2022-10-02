import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { addProject, removeProject } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState} from "react";
import { EMPTY_PROJECT } from "../../helper/InitialState";
const AddProject = (props) => {
  const isNotEmpty = (props.idx!==-1);
  const data = isNotEmpty ? props.projects[props.idx] : EMPTY_PROJECT; 
    const [project, setProject] = useState(data);

    const setName = (event)=> {
        setProject({
          ...project,
            name : event.target.value
        });
    }
    const setDetail = (event)=> {
        setProject({
          ...project,
            detail : event.target.value
        });
    }
    const setLink = (event)=> {
        setProject({
          ...project,
            link : event.target.value
        });
    }

    const addData = () => {
      setProject(EMPTY_PROJECT);
      props.addProject(project);
    }

    const deleteData = () => {
      props.removeProject(props.idx);
    }
  return (
    <Container>
      <Stack spacing={2} sx={{ width: "50%", height: "20%" }}>
        <TextField
          onChange={setName}
          label="Project Name"
          value={project.name}
          disabled={isNotEmpty}
        />
        <TextField
          onChange={setDetail}
          label="Enter Detail"
          value={project.detail}
          multiline
          disabled={isNotEmpty}
        />
        <TextField
          onChange={setLink}
          label="Enter Link"
          value={project.link}
          disabled={isNotEmpty}
          multiline
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
  addProject: (project) => dispatch(addProject(project)),
  removeProject : (idx) => dispatch(removeProject(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
