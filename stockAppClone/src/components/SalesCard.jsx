import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnStyle } from "../GlobalStyles/styles";
import useStockCall from "../hooks/useStockCall";

export default function SalesCard({ handleOpen, setInfo }) {
  const { deleteAll } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  const processedSalesData = sales.map((sale) => ({
    ...sale,
    productName: sale.product_id.name,
    brandName: sale.brand_id.name, // Add brand name
  }));
  console.log(processedSalesData);

  const columns = [
    {
      field: "id",
      headerName: "#",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "createds",
      headerName: "Time",
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
      field: "productName",
      headerName: "Product",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "price_total",
      headerName: "Amount",
      type: "number",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "editActions",
      type: "actions",
      headerName: "Edit",
      flex: 1,
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => {
            setInfo(props.row);
            handleOpen();
          }}
        />,
      ],
    },
    {
      field: "deleteactions",
      type: "actions",
      headerName: "Delete",
      flex: 1,
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteAll("sales", props.id)}
        />,
      ],
    },
  ];

  console.log(sales);
  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <DataGrid
        rows={processedSalesData}
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
