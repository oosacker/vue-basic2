<template>
  <div class="container">
    <div class="form">
      <form class="form-container" @submit.prevent="submitForm()">
        <input type="text" v-model="name" class="name form-control" placeholder="Name" />
        <input type="email" v-model="email" class="email form-control" placeholder="Email" />
        <textarea type="text" v-model="body" class="body form-control" placeholder="Body" />
        <input type="submit" class="button form-control" />
      </form>
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
        name: '',
        email: '',
        body: ''
      }
    },
    methods: {
      //...mapActions(["fetchComments"]),
      buttonClick() {
        console.log('button!!!!')
      },
      submitForm() {
        console.log('submit!!!')
        const newComment = {
          name: this.name,
          email: this.email,
          body: this.body
        }
        console.log(newComment);
        this.$store.dispatch('addAComment', newComment)
      }
    },
    computed: {
      //mapGetters(["allComments"]),
      allComments() {
        // return this.$store.state.comments;
        return this.$store.getters.reverseItems;
      }
    },
    created() {}
  }
</script>

<style>
  .button {
    padding: 10px;
    color:black;
    background-color: rgb(174, 196, 197);
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
    border: 1px solid black;
    flex-direction: column;
    padding: 25px;
    margin: 10px;
    border-radius: 5px;
    width: 300px;
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
    width: 500px;
    border-radius: 5px;
  }
  .button {
    width: 200px;
    border-radius: 20px;
  }

</style>
