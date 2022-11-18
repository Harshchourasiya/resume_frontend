import { Container, Typography, Stack, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Options from './Options';

const ChooseTemplate = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Stack spacing={3} direction="row" justifyContent={"space-between"}>
                <IconButton onClick={() => navigate(-1)} >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h3" align="center">Choose Template</Typography>
                <div></div>
            </Stack>
            <Options />
        </Container>
    );
};

export default ChooseTemplate;
