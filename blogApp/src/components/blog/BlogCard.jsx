import { Box, Button, Grid, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

const BlogCard = () => {
  return (
    <div>
      <Grid item >
        <Paper elevation={3} sx={{ width: "15rem",padding:"1rem" }} padding={10}>
          <Box sx={{ textAlign: "center" }}>
            <img width={"50%"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <h2>HTML</h2>
          </Box>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas minus
            ut itaque?
          </p>
          <p>12.12.2020, 12:12:20</p>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon />
            <p>Admin</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FavoriteIcon />
              <p>23</p> <ChatBubbleOutlineIcon /> <p>10</p> <VisibilityIcon />
              <p>6</p>
            </Box>
            <div>
              <Button variant="contained">Read More</Button>
            </div>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};

export default BlogCard;
