import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { btnStyle } from "../GlobalStyles/styles";
import useStockCall from "../hooks/useStockCall";

export default function PurchaseCard({ setInfo, handleOpen }) {
  const { deleteAll } = useStockCall();
  const { purchases } = useSelector((state) => state.stock);
  console.log(purchases);

  const processedPurchases = purchases.map((purchase) => ({
    ...purchase,
    firmName: purchase.firm_id.name,
    brandName: purchase.brand_id.name,
    productName: purchase.product_id.name,
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
      field: "createds",
      headerName: "Time",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "firmName",
      headerName: "Firm",
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

      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
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
          onClick={() => deleteAll("purchases", props.id)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <DataGrid
        rows={processedPurchases}
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
