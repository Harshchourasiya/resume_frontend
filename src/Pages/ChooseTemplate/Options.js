
import { Avatar, Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { TEMPLATES } from "../../helper/InitialState";
import {TEMPLATEIMG_LOCATION} from '../../helper/Strings';
import getResumeUrlFromID from "./js/getResumeUrlFromID";

const Options = () => {

    const navigate = useNavigate();
    const search = new URLSearchParams(useLocation().search);
    const resumeId = search.get('id');
    const resumeName = search.get('name');


    const onTemplateClick = (obj) => {
        navigate(getResumeUrlFromID(obj.id, obj.name, resumeName, resumeId));
    }

    return (
        <Grid container spacing={3} justifyContent="space-evenly" my={2}>
            {
                TEMPLATES.map((obj) => (

                    <Grid key={obj.id} item>
                        <Button sx={{
                            width: '150px', transition: 'width .2s ease .2s', ":hover": {
                                width: '200px'
                            }
                        }} onClick={() => onTemplateClick(obj)}>
                            <Paper sx={{ width: 'auto', height: 'auto' }}>
                                <Avatar variant="rounded" src={TEMPLATEIMG_LOCATION + obj.imageLocation} sx={{ width: 'auto', height: 'auto' }} />
                                <Typography variant="h7" align="center">{obj.name}</Typography>
                            </Paper>
                        </Button>
                    </Grid>

                ))
            }
        </Grid>
    );
}


export default Options;