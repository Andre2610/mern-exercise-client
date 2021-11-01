export const selectAllPosts = () => (reduxState) => reduxState.posts.allPosts;

export const selectPostById = (id) => (reduxState) =>
  reduxState.posts.allPosts.find((post) => post._id === id);

export const selectCurrentId = () => (reduxState) => reduxState.posts.currentId;
