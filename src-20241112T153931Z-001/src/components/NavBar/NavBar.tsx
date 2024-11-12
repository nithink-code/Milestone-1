import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import SideDrawer from "./SideDrawer.js";
import { useState } from "react";
import { Link } from "@mui/material";

const pages = ["Inbox", "Starred", "Send email"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="w-1/2 h-full flex flex-row justify-start items-center">
            <AdbIcon
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1, ml: 2 }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 5,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </div>
          <div className="w-1/2 h-full flex flex-row justify-end items-center">
            <Box
              sx={{
                width: "80%",
                height: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                  className="hover:text-white hover:cursor-pointer"
                >
                  {page}
                </Link>
              ))}
            </Box>
            <Box className="h-full w-1/4">
              <Tooltip title="Open settings">
                <IconButton onClick={() => setOpen(true)} sx={{ p: 0 }}>
                  <Avatar alt="" src="" />
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
                <SideDrawer
                  open={open}
                  setOpen={(value: boolean) => setOpen(value)}
                />
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
