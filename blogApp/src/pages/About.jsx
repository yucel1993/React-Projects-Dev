import { Box, Paper } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box mt="3rem" sx={{textAlign:"center"}}>
        <Paper
          elevation={3}
          sx={{ width: "15rem", padding: "1rem", margin: "auto" }}
          padding={10}
        >
          <img src="./icon.png" width={"50%"} alt="" />
          <h2>Burhan Yucel</h2>
        </Paper>
      </Box>
    </div>
  );
};

export default About;
