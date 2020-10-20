<template>
  <div>
    <h1>管理頁面</h1>
    <b-button :to="{ name: 'Admin-Home' }" variant="info">文章列表</b-button>
    <b-button :to="{ name: 'Admin-Add' }" variant="success">新增文章</b-button>
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
.btn
  margin: 0 20px
</style>
