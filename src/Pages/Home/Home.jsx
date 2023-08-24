import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Box } from "@mui/material";
import { Products } from "../../components/Products/Products";

export const Home = () => {
  return (
    <>
      <Box>
        <Hero />
        <Products />
      </Box>
    </>
  );
};
