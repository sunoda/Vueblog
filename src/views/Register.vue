<template>
  <div class="register">
    <h1>建立管理員帳戶</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="輸入管理員帳號"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.account"
          required
          placeholder="Enter account"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="輸入密碼" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button @click.prevent="submitAccount" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountForm: {
        account: "",
        password: "",
        date: ""
      }
    };
  },
  methods: {
    submitAccount: function() {
      this.accountForm.date = new Date().getTime();
      this.addAccountForm(this.accountForm);
      this.$router.push({ name: "Admin-Home" });
    }
  }
};
</script>

<style lang="sass" scoped>
.register
  display: flex
  flex-direction: column
  width: 30vw
  margin: 50px auto
</style>
