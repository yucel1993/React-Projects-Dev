import { Grid } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";

const Dashboard = () => {
  return (
    <div xs={{ marginTop: "3rem" }}>
      <Grid
        container
        mt={"1rem"}
        display={"flex"}
        justifyContent={"center"}
        spacing={2}
      >
        <BlogCard/>
      </Grid>
    </div>
  );
};

export default Dashboard;
