import { useSelector } from "react-redux";

import { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";
import useBlogCall from "../hooks/useBlogCall";

const MyBlog = () => {
  const { getUserBlogs } = useBlogCall();
  const { draft, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    getUserBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  const data = draft.data;
  console.log(data);

  return (
    <div xs={{ marginTop: "3rem" }}>
      <Typography variant="h2" color={"secondary"} sx={{ mb: 2 }}>
        MY BLOGS
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {data?.length > 0 ? (
          <Grid
            container
            mt={"1rem"}
            display={"flex"}
            justifyContent={"center"}
            spacing={8}
          >
            {data?.map((item, i) => (
              <BlogCard key={i} {...item} />
            ))}
          </Grid>
        ) : (
          <div>No data</div>
        )}
      </Box>
    </div>
  );
};

export default MyBlog;
