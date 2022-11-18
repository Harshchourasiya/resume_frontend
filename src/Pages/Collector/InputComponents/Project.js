import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addProject, removeProject } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";
import { EMPTY_PROJECT } from "../../helper/InitialState";
const AddProject = (props) => {
  const isNotEmpty = (props.idx !== -1);
  const data = isNotEmpty ? props.projects[props.idx] : EMPTY_PROJECT;
  const [project, setProject] = useState(data);

  const setName = (event) => {
    setProject({
      ...project,
      name: event.target.value
    });
  }
  const setDetail = (event) => {
    setProject({
      ...project,
      detail: event.target.value
    });
  }
  const setLink = (event) => {
    setProject({
      ...project,
      link: event.target.value
    });
  }

  const addData = () => {
    setProject(EMPTY_PROJECT);
    props.addProject(project);
  }

  const deleteData = () => {
    props.removeProject(props.idx);
  }

  const inputs = [
    {
      label: "Enter your Project Name",
      value: project.name,
      helperText: "Name should be between 1 to 50 characters",
      onChange: setName,
    }, {
      label: "Enter your Project Details",
      value: project.detail,
      helperText: "Detail should be between 1 to 300 characters",
      onChange: setDetail,
      multiline: true
    },
    {
      label: "Enter your Project Link",
      value: project.link,
      helperText: "Link must be URL",
      onChange: setLink,
    },
  ]

  const isValid = () => {
    return (
      project.name.length === 0 || project.detail.length === 0 || project.link.length === 0
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
              multiline={obj.multiline}
              inputProps={{
                style: {
                  height: obj.multiline && "100px",
                },
              }}
              helperText={!isNotEmpty && obj.helperText}
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
  addProject: (project) => dispatch(addProject(project)),
  removeProject: (idx) => dispatch(removeProject(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
