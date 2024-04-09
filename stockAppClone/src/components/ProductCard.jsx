import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnStyle } from "../GlobalStyles/styles";
import useStockCall from "../hooks/useStockCall";

export default function ProductCard() {
  const { products } = useSelector((state) => state.stock);
  const { deleteAll } = useStockCall();
  console.log(products);
  const processedProducts = products.map((product) => ({
    ...product,
    categoryName: product.category_id.name,
    brandName: product.brand_id.name,
  }));
  const columns = [
    {
      field: "id",
      headerName: "#",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "categoryName",
      headerName: "Category",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "brandName",
      headerName: "Brand",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },

    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteAll("products", props.id)}
        />,
      ],
    },
  ];

  return (
    <Box mt={4} sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={processedProducts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
