import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { btnStyle, editbtnStyle } from "../styles/globalStyles";
import { GridDeleteForeverIcon } from '@mui/x-data-grid';
import useStockCall from "../hooks/useStockCall";
import EditIcon from '@mui/icons-material/Edit';

export default function PurchaseTable({setInfo,handleOpen}) {
  const { purchases } = useSelector((state) => state.stock);
  const {deleteStockData}=useStockCall()
  const columns = [
    { field: "id", headerName: "#", flex: 1, headerAlign: "center" },
    {
      field: "createds",
      headerName: "createds",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firm",
      headerName: "Firm",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "brand",
      headerName: "Brand",

      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Product",

      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
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
      flex: 1,
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          sx={editbtnStyle}
          onClick={() => {
            setInfo(props.row)
            handleOpen()
            // Handle edit action here
            console.log("Edit clicked for id:", props.id);
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
            deleteStockData("purchases", props.id);
          }}
        />,
      ],
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={purchases}
        
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
