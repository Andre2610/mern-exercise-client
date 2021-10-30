import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../store/posts/selectors";

import Post from "./Post/Post";

import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

export default function Posts() {
  const classes = useStyles();
  const allPosts = useSelector(selectAllPosts());
  console.log("all posts", allPosts);
  return !allPosts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {allPosts.map((post) => {
        console.log("post id", post._id);
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
}
