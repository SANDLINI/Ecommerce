import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  const navToProduct = useNavigate();

  return (
    <>
      <Box>
        <Typography variant="h3" sx={{ textAlign: "center", mt: 4 }}>
          Latest Products
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "space-evenly",
          gap: { xs: "7px" },
          flexWrap: "wrap",
        }}
      >
        {products.map((items) => {
          return (
            <Box
              key={items.id}
              sx={{
                width: {
                  xs: "49%",
                  sm: "40%",
                  md: "30%",
                  lg: "20%",
                  "&:hover": { transform: "scale(1.05)" },
                  transitionDuration: "100ms",
                },
              }}
            >
              <Card
                sx={{
                  mb: { xs: 3 },
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent onClick={() => navToProduct(`/${items.id}`)}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: { xs: "3", sm: "5", md: "7" },
                    }}
                  >
                    <img
                      src={items.image}
                      alt={items.title}
                      className={styles.image}
                    />
                  </Box>

                  <Typography>{items.title.slice(0, 12)}...</Typography>
                  <Typography>Rating: {items.rating.rate}</Typography>
                  <Typography>Price:$ {items.price}</Typography>
                </CardContent>
                <Button
                  onClick={() => {
                    navToProduct(`/${items.id}`);
                  }}
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    mt: 2,
                    width: "auto",
                    height: "30px",
                  }}
                >
                  Details
                </Button>
              </Card>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
