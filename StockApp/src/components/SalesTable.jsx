import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { GridDeleteForeverIcon } from "@mui/x-data-grid";
import { btnStyle, editbtnStyle } from "../styles/globalStyles";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";



export default function SalesTable({ setInfo, handleOpen }) {
  const {sales} =useSelector((state)=>state.stock)
  const {deleteStockData,putStockData} = useStockCall()
  const columns = [
    { field: "id", headerName: "#", width: 90 },
    {
      field: "createds",
      headerName: "Date",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "brand",
      headerName: "Brand",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "product",
      headerName: "Product",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
  
      align: "center",
      headerAlign: "center",
      valueGetter: (params) => {
        const quantity = params.row.quantity;
        const price = params.row.price;
        return quantity * price;
      },
    },
    {
      field: "editActions",
      type: "actions",
      headerName: "Actions",
    
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          sx={editbtnStyle}
          onClick={() => {
            setInfo(props.row);
            handleOpen();
            // Handle edit action here
            // putStockData("sales",props.id)
            console.log(props.id)
           
            // You can call setInfo here if needed
          }}
        />,
      ],
    },
    // Delete Action Column
    {
      field: "deleteActions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<GridDeleteForeverIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => {
            deleteStockData("sales", props.id);
          }}
        />,
      ],
    },
  ];
  return (
    <Box sx={{  width: "100%" }}>
      <DataGrid
        rows={sales}
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
