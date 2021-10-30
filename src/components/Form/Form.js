import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

import { Button, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { createPost } from "../../store/posts/actions";

export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };

  const [postData, setPostData] = useState(initialState);

  const handleSubmit = () => {
    console.log("called??");
    dispatch(createPost(postData));
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
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">Creating a memory</Typography>
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
