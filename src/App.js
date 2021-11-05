import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { fetchPosts } from "./store/posts/actions";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Auth from "./components/Auth/Auth";

import { Container } from "@material-ui/core";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Container>
  );
}
