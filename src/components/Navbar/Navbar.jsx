import { Box, AppBar, Toolbar,  Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../Images/logo.png";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const ShowCartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "white" }}>
          <Toolbar>
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </NavLink>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "82%",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <NavLink className={styles.navLink} to={"/"}>
                  <Typography variant="h6">Home</Typography>
                </NavLink>

                <NavLink className={styles.navLink} to={"/cart"}>
                  <Typography variant="h6">
                    Cart : {ShowCartItems.length}
                  </Typography>
                </NavLink>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
