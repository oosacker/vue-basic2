const getters = {
  allComments: state => state.comments,
  reverseItems(state) {
    return state.comments.slice().reverse();
  }   
};

export default getters;