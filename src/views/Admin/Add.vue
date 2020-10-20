<template>
  <div class="admin_add">
    <!-- <h1>AdminAdd1</h1> -->
    <b-form>
      <b-form-group
        id="input-group-1"
        class="title"
        label="文章標題"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.title"
          required
          placeholder="Enter Title Here"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        class="title"
        label="文章內容"
        label-for="textarea"
      >
        <editor
          placeholder="Enter Content Here"
          apiKey="ej2g41nbwskiekvf7emz1kb1ask7lhw2dnke7ao9frfrn2dj"
          :init="{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap',
              'searchreplace visualblocks code fullscreen',
              'print preview anchor insertdatetime media',
              'paste code help wordcount table'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
          }"
          id="textarea"
          v-model="formData.content"
        >
        </editor>
      </b-form-group>
      <b-button
        @click.prevent="submitFormData"
        type="submit"
        variant="primary"
        v-if="!submited"
        >送出</b-button
      >
      <b-button @click.prevent="resetFormData" variant="danger" v-if="!submited"
        >重置</b-button
      >
      <b-spinner variant="primary" label="Spinning" v-else></b-spinner>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Editor from "@tinymce/tinymce-vue";

export default {
  mounted() {
    if (this.$route.name === "Admin-Edit") {
      const id = this.$route.params.id;
      this.mode = "edit";
      this.$store.dispatch("changeFocusId", id);
    }
  },
  data() {
    return {
      mode: "add",
      formData: {
        title: "",
        content: "",
        date: ""
      },
      submited: false
    };
  },
  components: {
    editor: Editor
  },
  methods: {
    ...mapActions(["addArticle", "updateArticle"]),
    resetFormData: function() {
      this.formData = {
        title: "",
        content: "",
        date: ""
      };
    },
    submitFormData: function() {
      this.formData.date = new Date().getTime();
      this.submited = true;
      if (this.mode === "edit") {
        this.updateArticle({
          id: this.$route.params.id,
          newArticle: this.formData
        });
      } else {
        this.addArticle(this.formData);
      }
      // this.$router.push({name : "Admin-Home"})
    }
  },
  computed: {
    ...mapState(["account", "articleChanged"]),
    ...mapGetters(["filterById"])
  },
  watch: {
    filterById: function() {
      this.formData.title = this.filterById.title;
      this.formData.content = this.filterById.content;
    },
    articleChanged: function() {
      this.$router.push({ name: "Admin-Home" });
    }
  }
};
</script>

<style lang="sass" scoped>
.btn
  margin: 0 20px
.admin_add
  margin: 10px 0
  padding: 0 5%
.title
  text-align: left
</style>
