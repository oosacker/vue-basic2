<template>
  <div class="container">
    <div class="form">
      <form class="form-container" @submit.prevent="submitForm()">
        <input required type="text" v-model="name" class="name form-control" placeholder="Name" />
        <input required type="email" v-model="email" class="email form-control" placeholder="Email" />
        <textarea required type="text" rows=10 v-model="body" class="body form-control" placeholder="Body" />
        <input type="submit" class="button submit-btn form-control" />
      </form>
      <button @click="fetchBtnClick()" class="button form-control">Fetch</button>
      <button @click="resetBtnClick()" class="button form-control">Reset</button>
    </div>
    
    
    <div class="home">
      <div v-for="comment in allComments" :key="comment.id" class="comment">
        <div class="name"><strong>{{ comment.name }}</strong></div>
        <div class="email"><a href="mailto=">{{ comment.email }}</a></div>
        <div class="body">{{ comment.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { mapActions } from "vuex";

  export default {
    name: 'Home',
    data() {
      return {
        // these cannot be like, 'name: String' cos that will show junk text in the form inputs when empty
        name: '',
        email: '',
        body: ''
      }
    },
    methods: {
      //...mapActions(["fetchComments"]),
      fetchBtnClick() {
        console.log('fetch!!!!')
        this.$store.dispatch('fetchAllComments')  // fetch all comments from json placeholder and save into state
      },
      resetBtnClick() {
        console.log('reset!!!!')
        this.$store.dispatch('resetComments') // delete all comments from state
      },
      submitForm() {
        console.log('submit!!!')  

        if (this.name === '' || this.email === '' || this.body === '') {
          alert('Please fill out the form completely')
          return
        }

        const newComment = {  
          name: this.name,
          email: this.email,
          body: this.body
        }
        console.log(newComment);
        this.$store.dispatch('addAComment', newComment) // append a new comment to state
      }
    },
    computed: {
      //mapGetters(["allComments"]),
      allComments() {
        // return this.$store.state.comments;
        return this.$store.getters.reverseItems;  // for displaying the list o comments - reversed so newest at top
      }
    },
    created() {}
  }
</script>

<style>
  .container {
    /* margin: 50px 0 50px 0; */
  }

  .comment {
    background-color: honeydew;
  }

  .home {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .comment {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
    flex-direction: column;
    padding: 25px;
    margin: 10px;
    border-radius: 5px;
    width: 300px;
  }

  .comment:hover {
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    opacity: 0.9;
  }

  .form {
    margin: 50px 0 50px 0;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-control {
    /* display: block; */
    margin-bottom: 10px;
    padding: 5px;
    width: 400px;
    border-radius: 5px;
    border: none;
    background-color: rgb(219, 231, 231);;
  }

  .button {
    padding: 10px;
    color:black;
    background-color: rgba(174, 196, 197, 100%);
    width: 200px;
    border-radius: 20px;
    margin: 5px;
    border: none;
  }

  .button:hover {
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    opacity: 0.8;
  }

  .submit-btn {
    width: 300px;
    background-color: burlywood;
    font-weight: 600;
    /* font-size: 1rem; */
  }
</style>
