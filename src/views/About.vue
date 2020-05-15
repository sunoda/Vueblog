<template>
  <div class="about">
    <div class="main_left">
      <div class="black_bar">WEB DESIGNER & DEVELOPER</div>
      <span class="area_title">Carrer</span>
      <div class="carrer">
        <span id="year1" class="year year1">2020</span>
        <div class="dot dot1"></div>
        <div id="thing1" class="things">
          <span class="title">職訓局學習</span>
          <span class="content"
            >回台灣求職目標希望轉換跑道，有幸參與職訓局所開設的全端訓練班級，花費三個月的時間學習從設計、前端到後端的基本功。</span
          >
        </div>
        <span id="year2" class="year year2">2018</span>
        <div class="dot dot2"></div>
        <div id="thing2" class="things">
          <span class="title">日本打工度假</span>
          <span class="content"
            >打工三個月體驗日本職場文化，並於日本語言學校就讀半年強化日文能力。利用一年的時間完成目標清單。</span
          >
        </div>
        <span id="year3" class="year year3">2014</span>
        <div class="dot dot3"></div>
        <div id="thing3" class="things">
          <span class="title">漢辰科技</span>
          <span class="content"
            >駐點維修與保養機台，與客戶建立良好關係。協助公司支援日本機台，完成階段性任務。</span
          >
        </div>
        <span id="year4" class="year year4">2010</span>
        <div class="dot dot4"></div>
        <div id="thing4" class="things">
          <span class="title">溜冰社社長</span>
          <span class="content"
            >在學期間擔任社長，帶領幹部舉辦活動教導學弟妹直排輪相關技巧</span
          >
        </div>
        <div class="black_line"></div>
      </div>
      <span class="area_title">Language</span>
      <div class="lang">
        <div class="type eng">545</div>
        <div class="type jp">N3</div>
      </div>
      <span class="area_title">SKILLS</span>
      <div class="skill">
        <span class="title title1">FRONT</span>
        <div class="dot dot1"></div>
        <p class="content content1">
          使用sass,scss與js,jquery製作RWD頁面Bootstrap之應用、Ajax非同步請求flex與grid應用。自學Vue基本運用
        </p>
        <span class="title title2">BACK</span>
        <div class="dot dot2"></div>
        <p class="content content2">
          Laravel串接PHP頁面、綠界金流串接、資料庫建立
        </p>
        <span class="title title3">OTHER</span>
        <div class="dot dot3"></div>
        <p class="content content3">
          Git版本控制、解衝突。Illustrator、Photoshop製作Layout
        </p>
        <div class="black_line"></div>
      </div>
    </div>
    <div class="main_right">
      <div class="orange_bar">黃奕達</div>
      <div class="pic">
        <img src="@/assets/img/head.jpg" alt="" />
      </div>
      <div class="about_me">
        <span>ABOUT</span>
        <span>嘉義人</span>
        <span>畢業於逢甲大學光電學系</span>
        <br />
        <span>喜歡吸收新的技術與資訊，強化程式撰寫能力與相關應用。</span>
        <br />
        <span>興趣：滑雪、直排輪、英日文</span>
      </div>
      <div class="contact">
        <span class="title">CONTACT</span>
        <div>
          <img src="@/assets/img/telephone.svg" alt="" />
          <span>0910-887-767</span>
        </div>
        <div>
          <img src="@/assets/img/mail.svg" alt="" />
          <span>suno.eeda@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
// @mixin
$color1: #000
$color2: #fff
$color3: #F0861F
$color4: #E2E0E0
@mixin fake
  content: ''
  position: absolute
*
  font-family: 'Noto Sans TC', sans-serif;
.about
  display: grid
  justify-content: center
  grid-auto-flow: column
  .main_left
    width: 50vw
    display: grid
    justify-items: start
    padding: 50px 0
    .black_bar
      margin: 50px 0 0 0
      width: 50vw
      height: 50px
      background-color: $color1
      color: $color2
      font-weight: 500
      font-size: 30px
      line-height: 50px
    .area_title
      font-size: 30px
      color: orange
      margin: 10px 0
    .carrer
      display: grid
      grid-template-columns: 50px 70px 1fr
      grid-template-rows: 1fr 1fr 1fr 1fr
      .dot
        width: 10px
        height: 10px
        border-radius: 50%
        margin: 10px 0 0 15px
        background-color: $color1
        justify-self: center
        align-self: start
        &.dot1
          grid-area: 1 / 2 / 1 / 2
        &.dot2
          grid-area: 2 / 2 / 2 / 2
        &.dot3
          grid-area: 3 / 2 / 3 / 2
        &.dot4
          grid-area: 4 / 2 / 4 / 2
      .year
        padding: 4px 5px
        background-color: $color1
        color: $color2
        position: relative
        height: 30px
        font-size: 17px
        &#year1
          grid-area: 1 / 1 / 1 / 1
        &#year2
          grid-area: 2 / 1 / 2 / 1
        &#year3
          grid-area: 3 / 1 / 3 / 1
        &#year4
          grid-area: 4 / 1 / 4 / 1
        &::after
          content: ''
          position: absolute
          right: -16px
          top: 0px
          width: 0
          height: 0
          border-style: solid
          border-width: 15px 0 15px 16px
          border-color: transparent transparent transparent $color1
      .things
        display: grid
        justify-items: flex-start
        &#thing1
          grid-area: 1 / 3 / 1 / 3
        &#thing2
          grid-area: 2 / 3 / 2 / 3
        &#thing3
          grid-area: 3 / 3 / 3 / 3
        &#thing4
          grid-area: 4 / 3 / 4 / 3
        .content
          text-align: start
          padding: 0 30px 10px 0
        .title
          font-weight: 600
          font-size: 17px
      .black_line
        background-color: $color1
        justify-self: center
        margin: 15px 15px 15px 30px
        width: 3px
        grid-area: 1 / 2 / 5 / 2
    .lang
      display: grid
      grid-auto-flow: column
      .type
        position: relative
        width: 50px
        height: 50px
        border-radius: 50%
        background-color: $color1
        color: $color2
        text-align: center
        line-height: 50px
        margin: 20px
        &::before
          content: ''
          position: absolute
          left: -7px
          top: -7px
          width: 64px
          height: 64px
          border: 3px solid $color3
          border-radius: 50%
          z-index: -1
        &::after
            @include fake
            width: 70px
            height: 35px
            background-color: $color2
            z-index: -1
        &.jp
          &::after
            top: -6px
            left: 5px
            transform: rotate(45deg)
        &.eng
          &::after
            top: -15px
            left: -10px
            height: 40px
    .skill
      display: grid
      grid-template-columns: 70px 70px 1fr
      grid-template-rows: 1fr 1fr 1fr
      .dot
        width: 10px
        height: 10px
        border-radius: 50%
        margin: 10px 0 0 15px
        background-color: $color1
        justify-self: center
        align-self: start
        &.dot1
          grid-area: 1 / 2 / 1 / 2
        &.dot2
          grid-area: 2 / 2 / 2 / 2
        &.dot3
          grid-area: 3 / 2 / 3 / 2
      .title
        padding: 4px 5px
        background-color: $color1
        color: $color2
        position: relative
        height: 30px
        font-size: 17px
        &#title1
          grid-area: 1 / 1 / 1 / 1
        &#title2
          grid-area: 2 / 1 / 2 / 1
        &#title3
          grid-area: 3 / 1 / 3 / 1
        &::after
          content: ''
          position: absolute
          right: -16px
          top: 0px
          width: 0
          height: 0
          border-style: solid
          border-width: 15px 0 15px 16px
          border-color: transparent transparent transparent $color1
      .content
        display: grid
        justify-items: flex-start
        text-align: left
        // width: 35vw
        &.content1
          grid-area: 1 / 3 / 1 / 3
        &.content2
          grid-area: 2 / 3 / 2 / 3
        &.content3
          grid-area: 3 / 3 / 3 / 3
      .black_line
        background-color: $color1
        justify-self: center
        margin: 15px 15px 15px 30px
        width: 3px
        grid-area: 1 / 2 / 4 / 2


  .main_right
    background-color: $color4
    width: 30vw
    padding: 50px 0
    .orange_bar
      margin: 50px 0 50px 0
      width: 100%
      height: 50px
      background-color: $color3
      font-size: 30px
      font-weight: 600
      letter-spacing: 15px
      line-height: 50px
    .pic
      img
        width: 40%
        clip-path: circle(42% at 50% 42%);
        position: relative
        &::after
          @include fake
          width: 180px
          height: 180px
          background-color: #CFCBBF
          border-radius: 50%
          z-index: 1
    .about_me
      display: grid
      justify-items: start
      padding: 0 30px
      margin: 50px 0 120px 0
      text-align: left
      font-weight: 600
    .contact
      display: grid
      justify-items: start
      padding: 0 30px
      .title
        font-weight: 600
        margin: 0 0 20px 0
      img
        width: 25px
        margin: 5px 20px 5px 0
      span
</style>
