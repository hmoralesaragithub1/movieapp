import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import { MenuBar } from "../../components";

const Search = () => {
  const [text, setText] = useState("");

  const history = useNavigate();

  const navigate = () => {
    history(`/search/${text}`);
  };

  return (
    <Box>
      <MenuBar text={"Herman Morales"}>
        <LogoutIcon
          sx={{
            color: "red",
          }}
        />
      </MenuBar>

      <Container maxWidth="sm">
        <Grid container mt={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h2">OMDB Search</Typography>
                <Stack
                  mt={2}
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <TextField
                    label="Movie or tv show..."
                    onChange={(e) => setText(e.target.value)}
                  />
                  {/**
                 * 
                 * <Link to={`/search/${text}`}>
                  <Button variant="contained">Search</Button>
                </Link>
                 */}
                  <Button variant="contained" onClick={navigate}>
                    Search
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
