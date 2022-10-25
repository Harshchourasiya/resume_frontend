import { Avatar, Container, Stack, Typography, Button, Divider, Paper, useTheme, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteResume } from "../helper/API/Resume";
import { getUserInfo, logoutUser } from "../helper/API/User";
import { CREATE_ID } from "../helper/Strings";
import Lottie from 'react-lottie';
import Empty from '../LottieJSON/Empty.json';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';

const Resume = ({ resume, navigate, remover }) => {
    const [check, setCheck] = useState(true);
    const onDeleteClick = () => {
        deleteResume({ resumeId: resume.ResumeId });
        setCheck(false);
        setInterval(() => remover(resume), 500);
    }
    return (
        <Zoom in={check}>
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
        </Zoom>
    );
}


const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Resumes: []
    });
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        getUserInfo(setData);
        setInterval(() => setLoading(false), 500);
    }, []);


    const onCreateResumeClick = () => {
        navigate('../collector?id=' + CREATE_ID);
    }

    const onLogoutClick = () => {
        logoutUser();
        navigate('../');
    }

    const removeFromResumes = (resume) => {
        setData({
            ...data,
            Resumes: data.Resumes.filter((obj) => {
                return resume.ResumeId !== obj.ResumeId;
            })
        });
    }

    return (
        <Container>
            <Stack spacing={3} my={2}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItem='center' alignContent={'center'} spacing={1} >
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main }} variant="rounded">{data.Name.charAt(0).toUpperCase()}</Avatar>
                    <Container>
                        <Typography variant="h4">{data.Name.toUpperCase()}</Typography>
                        <Typography variant="h6">{data.Email}</Typography>
                    </Container>
                    <Stack justifyContent={'center'} alignItem={'center'} alignContent={'center'} spacing={1} >
                        <Button variant={'contained'} sx={{ backgroundColor: theme.palette.secondary.main }} onClick={onCreateResumeClick}>Create</Button>
                        <Button variant={'outlined'} onClick={onLogoutClick}>Logout</Button>
                    </Stack>
                </Stack>
                <Divider />

                <Stack direction={'row'} justifyContent={'flex-start'} alignContent={'center'} alignItem={'center'} spacing={3}>
                    {
                        data.Resumes.length !== 0 ?
                            data.Resumes.map((resume) => (
                                <Resume key={resume.ResumeId} resume={resume} navigate={navigate} remover={removeFromResumes} />
                            ))
                            :
                            !loading && <Lottie
                                options={{ animationData: Empty, loop: true }}
                                height={200}
                                width={200}
                            />
                    }
                </Stack>
            </Stack>
        </Container>
    )
}

export default Profile;