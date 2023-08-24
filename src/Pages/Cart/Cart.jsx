import { Box, Typography, Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartTotal,
  decreaseCartQuantity,
  removeItem,
} from "../../features/CartSlice";

export const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotal());
  }, [items]);

  const handleDecreaseCartQuantity = (item) => {
    dispatch(decreaseCartQuantity(item));
  };

  const handleIncreaseCartQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <Box sx={{ mt: 10 }}>
        {items.map((products) => {
          return (
            <Box
              key={products.id}
              sx={{
                mb: 4,
                display: "flex",
                width: { xs: "100%", sm: "90%", md: "80%" },
                mx: "auto",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                py: "5px",
              }}
            >
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <img
                  src={products.image}
                  alt={products.image}
                  style={{ width: "100px" }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography textAlign={"center"} variant="h6">
                  {products.title.slice(0, 18)}...
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                  width: "40%",
                }}
              >
                <IconButton
                  sx={{ fontSize: "18px" }}
                  onClick={() => handleDecreaseCartQuantity(products)}
                >
                  -
                </IconButton>
                <Box
                  sx={{
                    fontSize: "23px",
                  }}
                >
                  <Typography variant="h6">{products.quantity}</Typography>
                </Box>
                <IconButton
                  onClick={() => handleIncreaseCartQuantity(products)}
                >
                  +
                </IconButton>
              </Box>
              <Box sx={{ width: "80%" }}>
                <Typography variant="h6" textAlign={"center"}>
                  ${(products.price * products.quantity).toFixed(2)}
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "black" }}
                  onClick={() => handleRemoveItemFromCart(products)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          );
        })}

        {items.length === 0 && (
          <Typography
            variant="h3"
            sx={{
              mt: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Cart is empty
          </Typography>
        )}

        {items.length >= 1 && (
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Total : ${cart.totalPrice.toFixed(2)}
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "black" }}>
              Proceed to Checkout
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};
