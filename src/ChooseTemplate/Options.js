
import { Avatar, Grid, Paper, Typography, Button} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { SIMPLE_ID, MATRIX_ID,DARK_RED_MATRIX_ID,DARK_RED_SIMPLE_ID } from "../helper/Strings";

const Options = () => {

    const navigate = useNavigate();
    const FOLDER_LOCATION = "/static/TemplateIMG";
    const templates = [
        {
            id: SIMPLE_ID,
            name: "Simple",
            imageLocation: "/simple.png",
        },
        {
            id: MATRIX_ID,
            name: "Matrix",
            imageLocation: "/matrix.png",
        },
        {
            id: DARK_RED_MATRIX_ID,
            name: "Dark Red Matrix",
            imageLocation: "/darkredmatrix.png",
        },
        {
            id: DARK_RED_SIMPLE_ID,
            name: "Dark Red Simple",
            imageLocation: "/darkredsimple.png",
        },
    ];
    const search = new URLSearchParams(useLocation().search);
    const resumeId = search.get('id');
    const resumeName = search.get('name');


    const onTemplateClick = (obj) => {
        let url = "/download/" + obj.id;
        url += "?name=" + (resumeName!==null ? resumeName : obj.name);
        url += resumeId !== null ? "&id="+resumeId : "";
        navigate(url);
    }
    return (
        <Grid container spacing={3} justifyContent="space-evenly" my={2}>
            {
                templates.map((obj) => (
                    <Grid key={obj.id} item>
                        <Button sx={{
                            width: '150px', transition: 'width .2s ease .2s', ":hover": {
                                width: '200px'
                            }
                        }} onClick={()=> onTemplateClick(obj)}>
                            <Paper sx={{ width: 'auto', height: 'auto' }}>
                                <Avatar variant="rounded" src={FOLDER_LOCATION+obj.imageLocation} sx={{ width: 'auto', height: 'auto' }} />
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