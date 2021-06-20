<template>
  <div class="home">
    <div v-for="comment in allComments" :key="comment.id" class="comment">
      <div class="name">{{ comment.name }}</div>
      <div class="email">{{ comment.email }}</div>
      <div class="body">{{ comment.body }}</div>
    </div>
  </div>
</template>

<script>
  // import { mapActions } from "vuex";

  export default {
    name: 'Home',
    methods: {
      //...mapActions(["fetchComments"]),

    },
    computed: {
      //mapGetters(["allComments"]),
      allComments() {
        return this.$store.state.comments;
      }
    },
    created() {}
  }
</script>

<style>
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
    max-width: 300px;
  }

</style>
