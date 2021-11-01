import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/posts/actions";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { memories } from "./config/constants";

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
