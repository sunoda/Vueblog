<template>
  <div class="admin_home">
    <b-table hover :fields="fields" :items="articles">
      <template v-slot:cell(date)="data">
        {{ data.value | toDate }}
      </template>
      <template v-slot:cell(content)="data">
        <p v-html="$options.filters.subcontent(data.value)"></p>
      </template>
      <template v-slot:cell(id)="data">
        <b-button @click="editArticle(data.value)" variant="primary"
          >修改</b-button
        >
        <b-button @click="delArticle(data.value)" variant="danger"
          >刪除</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      fields: [
        { key: "title", label: "文章標題" },
        { key: "date", label: "修改日期" },
        { key: "content", label: "文章內容" },
        { key: "id", label: "修改" }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchArticles", "deleteArticle"]),
    editArticle: function(id) {
      this.$router.push({ name: "Admin-Edit", params: { id: id } });
    },
    delArticle: function(id) {
      const ensure = Swal.fire({
        title: "你確定要刪除這篇文章嗎？",
        text: "執行後無法復原",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確認"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "文章已經刪除", "success");
          this.deleteArticle(id);
        }
      });
    }
  },
  computed: {
    ...mapState(["articles"])
  },
  filters: {
    subcontent: content => {
      let contentStr = content.substring(0, 80);
      return content.length > 80 ? contentStr + "..." : contentStr;
    },
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
.admin_home
  margin: 30px 0
  padding: 0 5%
  .btn
    margin: 0 10px
</style>
