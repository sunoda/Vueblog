<template>
  <div class="home">
    <div class="article">
      <article v-for="(art, index) in filterBySearchKey" :key="index">
        <h4 @click="routerToArticle(art.id)">{{ art.title }}</h4>
        <i>{{ art.date }}</i>
        <p v-html="$options.filters.subcontent(art.content)"></p>
      </article>
    </div>
    <sidebar />
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Sidebar
  },
  methods: {
    routerToArticle: function(id) {
      this.$router.push({ name: "Article", params: { id: id } });
    }
  },
  computed: {
    ...mapState(["articles"]),
    ...mapGetters(["filterBySearchKey"])
  },
  filters: {
    subcontent: content => {
      return content.substring(0, 150) + "...";
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  display: grid
  grid-template-columns: 60vw 30vw
  grid-gap: 20px
  padding: 30px
  .article
    article
      display: flex
      flex-direction: column
      justify-content: center
      align-items: flex-start
      width: 60vw
      height: 300px
      background-color: rgb(200, 200, 200)
      border-radius: 15px
      padding: 20px
      margin: 0 0 30px 0
      h4
        cursor: pointer
      i
        color: #ccc
      p
        text-align: justify
</style>
