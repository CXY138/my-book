<template>
  <div class="main">
    <header class="header">
      <div class="person iconfont icon">
        <span>&#xe606;</span>
      </div>
    </header>
      <div class="header-list">
        <div class="list-cont">
          <div class="list-title">
            <div class="thumb">
              <img :src="require('@assets/tx.png')" />
            </div>
            <div class="list-text">
              <span class="bold">小丸子哒哒</span>
              <span class="prompt iconfont icon">&#xe671;</span>
              <p class="integral"><span><a class="iconfont icon">&#xe60a;</a>积分66</span><span>积分商城</span></p>
            </div>
          </div>
          <div class="members"><img :src="require('@assets/hy.png')" /></div>
        </div>
      </div>
    <div class="cont">
      <div class="choose">
        <div class="bright">0</div>
        <div class="bright-text">公开文章</div>
      </div>
      <div class="choose">
        <div class="bright">10</div>
        <div class="bright-text">关注</div>
      </div>
      <div class="choose">
        <div class="bright">66</div>
        <div class="bright-text">粉丝</div>
      </div>
    </div>
    <div class="list" v-for="n in 2" :key="n">
      <div class="list-cont" v-for="n in 3" :key="n">
        <div class="list-title">
          <div class="left">
            <span class="prompt iconfont icon">&#xe626;</span>
            <span class="bold">精致女性</span>
          </div>
          <div class="list-text">
            <span>66</span>
            <span class="prompt iconfont icon">&#xe638;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine'
}
</script>
<style lang="sass">
  .header-list
    background: #fff
    .list-header
      display: flex
      align-items: center
      justify-content: space-between
      height: 3rem
      padding: 0 1rem
      border-bottom: 1px solid #ececec
      .orange
        color: #ff5400
  .list-cont
    display: flex
    color: #afafaf
    align-items: center
    justify-content: space-between
    padding: 0 1rem 1rem 1rem
    border-bottom: 1px solid #ececec
    .list-title
      display: flex
      align-items: center
      .thumb
        position: relative
        height: 4rem
        width: 4rem
        border-radius: 20px
        img
          width: 100%
          height: 100%
          border-radius: 40px
      .list-text
        padding-left: 1rem
        .bold
          line-height: 1.2rem
          color: black
        .prompt
          color: #adaaab
          padding: 0 .5rem
        .integral
          padding-top: .5rem
          span
            display: inline-block
            border: 1px solid #ff8238
            border-radius: 4px
            padding: 3px
            margin-right: .5rem
            font-size: .6rem
            color: #ff8238
            a
              font-size: .6rem
    .members
      position: absolute
      right: 0
      top: 3rem
</style>
<style scoped lang="sass">
  .main
    width: 100%
    height: 100%
    overflow-x: hidden
    overflow-y: auto
    overflow-scrolling: touch
    -webkit-overflow-scrolling: touch
    .header
      display: flex
      align-items: center
      background: #fff
      padding: 12px 0
      .person
        width: 100%
        text-align: right
        padding-right: 1rem
        span
          font-size: 1.5rem
          color: #6d6c6c
    .cont
      display: flex
      justify-content: space-around
      flex-wrap: wrap
      background: #fff
      .choose
        width: 33%
        text-align: center
        padding: 1rem 0
        .bright
          padding-bottom: .5rem
    .list
      margin-top: 1rem
      background: #fff
      .list-cont
        color: #afafaf
        padding: .8rem 1rem
        border-bottom: 1px solid #ececec
        .list-title
          display: flex
          justify-content: space-between
          width: 100%
          .left
            .bold
              line-height: 1.2rem
              color: #4a4848
            .prompt
              color: #918e91
          .list-text
            padding-left: 1rem
            .prompt
              color: #bebbbe
              padding: 0 .5rem
</style>
