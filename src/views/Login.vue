<template>
  <div class="login">
    <h1>管理員登入</h1>
    <b-form @submit.prevent="login">
      <b-form-group
        id="input-group-1"
        label="輸入管理員帳號"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.account"
          placeholder="Enter account"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="輸入密碼" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- @click.prevent="routerToAdmin" -->
    </b-form>
  </div>
</template>

<script>
// "use strict";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";
// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import bodyParser from "body-parser";
// import db from "./db";
// const db = new DB("splitedb");
// const app = express();
// const router = express.Router();

export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    // ...mapActions(["fetchAccounts"]),
    routerToAdmin: function() {
      this.$router.push({ name: "Admin-Home" });
    },
    login: function() {
      this.accounts.forEach(acc => {
        if (
          this.form.account == acc.account &&
          this.form.password == acc.password
        ) {
          this.$router.push({ name: "Admin-Home" });
        } else {
          this.form = {
            account: "",
            password: ""
          };
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "帳號或密碼錯誤"
          });
        }
      });
    }
  },
  computed: {
    ...mapState(["accounts"])
  }
};
</script>

<style lang="sass" scoped>
.login
  display: flex
  flex-direction: column
  width: 30vw
  // align-items: center
  margin: 50px auto
</style>
