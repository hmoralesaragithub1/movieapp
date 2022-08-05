import { useState, useEffect } from "react";
import Services from "../../services/index";
import { useParams, useNavigate } from "react-router-dom";
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

import { Movie, MenuBar } from "../../components";

const SearchResults = () => {
  const { searchText } = useParams();
  const [items, setItems] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    const getResults = async () => {
      const res = await Services.searchByText(searchText);
      console.log("response", res);
      setItems(res.Search);
      console.log("items", items);
    };
    getResults();
  }, []);

  const backButton = () => {
    history("/search");
  };

  return (
    <Box>
      <MenuBar text={`Search results: ${searchText}`}>
        <Button variant="outlined" color="error" onClick={backButton}>
          Back
        </Button>
      </MenuBar>

      <Container>
        {items.map((item, index) => (
          <Movie item={item} key={index} />
        ))}
      </Container>
    </Box>
  );
};

export default SearchResults;
