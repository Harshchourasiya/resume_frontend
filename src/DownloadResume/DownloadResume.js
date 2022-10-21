import { Container, Stack, Typography, IconButton, Button, Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from "react-router-dom";
import { SIMPLE_ID } from "../helper/Strings";
import Simple from "../ResumeTemplates/Simple";
import { PDFViewer } from "@react-pdf/renderer";
import { connect } from 'react-redux'

const getResumeTemplate = (id, props) => {
    switch (id) {
        case SIMPLE_ID:
            return <Simple data={props} />;
        default:
            return <Simple data={props} />;
    }
}

const DownloadResume = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const ResumeTemplate = getResumeTemplate(id, props);
    const downloadResume = () => {
        // Download the Resume
    }


    return (
        <Container>
            <Stack direction="row" justifyContent={"space-between"}>
                <IconButton onClick={() => navigate(-1)} >
                    <ArrowBackIcon />
                </IconButton>
            </Stack>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <PDFViewer width={800} height={800}>
                    {
                        ResumeTemplate
                    }
                </PDFViewer>
        </Box>
        </Container >
    );
}
const mapStateToProps = (state) => ({
    ...state,
});
export default connect(mapStateToProps)(DownloadResume);