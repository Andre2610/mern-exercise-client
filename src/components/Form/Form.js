import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { Button, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";
import {
  createPost,
  updatePost,
  resetCurrentId,
} from "../../store/posts/actions";
import { selectCurrentId, selectPostById } from "../../store/posts/selectors";

const initialState = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentId = useSelector(selectCurrentId());
  const post = useSelector(selectPostById(currentId));
  const [postData, setPostData] = useState(initialState);

  const handleSubmit = () => {
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    setPostData(initialState);
  };

  const onChangeHandler = (event) => {
    if (event.target.name === "tags") {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value.split(","),
      });
    } else {
      setPostData({ ...postData, [event.target.name]: event.target.value });
    }
  };

  const clear = () => {
    setPostData(initialState);
    dispatch(resetCurrentId());
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">
        {currentId ? "Editing" : "Creating"} a memory
      </Typography>
      <div className={`${classes.root} ${classes.form}`}>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={onChangeHandler}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={onChangeHandler}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={onChangeHandler}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={onChangeHandler}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </div>
    </Paper>
  );
}
