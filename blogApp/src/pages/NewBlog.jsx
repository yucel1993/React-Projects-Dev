import { Box, Button, MenuItem, Paper, Select, TextField } from "@mui/material";

const NewBlog = () => {
  return (
    <div style={{marginTop:"2rem"}}>
      <Box >
        <Paper
          elevation={3}
          sx={{ width: "15rem", padding: "1rem", margin: "auto" }}
          padding={10}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            // onSubmit={handleSubmit}
          >
            <h2>New Blog</h2>
            <TextField
              label="Title"
              id="Title"
              type="text"
              variant="outlined"
              name="title"
              // value={info?.price || ""}
              // onChange={handleChange}
              required
            />
            <TextField
              label="Image URL"
              id="image"
              type="url"
              variant="outlined"
              name="image"
              // value={info?.price || ""}
              // onChange={handleChange}
              required
            />
            <Select
              label="Category"
              id="category"
              name="product_id"
              // value={info?.product_id || ""}
              // onChange={handleChange}
              required
            >
              <MenuItem onClick={() => navigate("/stock/products")}>
                category
              </MenuItem>
              {/* <hr />
                {products?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  )
                })} */}
            </Select>

            {/* Seconf Select */}

            <Select
              label="Status"
              id="status"
              name="status"
              // value={info?.product_id || ""}
              // onChange={handleChange}
              required
            >
              <MenuItem onClick={() => navigate("/stock/products")}>
                Status
              </MenuItem>
              {/* <hr />
                {products?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  )
                })} */}
            </Select>
            <TextField
              id="outlined-textarea"
              label="Content"
              placeholder="Content"
              multiline
            />
            <Button type="submit" variant="contained" size="large">
              Add New Blog
              {/* {info?.id ? "Update Purchase" : "Add New Purchase"} */}
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default NewBlog;
