<template>
  <div class="todo">
    <router-link to="/todolist/all">全部</router-link>
    <router-link to="/todolist/active">未完成</router-link>
    <router-link to="/todolist/complete">已完成</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="sass" scoped>
.todo
  padding: 10vh 10%
  background-color: rgb(0,0,100)
  a
    padding: 10px 20px
    text-decoration: none
    color: white
    &:hover
      background-color: rgb(255, 255, 100)
      border-radius: 10px
      color: rgb(0,0,100)
</style>
