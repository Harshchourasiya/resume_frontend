import React from "react";

import AutoTyping, { BlinkCursor } from "react-auto-typing";
import { Typography, useTheme } from "@mui/material";
const AutoType = ({ str }) => {
    const theme = useTheme();
  return (
      <Typography variant="h3" >
        <div style={{color : theme.palette.primary.main}}>
        <AutoTyping
          active
          textRef={str}
          writeSpeed={150}
          deleteSpeed={150}
          delayToWrite={1000}
          delayToDelete={2000}
        />
        <BlinkCursor active blinkSpeed={500} />
            
        </div>
      </Typography>
  );
};

export default AutoType;
