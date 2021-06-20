const mutations = {
  saveCommentsToState: (state, comments) => {
    if(state.comments.length === 0) {
      state.comments = comments
    }
    else {
      state.comments.push(...comments)
    }
  },

  addCommentToState: (state, newComment) => (state.comments.push(newComment)),

  resetCommentsInState: (state) => {
    state.comments = []
    localStorage.clear();
  },
}

export default mutations;
