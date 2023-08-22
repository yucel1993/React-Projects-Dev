import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Favorite as FavoriteIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import axios from "axios";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = ({ setInfo: setUpperInfo }) => {
 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [addComment, setAddComment] = useState("");
  const { getComments, createComment, deleteBlog,getRemoveLike } = useBlogCall();
  const { token } = useSelector((state) => state.auth);
  const { comment } = useSelector((state) => state.blog);
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const comments = comment.data;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  

  const getBlog = async (id) => {
    try {
      const { data } = await axios(
        `${BASE_URL}/api/blogs/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setInfo(data);
      console.log(data.id)
    } catch (error) {
      console.log(error);
    }
  };

 


  useEffect(() => {
    getBlog(id);
    getComments(id);
  }, []);

  const {
    id:blogId,
    image,
    title,
    content,
    publish_date,
    author,
    likes,
    comment_count,
    post_views,
  } = info;
  const [prevLikes, setPrevLikes] = useState(likes);
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

  const handleDelete = () => {
    deleteBlog(id);
    navigate(-1);
    setShowModal(false);
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
            className={prevLikes < likes ? "increase-likes" : ""}
              style={{
                cursor: "pointer",
               
              }}
              onClick={()=>{
                setPrevLikes(likes);
                getRemoveLike(blogId,getBlog)}}
            />
            <p>{likes}</p>
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
            onClick={() => setShowModal(true)}
          >
            Delete Blog
          </Button>
        </Box>

        {/* Modal Confirmation Dialog */}
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Paper sx={{ p: 2, width: 300, margin: "auto", textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Are you sure you want to delete this blog?
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ marginRight: 1 }}
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Paper>
        </Modal>

        {toggle &&
          comments.map((item, i) => (
            <React.Fragment key={i}>
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
            </React.Fragment>
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
