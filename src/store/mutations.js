const mutations = {
  saveCommentsToState: (state, comments) => {
    if(state.comments.length === 0) {
      state.comments = comments // if the state is empty then set array as new state
    }
    else {
      state.comments.push(...comments) /// if not, append - will have duplicates
    }
  },

  addCommentToState: (state, newComment) => (state.comments.push(newComment)),

  resetCommentsInState: (state) => {
    state.comments = []
    //localStorage.clear(); 
  },
}

export default mutations;
