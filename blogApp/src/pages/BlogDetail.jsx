import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";

const BlogDetail = ({ setInfo: setUpperInfo }) => {
  const [isLiked, setIsLiked] = useState(false); 
  const [likeCount, setLikeCount] = useState(0);
  const navigate = useNavigate();
  const [addComment, setAddComment] = useState("");
  const { getComments, createComment, deleteBlog } = useBlogCall();
  const { token } = useSelector((state) => state.auth);
  const { comment } = useSelector((state) => state.blog);
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState([]);
  const { id } = useParams(); //? Get the ID from the URL
  // Fetch the blog post's details using the ID and display them
  const comments = comment.data;

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
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
    getComments(id);
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
  const handleSubmit = (id) => {
    createComment(id, addComment);
    setAddComment("");
  };
  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Box sx={{ width: "50vh", margin: "auto" }}>
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
            <FavoriteIcon  
            style={{ cursor: "pointer", color: isLiked ? "red" : "inherit" }}
            onClick={handleLike}
            />
            <p>{likeCount}</p>
            <ChatBubbleOutlineIcon
              style={{ cursor: "pointer" }}
              onClick={() => setToggle(!toggle)}
            />
            <p>{comment_count}</p>
            <VisibilityIcon style={{ cursor: "pointer" }} />
            <p>{post_views}</p>
          </Box>
          <div></div>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/newblog");
              setUpperInfo(info);
            }}
          >
            Update Blog
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              deleteBlog(id);
              navigate(-1);
            }}
          >
            Delete Blog
          </Button>
        </Box>

        {toggle &&
          comments.map((item, i) => (
            <>
              <h3>{item?.user}</h3>
              <h3>
                {new Date(item?.time_stamp).toLocaleString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </h3>
              <h4 style={{ borderBottom: "2px solid black" }}>
                {item?.content}
              </h4>
            </>
          ))}

        {toggle && (
          <Box mt={2}>
            <TextField
              fullWidth
              label="Add comment"
              id="fullWidth"
              onChange={(e) => setAddComment(e.target.value)}
            />
            <br />
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              onClick={() => handleSubmit(id)}
            >
              Add Comment
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default BlogDetail;
