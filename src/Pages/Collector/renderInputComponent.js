import {
    Typography,
    Stack,
} from "@mui/material";
import Lottie from 'react-lottie';
import Typewriter from 'typewriter-effect';
import { COLLECTOR_INPUTS } from '../../helper/InitialState';


const renderInputComponent = (idx) => {
    return (
        <Stack
            container
            direction="column"
            justifyContent="space-between"
            spacing={2}
        >
            <Lottie
                options={{ animationData: COLLECTOR_INPUTS[idx].json, loop: false }}
                height={100}
                width={100}
            />
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Typography variant="h3">
                    Enter Your
                </Typography>
                <Typography variant="h3" sx={{ color: '#e44747' }}>
                    <Typewriter
                        options={{
                            strings: COLLECTOR_INPUTS[idx].title,
                            autoStart: true,
                            loop: false,
                        }}
                    />
                </Typography>
            </Stack>
            {COLLECTOR_INPUTS[idx].component}
        </Stack >
    )
}

export default renderInputComponent;