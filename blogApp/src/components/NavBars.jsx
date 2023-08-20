import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const pages = ["Dashboard", "NewBlog", "About"];

function NavBars() {
  const { logout } = useAuthCall();
  const { username, image } = useSelector((state) => state.auth);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="./icon.png" width={"50rem"} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="./icon.png" width={"50rem"} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={page === "Dashboard" ? "/" : `/${page.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleCloseNavMenu}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="A" src={image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {username ? (
               [
                  <Link
                    key="my-blogs"
                    to="/profile"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography textAlign="center">My Blogs</Typography>
                    </MenuItem>
                  </Link>
                  ,
                  <Link
                    key="profile"
                    to="/profile"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  </Link>
                  ,
                  <Link
                    key="logout"
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => {
                      handleCloseUserMenu();
                      logout();
                    }}
                  >
                    <MenuItem>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Link>
                ]
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBars;
