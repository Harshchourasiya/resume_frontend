import { Avatar, Container, Stack, Typography, Button, Divider, useTheme, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, logoutUser } from "../../helper/API/User";
import { CREATE_ID } from "../../helper/Strings";
import Lottie from 'react-lottie';
import Empty from '../../LottieJSON/Empty.json';
import { setIsUser } from "../../Redux/Actions";
import { connect } from "react-redux";
import {Resume} from './Component/Resume';

const Profile = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Resumes: []
    });
    const theme = useTheme();

    useEffect(() => {
        getUserInfo(setData);
    }, []);


    const onCreateResumeClick = () => {
        navigate('../collector?id=' + CREATE_ID);
    }

    const onLogoutClick = () => {
        logoutUser();
        props.setIsUser(false);
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

    const ProfileComponent = () => {
        return (
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
                            <Lottie
                                options={{ animationData: Empty, loop: true }}
                                height={200}
                                width={200}
                            />
                    }
                </Stack>
            </Stack>
        );
    }

    return (
        <Container>
            {
                data.Name.length === 0 ? <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="90vh"
                >
                    <CircularProgress disableShrink sx={{ margin: 'auto' }} />
                </Box>
                    :
                    <ProfileComponent />
            }
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setIsUser: (isUser) => dispatch(setIsUser(isUser)),
});

export default connect(null, mapDispatchToProps)(Profile);