import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addProfile, removeProfile } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { useState } from "react";
import { EMPTY_PROFILE } from "../../helper/InitialState";
const AddProfile = (props) => {
  const isNotEmpty = (props.idx !== -1);
  const data = isNotEmpty ? props.profiles[props.idx] : EMPTY_PROFILE;
  const [profile, setProfile] = useState(data);

  const setName = (event) => {
    setProfile({
      ...profile,
      name: event.target.value
    });
  }
  const setLink = (event) => {
    setProfile({
      ...profile,
      link: event.target.value
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
    <Box sx={{margin: 'auto', width: '100%'}}>
      <Stack spacing={2}>
        <TextField
          onChange={setName}
          label="Profile Name"
          value={profile.name}
          disabled={isNotEmpty}
        />

        <TextField
          onChange={setLink}
          label="Enter Link"
          value={profile.link}
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
  addProfile: (profile) => dispatch(addProfile(profile)),
  removeProfile: (idx) => dispatch(removeProfile(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile);
