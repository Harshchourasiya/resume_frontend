import { Container, Stack, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from "react-router-dom";
import { SIMPLE_ID } from "../helper/Strings";
import Simple from "../ResumeTemplates/Simple";

const getResumeTemplate = (id) => {
    switch (id) {
        case SIMPLE_ID:
            return <Simple />;
        default:
            return <Simple />;
    }
}

const DownloadResume = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const ResumeTemplate = getResumeTemplate(id);

    const downloadResume = () => {
        // Download the Resume
    }
    return (
        <Container>
            <Stack direction="row" justifyContent={"space-between"}>
                <IconButton onClick={()=> navigate('/choose')} >
                    <ArrowBackIcon/>
                </IconButton>
                <Button onClick={downloadResume}>
            <Typography variant="h6" align="center">Download</Typography>
                </Button>
            </Stack>

            {
                ResumeTemplate
            }
        </Container>
    );
}

export default DownloadResume;