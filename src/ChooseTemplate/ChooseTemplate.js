import { Avatar, Container, Grid, Paper, Typography, Button, Stack, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SIMPLE_ID } from "../helper/Strings";
import Options from './Options';
const FOLDER_LOCATION = "/static/TemplateIMG";
const templates = [
    {
        id: SIMPLE_ID,
        name: "Simple Resume",
        imageLocation: FOLDER_LOCATION + "/simple.png",
    },
];

const ChooseTemplate = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ margin: 3 }}>

            <Stack spacing={3} direction="row" justifyContent={"space-between"}>
                <IconButton onClick={()=> navigate(-1)} >
                    <ArrowBackIcon/>
                </IconButton>
            <Typography variant="h3" align="center">Choose Template</Typography>
            <div></div>
            </Stack>

            <Options/>
           
        </Container>
    );
};

export default ChooseTemplate;
