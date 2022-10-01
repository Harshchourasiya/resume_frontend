import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { addProfile, removeProfile } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState} from "react";
import { EMPTY_PROFILE } from "../../helper/InitialState";
const AddProfile = (props) => {
    const data = props.profiles.length === 0 ? EMPTY_PROFILE : props.profiles[props.idx]; 
    const [profile, setProfile] = useState(data);

    const setName = (event)=> {
        setProfile({
          ...profile,
            name : event.target.value
        });
    }
    const setLink = (event)=> {
        setProfile({
          ...profile,
            link : event.target.value
        });
    }

    const addData = () => {
      setProfile(EMPTY_PROFILE);
      props.addProfile(profile);
    }

    const deleteData = () => {
      props.removeProfile(props.idx);
    }
  return (
    <Container>
      <Stack spacing={2} sx={{ width: "50%", height: "20%" }}>
        <TextField
          onChange={setName}
          label="Profile Name"
          value={profile.name}
          disabled={props.idx!==0}
        />
    
        <TextField
          onChange={setLink}
          label="Enter Link"
          value={profile.link}
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
  addProfile: (profile) => dispatch(addProfile(profile)),
  removeProfile : (idx) => dispatch(removeProfile(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile);
