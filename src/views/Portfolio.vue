<template>
  <div class="portfolio">
    <div class="list">
      <div class="item">
        <a href="https://sunoda.github.io/Parallax/" target="_blank"
          >Parallax / 一頁式視差滾動</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/WeatherCard/" target="_blank"
          >天氣API串接 / Weather Card</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/RWD_flex/" target="_blank"
          >RWD練習 / flex切版</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/bootstap/" target="_blank"
          >Bootstrap / 切版練習</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/Microsoft/" target="_blank"
          >Windows仿切</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/FluentDesign/" target="_blank"
          >Microsoft – Fluent Design System / 仿切</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/Tomamu/" target="_blank"
          >Mobirise / 一頁式網站客製化修改</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/hyperbola/" target="_blank"
          >個人專題...つづく</a
        >
      </div>
      <div class="item">
        <a href="https://sunoda.github.io/multiplication/" target="_blank"
          >JS練習 - 99乘法表</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.portfolio
  width: 100%
  height: 50vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  .list
      display: grid
      background-color: lightcoral
      grid-template-rows: repeat(3 , 1fr)
      grid-template-columns: repeat(3, 1fr)
      border-radius: 15px
      .item
          display: block
          cursor: pointer
          padding: 30px
          background-color: lightcoral
          border-radius: 15px
          a
              color: white
              text-decoration: unset
          &:hover
              background-color: blue
</style>
