<template>
  <div class="sidebar">
    <h4>文章列表</h4>
    <hr />
    <ul>
      <li
        v-for="(art, index) in articles"
        :key="index"
        @click="routerToArticle(art.id)"
      >
        {{ art.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  methods: {
    routerToArticle: function(id) {
      this.$router.push({ name: "Article", params: { id: id } });
    }
  },
  computed: {
    ...mapState(["articles"])
  }
};
</script>

<style lang="sass" scoped>
.sidebar
  padding: 30px
  background-color: rgb(200, 200, 200)
  border-radius: 15px
  hr
    background-color: rgb(150, 150, 150)
  li
    text-align: left
    cursor: pointer
</style>
