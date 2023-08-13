// import List from "@mui/material/List"
// import ListItem from "@mui/material/ListItem"
// import ListItemButton from "@mui/material/ListItemButton"
// import ListItemIcon from "@mui/material/ListItemIcon"
// import ListItemText from "@mui/material/ListItemText"
// import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
// import InventoryIcon from "@mui/icons-material/Inventory"
// import StoreIcon from "@mui/icons-material/Store"
// import StarsIcon from "@mui/icons-material/Stars"
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
// import { useNavigate } from "react-router-dom"

// const icons = [
//     {
//       icon: <DashboardCustomizeIcon />,
//       title: "Dashboard",
//       url: "/stock/",
//     },
//     {
//       title: "Purchase",
//       icon: <ShoppingCartIcon />,
//       url: "/stock/purchases/",
//     },
//     {
//       title: "Sales",
//       icon: <AttachMoneyIcon />,
//       url: "/stock/sales/",
//     },
//     {
//       title: "Firms",
//       icon: <StoreIcon />,
//       url: "/stock/firms/",
//     },
//     {
//       title: "Brands",
//       icon: <StarsIcon />,
//       url: "/stock/brands/",
//     },
//     {
//       title: "Products",
//       icon: <InventoryIcon />,
//       url: "/stock/products/",
//     },
//     {
//       title: "Admin Panel",
//       icon: <SupervisorAccountIcon />,
//       url: "https://10001.fullstack.clarusway.com/admin",
//     },
//   ]




// const MenuListItems = () => {
//     const navigate=useNavigate()
//   return (
//     <div>
//           <List>
//         {icons.map(({title,icon,url}, index) => (
//           <ListItem key={index} disablePadding  onClick={()=>navigate(`${url}`)}
//           sx={{color:"white","&:hover" :{color:"red"},
//           "&: .MuiSvgIcon-root" :{color:"white"},
//         "&:hover .MuiSvgIcon-root" :{color:"red"}
//         }}
//           > 
//             <ListItemButton>
//               <ListItemIcon sx={{color:"white" }}>
//              {icon}
//               </ListItemIcon>
//               <ListItemText primary={title} />
//             </ListItemButton>
//           </ListItem>

//         ))}
//       </List>
//     </div>
//   )
// }

// export default MenuListItems




import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router-dom";
import { WindowSharp } from "@mui/icons-material";


const icons = [
    {
      icon: <DashboardCustomizeIcon />,
      title: "Dashboard",
      url: "/stock/",
    },
    {
      title: "Purchase",
      icon: <ShoppingCartIcon />,
      url: "/stock/purchases/",
    },
    {
      title: "Sales",
      icon: <AttachMoneyIcon />,
      url: "/stock/sales/",
    },
    {
      title: "Firms",
      icon: <StoreIcon />,
      url: "/stock/firms/",
    },
    {
      title: "Brands",
      icon: <StarsIcon />,
      url: "/stock/brands/",
    },
    {
      title: "Products",
      icon: <InventoryIcon />,
      url: "/stock/products/",
    },
    {
      title: "Admin Panel",
      icon: <SupervisorAccountIcon />,
      url: "https://10001.fullstack.clarusway.com/admin",
    },
  ]

const MenuListItems = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null); // State to keep track of the active item

  const handleItemClick = (index, url) => {
    setActiveItem(index); // Set the clicked item as active
    url.includes("http" || "www") ? (window.open(url,"_blank")):
    navigate(url); // Navigate to the provided URL

    // ? window.locarion.href=url
    //? You can use this instead of window.open(url,"_blank")
  };

  return (
    <div>
      <List>
        {icons.map(({ title, icon, url }, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleItemClick(index, url)} // Call handleItemClick when clicked
            sx={{
              color: "white",
              "&:hover": { color: "red" },
              "&: .MuiSvgIcon-root": { color: "white" },
              "&:hover .MuiSvgIcon-root": { color: "red" },
              backgroundColor: activeItem === index ? "blue" : "transparent", // Apply blue background if active
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
