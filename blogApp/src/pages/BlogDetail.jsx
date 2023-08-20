import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { token } = useSelector((state) => state.auth);
  const [info, setInfo] = useState([]);
  const { id } = useParams(); // Get the ID from the URL
  // Fetch the blog post's details using the ID and display them

  const getBlog = async (id) => {
    try {
      const { data } = await axios(
        `http://32272.fullstack.clarusway.com/api/blogs/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(data);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog(id);
  }, []);

  const {
    id: idNew,
    image,
    title,
    content,
    publish_date,
    author,
    likes,
    comment_count,
    post_views,
  } = info;
  const formattedDate = new Date(publish_date).toLocaleString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return (
    <div style={{ marginTop: "2rem" }}>
      <Box sx={{width:"50vh", margin:"auto"}}>
        <Box sx={{ textAlign: "center" }}>
          <img width="40%" src={image} alt="" />
          <h2>{title}</h2>
        </Box>
        <p>{content}</p>
        <p>{formattedDate}</p>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccountCircleIcon />
          <p>{author}</p>
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
            <p>{likes}</p>
            <ChatBubbleOutlineIcon />
            <p>{comment_count}</p>
            <VisibilityIcon />
            <p>{post_views}</p>
          </Box>
          <div>
            
          </div>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center"}}>
          <Button variant="contained"  >Update</Button>
          <Button variant="contained" color="error">Delete</Button>
        </Box>
      </Box>
    </div>
  );
};

export default BlogDetail;
