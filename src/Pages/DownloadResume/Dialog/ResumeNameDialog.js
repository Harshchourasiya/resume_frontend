import { Button, Dialog, DialogTitle, InputAdornment, TextField } from "@mui/material";
import { Report } from "@mui/icons-material";


const ResumeNameDialog = (props) => {
    const { setOpen, open, setResumeName, toSaveResume, resumeName } = props;

    const onTextEnter = (event) => {
        setResumeName(event.target.value);
    }
    return (
        <Dialog maxWidth={'sm'} fullWidth onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Resume Name</DialogTitle>
            <TextField
                id="input-with-icon-adornment"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Report />
                        </InputAdornment>
                    ),
                }}
                required={true}
                type="text"
                onChange={onTextEnter}
                placeholder="Enter Resume Name..."
                value={resumeName}
                sx={{ margin: '10px' }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#e44747", width: '200px', margin: 'auto' }} onClick={() => toSaveResume()}>Save</Button>
            <Button onClick={() => setOpen(false)}>Close</Button>
        </Dialog>
    );
}

export {
    ResumeNameDialog
}