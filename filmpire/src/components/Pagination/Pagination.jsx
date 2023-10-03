import React from "react";
import { Typography, Button } from "@mui/material";
import useStyle from "./styles";
const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyle();
//   const currentPage = 1;

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  if (totalPages === 0) return null;
  return (
    <div className={classes.container}>
      <Button
        onClick={handlePrev}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleNext}
        color="primary"
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
