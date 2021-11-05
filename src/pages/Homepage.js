import React from "react";

import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import { Grow, Container, Grid } from "@material-ui/core";

import useStyles from "./styles";

export default function Homepage() {
  const classes = useStyles();

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
