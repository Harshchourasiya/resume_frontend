import { Container, Stack, IconButton, Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { SIMPLE_ID, MATRIX_ID, DARK_RED_MATRIX_ID, DARK_RED_SIMPLE_ID } from "../helper/Strings";
import Simple from "../ResumeTemplates/Simple";
import Matrix from "../ResumeTemplates/Matrix";
import { PDFViewer } from "@react-pdf/renderer";
import { connect } from 'react-redux'

const BLACK = "#000";
const DARK_RED = "#e44747";

const getResumeTemplate = (id, props) => {
    switch (id) {
        case SIMPLE_ID:
            return <Simple data={props} color={BLACK}/>;
        case MATRIX_ID:
            return <Matrix data={props} color={BLACK}/>
        case DARK_RED_MATRIX_ID:
            return <Matrix data={props} color={DARK_RED}/>
        case DARK_RED_SIMPLE_ID:
            return <Simple data={props} color={DARK_RED}/>;
        default:
            return <Simple data={props} color={BLACK}/>;
    }
}

const DownloadResume = (props) => {

    const { id} = useParams();
    const navigate = useNavigate();
    const ResumeTemplate = getResumeTemplate(id, props);
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    return (
        <Container>
            <Stack direction="row" justifyContent={"flex-start"}>
                <IconButton onClick={() => navigate(-1)} >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h3" mx={10} my={2}>{name}</Typography>
            </Stack>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width= '100%'
                height='900px'
            >
                <PDFViewer width={'100%'} height={'100%'}>
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