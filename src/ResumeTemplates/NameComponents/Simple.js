import {Stack, Typography} from '@mui/material'

const Name = ({name , title}) => {
    return (
        <Stack spacing={0}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">{title}</Typography>
      </Stack>
    );
}

export default Name;