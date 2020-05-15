<template>
  <article>
    <div class="article">
      <h3>{{ filterById.title }}</h3>
      <i>{{ filterById.date | toDate }}</i>
      <hr />
      <span v-html="filterById.content"></span>
    </div>
  </article>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["articles"]),
    filterById: function(id) {
      return this.articles.filter(art => art.id === this.$route.params.id)[0];
    }
  },
  filters: {
    toDate: timestamp => {
      const data = new Date(timestamp);
      let Y = data.getFullYear();
      let M = data.getMonth();
      let D = data.getDate();
      let H = data.getHours();
      let min = (Array(2).join("0") + data.getMinutes()).slice(-2);
      return `${Y}/${M + 1}/${D} ${H}:${min}`;
    }
  }
};
</script>

<style lang="sass" scoped>
article
  display: grid
  width: 50%
  height: 80vh
  margin: auto
  align-items: center
  .article
    display: grid
    margin: auto
    border: 2px solid #000
    padding: 20px
    justify-items: flex-start
    h3
      font-size: 50px
    span
      text-align: left
</style>
