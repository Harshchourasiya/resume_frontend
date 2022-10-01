import { Divider, Typography } from "@mui/material";

const Divide = ({ title }) => {
  return (
    <Divider textAlign="left">
      <Typography variant="h6">{title}</Typography>
    </Divider>
  );
};

export {
    Divide
}
