
import { Avatar, Grid, Paper, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SIMPLE_ID } from "../helper/Strings";

const Options = () => {

    const navigate = useNavigate();
    const FOLDER_LOCATION = "/static/TemplateIMG";
    const templates = [
        {
            id: SIMPLE_ID,
            name: "Simple Resume",
            imageLocation: FOLDER_LOCATION + "/simple.png",
        },
        {
            id: SIMPLE_ID,
            name: "Simple Resume",
            imageLocation: FOLDER_LOCATION + "/simple.png",
        },
        {
            id: SIMPLE_ID,
            name: "Simple Resume",
            imageLocation: FOLDER_LOCATION + "/simple.png",
        },
    ];

    return (
        <Grid container spacing={3} justifyContent="space-evenly" my={2}>
            {
                templates.map((obj) => (
                    <Grid item>
                        <Button sx={{
                            width: '150px', transition: 'width .2s ease .2s', ":hover": {
                                width: '200px'
                            }
                        }} onClick={() => navigate("/download/" + obj.id)}>
                            <Paper sx={{ width: 'auto', height: 'auto' }}>
                                <Avatar variant="rounded" src={obj.imageLocation} sx={{ width: 'auto', height: 'auto' }} />
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