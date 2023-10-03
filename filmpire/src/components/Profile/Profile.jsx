import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
const navigate =useNavigate()
  const handleClick=()=>{
    logOut()
    navigate("/")

  }
  const { logOut, currentUser } = useContext(AuthContext);
  return (
    <><div>Profile</div>
    <Button
    onClick={handleClick}
    >Log oUT</Button>
    </>
    
  )
}

export default Profile