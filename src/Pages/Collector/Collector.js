import {
  Box,
  Container,
  Button,
  Stack,
  CircularProgress,
  Paper,
  Zoom
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import {CREATE_ID} from "../../helper/Strings";
import { getResume } from '../../helper/API/Resume';
import { setAllData } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import getUrlFromResumeID from './js/getUrlFromResumeID';
import {COLLECTOR_INPUTS} from '../../helper/InitialState';
import renderInputComponent from "./renderInputComponent";

const Collector = (props) => {
  const [idx, setIdx] = useState(0);
  const [check, setCheck] = useState(true);
  const [savedResume, setSavedResume] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const search = new URLSearchParams(useLocation().search);
  const resumeId = search.get('id');
  const resumeName = search.get('name');

  useEffect(() => {
    if (resumeId !== null && resumeId !== CREATE_ID && savedResume === undefined) {
      getResume(setSavedResume, resumeId);
    } else if (savedResume !== undefined) {
      props.setAllData(savedResume);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [savedResume]);


  const onFinishClick = () => {
    navigate(getUrlFromResumeID(resumeId, resumeName));
  }

  const move = (value) => {
    setLoading(true);
    setCheck(false);
    setTimeout(() => {
      setIdx(idx + value);
      setLoading(false);
      setCheck(true);
    }, 200);
  }

  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="space-between"
        spacing={5}>

        {
          loading ?
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="90vh"
            >
              <CircularProgress disableShrink sx={{ margin: 'auto' }} />
            </Box>
            :
            <Zoom in={check}>
              {
                renderInputComponent(idx)
              }
            </Zoom>
        }
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF', zIndex: 1100, }} elevation={3}>
          <Stack container direction="row" justifyContent="space-around" padding={1}>
            <Box>
              <Button variant="outlined" onClick={() => move(-1)} disabled={idx === 0}>
                Back
              </Button>
            </Box>
            {
              idx === COLLECTOR_INPUTS.length - 1 ? <Button onClick={onFinishClick} >
                Finish
              </Button> :
                <Box>
                  <Button variant="outlined" onClick={() => move(1)} disabled={props.name.length === 0} >
                    Next
                  </Button>
                </Box>
            }

          </Stack>
        </Paper>

      </Stack>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setAllData: (data) => dispatch(setAllData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collector);
