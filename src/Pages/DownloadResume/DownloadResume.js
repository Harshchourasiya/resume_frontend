import { Container, Stack, IconButton, Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { connect } from 'react-redux'
import { useState } from "react";
import { CreateOrSaveResume } from "../../helper/API/Resume";
import { setData } from '../../helper/UtilityMethods';
import { getResumeTemplate } from "./js/getResumeTemplate";
import { ResumeNameDialog } from "./Dialog/ResumeNameDialog";


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
        const body = {};
        setData(data, props);
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