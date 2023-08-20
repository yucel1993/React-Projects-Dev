import { Box } from "@mui/material"
import { useSelector } from "react-redux"


const Profile = () => {
  const {username,image,email}=useSelector((state)=>state.auth)
  return (
    <div style={{marginTop:"4rem"}}>
      <Box sx={{textAlign:"center"}}>
        <Box>
          <img src={image} style={{borderRadius:"3rem"}} alt="" />
          <h2>{username}</h2>
          <h2>{email}</h2>
        </Box>
      </Box>
    </div>
  )
}

export default Profile