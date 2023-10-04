import { Box, Typography } from '@mui/material'
import React from 'react'
import useStyle from "./styles"
import Movie from '../Movie/Movie'
const RatedCards = ({title, data}) => {
    const classes=useStyle()
  return (
    <Box>
        <Typography variant='h5' gutterBottom>{title}</Typography>
        <Box display="flex" flexWrap="wrap" className={classes.container}>
            {data?.results?.map((movie,id)=>(
                <Movie key={id} movie={movie} i={id}/>
            ))}
        </Box>
    </Box>
  )
}

export default RatedCards