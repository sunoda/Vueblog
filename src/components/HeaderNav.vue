<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">e-Dean</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-navbar-nav>
              <b-nav-item to="/article">Article</b-nav-item>
              <b-nav-item to="/">About</b-nav-item>
              <b-nav-item to="/portfolio">Portfolio</b-nav-item>
              <b-nav-item to="/todolist">todoList</b-nav-item>
              <b-nav-item to="/login">Login</b-nav-item>
            </b-navbar-nav>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search Article"
              v-model="searchKey"
            ></b-form-input>
            <b-button
              @click.prevent="submitSearchKey"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      searchKey: ""
    };
  },
  methods: {
    ...mapActions(["changeSearchKey"]),
    submitSearchKey: function() {
      this.changeSearchKey(this.searchKey);
    }
  },
  watch: {
    searchKey: function() {
      if (this.searchKey === "") {
        this.submitSearchKey();
      }
    }
  }
};
</script>
<style lang="sass" scoped>
div
  .nav-item
    margin: 0 15px 0 0
</style>
