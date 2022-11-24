import { connect } from "react-redux";
import { Box, Stack } from "@mui/material";
import getAddableData from "../js/getAddableData";

const Addable = (props) => {
  const data = getAddableData(props);
  
  return (
    <Box sx={{ width: '100%', margin: 'auto', paddingBottom: '100px' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <props.component idx={-1} />
        {data.map((obj, idx) => (
          <props.component idx={idx} key={idx} />
        ))}
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Addable);
