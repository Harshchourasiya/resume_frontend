import { Container, Stack, Typography, Button, Paper } from "@mui/material";
import { deleteResume } from "../../../helper/API/Resume";
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';

const Resume = ({ resume, navigate, remover }) => {
    const onDeleteClick = () => {
        deleteResume({ resumeId: resume.ResumeId });
        remover(resume)
    }
    return (
        <Paper>
            <Stack>
                <Button onClick={() => {
                    navigate("../collector?id=" + resume.ResumeId + "&name=" + resume.ResumeName);
                }}>

                    <Container>
                        <DescriptionIcon />
                        <Typography>{resume.ResumeName}</Typography>
                    </Container>
                </Button>
                <Button variant="contained" onClick={onDeleteClick} startIcon={<DeleteIcon />} sx={{ backgroundColor: '#FF0000', color: '#FFF' }}>
                    Delete
                </Button>
            </Stack>
        </Paper>
    );
}

export {
    Resume
}