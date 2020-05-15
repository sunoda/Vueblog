<template>
  <div class="err404">
    <h1>Error: 404</h1>
    <h4>This Page Not Found!</h4>
    <b-button @click="goBackHome">Go Back</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    goBackHome: function() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style lang="sass" scoped>
.err404
  padding: 300px
</style>
