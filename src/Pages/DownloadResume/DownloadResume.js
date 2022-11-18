import { Container, Stack, IconButton, Box, Typography, Button, Dialog, DialogTitle, InputAdornment, TextField, Snackbar, Alert } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { SIMPLE_ID, MATRIX_ID, DARK_RED_MATRIX_ID, DARK_RED_SIMPLE_ID } from "../../helper/Strings";
import Simple from "../../Components/ResumeTemplates/Simple";
import Matrix from "../../Components/ResumeTemplates/Matrix";
import { PDFViewer } from "@react-pdf/renderer";
import { connect } from 'react-redux'
import { Report } from "@mui/icons-material";
import { useState } from "react";
import { CreateOrSaveResume } from "../../helper/API/Resume";
import { setData } from '../../helper/UtilityMethods';

const BLACK = "#000";
const DARK_RED = "#e44747";

const getResumeTemplate = (id, props) => {
    switch (id) {
        case SIMPLE_ID:
            return <Simple data={props} color={BLACK} />;
        case MATRIX_ID:
            return <Matrix data={props} color={BLACK} />
        case DARK_RED_MATRIX_ID:
            return <Matrix data={props} color={DARK_RED} />
        case DARK_RED_SIMPLE_ID:
            return <Simple data={props} color={DARK_RED} />;
        default:
            return <Simple data={props} color={BLACK} />;
    }
}

const ResumeNameDialog = (props) => {
    const { setOpen, open, setResumeName, toSaveResume, resumeName } = props;

    const onTextEnter = (event) => {
        setResumeName(event.target.value);
    }
    return (
        <Dialog maxWidth={'sm'} fullWidth onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Resume Name</DialogTitle>
            <TextField
                id="input-with-icon-adornment"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Report />
                        </InputAdornment>
                    ),
                }}
                required={true}
                type="text"
                onChange={onTextEnter}
                placeholder="Enter Resume Name..."
                value={resumeName}
                sx={{ margin: '10px' }}
            />
            <Button variant="contained" sx={{ backgroundColor: DARK_RED, width: '200px', margin: 'auto' }} onClick={() => toSaveResume()}>Save</Button>
            <Button onClick={() => setOpen(false)}>Close</Button>
        </Dialog>
    );
}

const DownloadResume = (props) => {

    const { id } = useParams();
    const search = new URLSearchParams(useLocation().search);
    const name = search.get('name');
    const resumeId = search.get('id');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [resumeName, setResumeName] = useState(name);
    const [isSuccess, setIsSuccess] = useState(false);
    const ResumeTemplate = getResumeTemplate(id, props);

    const toSaveResume = () => {
        const data = {};
        setData(data, props);
        const body = {};
        if (resumeName.length !== 0) {
            body.name = resumeName;
        }

        body.data = data;
        body.resumeId = resumeId;
        CreateOrSaveResume(body, setIsSuccess);
        setOpen(false);
    }


    return (
        <Container>
            <Stack direction="row" justifyContent={"space-between"}>
                <Box display="flex"
                    alignItems="center">
                    <IconButton onClick={() => navigate(-1)} >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h3" mx={10} my={2}>{name}</Typography>
                </Box>
                {
                    resumeId && <Button variant="outlined" sx={{ margin: '30px' }} onClick={() => setOpen(true)}>Save</Button>
                }
            </Stack>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width='100%'
                height='900px'
            >
                <PDFViewer width={'100%'} height={'100%'}>
                    {
                        ResumeTemplate
                    }
                </PDFViewer>
            </Box>

            <ResumeNameDialog open={open} setOpen={setOpen} setResumeName={setResumeName} toSaveResume={toSaveResume} resumeName={resumeName} />

            <Snackbar open={isSuccess} autoHideDuration={6000} onClose={() => setIsSuccess(false)}>
                <Alert onClose={() => setIsSuccess(false)} severity={isSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {
                        isSuccess ? "Saved!" : "Not Saved!"
                    }
                </Alert>
            </Snackbar>
        </Container >
    );
}
const mapStateToProps = (state) => ({
    ...state,
});
export default connect(mapStateToProps)(DownloadResume);