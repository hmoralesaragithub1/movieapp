import React from "react";

import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

const Movie = ({ item }) => {
  return (
    <Grid container mt={3}>
      <Grid
        item
        xs={12}
        sx={{
          height: "30vh",
        }}
      >
        <Card mb={10}>
          <CardContent>
            <Stack
              mt={2}
              direction="row"
              justifyContent="space-arunoun"
              spacing={2}
            >
              <Box mb={1}>
                <img width={200} src={item.Poster} alt={item.Title} />
              </Box>

              <Box>
                <Typography variant="h6">{item.Title}</Typography>
                <Typography variant="h6">{item.Year}</Typography>
                <Chip label={item.Type} color="success" variant="outlined" />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Movie;
