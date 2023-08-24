import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";

export const SingleProductPage = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, [id]);

  const dispatch = useDispatch();
  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", sm: "90%", md: "50%" },
          mx: "auto",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Box sx={{ width: { xs: "30%", md: "80%" } }}>
          <img
            src={products.image}
            alt={products.title}
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5">{products.title}</Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            {products.category}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            {products.description}
          </Typography>
          <Typography variant="h4">Price: $ {products.price}</Typography>
          <Button
            onClick={() => handleAddToCart(products)}
            variant="contained"
            sx={{ bgcolor: "black", width: "150px" }}
          >
            Add To cart
          </Button>
        </Box>
      </Box>
    </>
  );
};
