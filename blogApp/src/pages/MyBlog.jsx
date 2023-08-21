import { useSelector } from "react-redux";

import { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";
import useBlogCall from "../hooks/useBlogCall";

const MyBlog = () => {
  const { getBlogData } = useBlogCall();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  const data = blogs?.data;

  return (
    <div xs={{ marginTop: "3rem" }}>
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
