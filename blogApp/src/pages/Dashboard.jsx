import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import BlogCard from "../components/blog/BlogCard"

const Dashboard = ({setInfo}) => {
  const { getBlogData,getBlogCategories } = useBlogCall();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData();
    getBlogCategories()
    setInfo({    title: "",
    content: "",
    image: "",
    category: "",
    status: "",})
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }
const data=blogs.data
  return (
    <div xs={{ marginTop: "3rem", }}>
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
    </div>
  );
};

export default Dashboard;
