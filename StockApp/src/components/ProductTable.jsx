import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import useStockCall from '../hooks/useStockCall';
import { GridDeleteForeverIcon } from '@mui/x-data-grid';
import { btnStyle } from '../styles/globalStyles';





export default function ProductTable() {
  const { products } = useSelector((state) => state.stock)
  const { deleteStockData } = useStockCall()



  const columns = [
    
    {
      field: 'id',
      headerName: '#',
      flex:0.5,
      headerAlign:"center",
      align:"center"
    },
    {
      field: 'category',
      headerName: 'Category',
      flex:0.5,
      align:"center",
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },


     //? api'Den gelmeyen colum bilgileri icin getActions veya renderCell islevleri kullanilabilir.
  //? bu islevler aslinda isimsiz bir fonksiyon cagirirlar ve bu fonksiyon aldigi parametre (params) ile bir cok veriye (rows,columns gibi) erisebilir.
    {
      field: "actions",
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
          onClick={() => deleteStockData("products", props.id)}
        />,
      ],
    },
  ];

  
 
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        slots={{ toolbar: GridToolbar }}
     
        disableRowSelectionOnClick
      />
    </Box>
  );
}