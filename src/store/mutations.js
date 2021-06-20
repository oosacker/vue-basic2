const mutations = {
  saveCommentsToState: (state, comments) => (state.comments = comments),
  addCommentToState: (state, newComment) => (state.comments.push(newComment)),
}

export default mutations;
