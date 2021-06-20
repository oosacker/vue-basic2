import axios from 'axios';

const actions = {
  async fetchAllComments({ commit }) {
    console.log('fetch')
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    commit('saveCommentsToState', response.data);
  },
}

export default actions;
