import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header.tsx";
import { Sidebar, DrawerHeader } from "./Sidebar.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isAdminLoginPage = location.pathname === "/admin-login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      {!isHomePage && !isAdminLoginPage && !isLoginPage && !isRegisterPage && (
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
