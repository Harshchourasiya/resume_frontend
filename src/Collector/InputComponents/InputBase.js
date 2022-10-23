import { TextField } from "@mui/material";
import { useState } from "react";
import { addName, addAboutMe, addTitle } from "../../Redux/Actions";
import { connect } from "react-redux";

const getAddMethod = (props) => {
  const type = props.type;
  switch (type) {
    case "AddName":
      return {
        val: props.name,
        add: props.addName,
      };

    case "AddTitle":
      return {
        val: props.title,
        add: props.addTitle,
      };

    case "AddAboutMe":
      return {
        val: props.aboutMe,
        add: props.addAboutMe,
      };
    default:
      return null;
  }
};

const Input = (props) => {
  const data = getAddMethod(props);
  const [value, setValue] = useState(data.val);

  const onChange = (event) => {
    data.add(event.target.value);
    setValue(event.target.value);
  };

  return props.isMultiline ? (
    <TextField
      label={props.label}
      value={value}
      variant="outlined"
      onChange={onChange}
      multiline
      maxRows={4}
    />
  ) : (
    <TextField
      label={props.label}
      value={value}
      variant="outlined"
      onChange={onChange}
    />
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addName: (name) => dispatch(addName(name)),
  addTitle: (title) => dispatch(addTitle(title)),
  addAboutMe: (aboutMe) => dispatch(addAboutMe(aboutMe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
