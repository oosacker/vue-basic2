const getters = {
  allComments: state => state.comments,

  // to make the newest comment added comment to appear on top
  reverseItems(state) {
    return state.comments.slice().reverse();
  }   
};

export default getters;