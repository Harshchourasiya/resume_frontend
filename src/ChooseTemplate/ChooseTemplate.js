import { Avatar, Container, Grid, Paper, Typography, Button, Stack, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const FOLDER_LOCATION = "/static/TemplateIMG";
const templates = [
    {
        name: "Simple Resume",
        imageLocation: FOLDER_LOCATION + "/simple.png",
        link: "/simple"
    },
];

const ChooseTemplate = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ margin: 3 }}>

            <Stack spacing={3} direction="row" justifyContent={"space-between"}>
                <IconButton onClick={()=> navigate('/collector')} >
                    <ArrowBackIcon/>
                </IconButton>
            <Typography variant="h3" align="center">Choose Template</Typography>
            <div></div>
            </Stack>

            <Grid container spacing={3} justifyContent="space-evenly" sx={{margin:2}}>
                {
                    templates.map((obj) => (
                        <Grid item>
                            <Button sx={{width : '150px',transition: 'width .2s ease .2s',":hover" :{
                                width: '200px'
                            }}} onClick={()=> navigate(obj.link)}>
                            <Paper sx={{width: 'auto', height: 'auto'}}>
                                <Avatar variant="rounded" src={obj.imageLocation} sx={{width: 'auto', height: 'auto'}}/>
                                <Typography variant="h7" align="center">{obj.name}</Typography>
                            </Paper>
                            </Button>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default ChooseTemplate;
