import React from "react";
import image from "../../Images/Hero.jpg";
import { Box, Button } from "@mui/material";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: { xs: "auto", sm: "300px", md: "370px", lg: "400px", xl:'430px' },
            mt: 8,
          }}
        >
          <img src={image} alt="" className={styles.image} />
        </Box>
      </Box>
    </>
  );
};
