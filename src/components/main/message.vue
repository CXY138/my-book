<template>
  <div class="main">
  <header class="header">
    <div class="title">
      消息
    </div>
    <div class="person iconfont icon">
      <span>&#xe70a;</span>
    </div>
  </header>
  <div class="cont">
    <div class="choose">
      <div class="bright iconfont icon">&#xe618;</div>
      <div class="bright-text">评论</div>
    </div>
    <div class="choose">
      <div class="bright iconfont icon">&#xe601;</div>
      <div class="bright-text">喜欢和赞</div>
    </div>
    <div class="choose">
      <div class="bright iconfont icon">&#xe614;</div>
      <div class="bright-text">关注</div>
    </div>
    <div class="choose">
      <div class="bright iconfont icon">&#xe659;</div>
      <div class="bright-text">投稿请求</div>
    </div>
    <div class="choose">
      <div class="bright iconfont icon">&#xe640;</div>
      <div class="bright-text">赞赏和稿费</div>
    </div>
    <div class="choose">
      <div class="bright iconfont icon">&#xe637;</div>
      <div class="bright-text">其他提醒</div>
    </div>
  </div>
    <div class="list">
      <div class="list-header"><span>简信</span><span class="orange">新简信</span></div>
      <div class="list-cont" v-for="n in 3" :key="n">
        <div class="list-title">
          <div class="thumb">
            <div class="num">6</div>
            <img :src="require('@assets/2.png')" />
          </div>
          <div class="list-text">
              <span class="bold">精致女性</span>
              <span class="prompt iconfont icon">&#xe70f;</span>
              <span class="update">2天前</span>
            <p class="detail">您好简友，我建了个就好不不不不一给福诶副歌富贵韦尔股份</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message'
}
</script>

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
      padding: 10px 0
      border-bottom: 1px solid #ececec
      .title
        width: 55%
        text-align: right
      .person
        width: 45%
        text-align: right
        padding-right: 1rem
        span
          font-size: 1.8rem
          color: #6d6c6c
    .cont
     display: flex
     justify-content: space-around
     flex-wrap: wrap
     background: #fff
     padding: 1rem 0
     .choose
      width: 33%
      text-align: center
      padding: 1rem 0
      .icon
        font-size: 24px
        padding-bottom: .5rem
        color: #ff5400
    .list
     margin-top: 1rem
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
      padding: .8rem 1rem
      border-bottom: 1px solid #ececec
      .list-title
        display: flex
        .thumb
          position: relative
          width: 2.5rem
          height:  2.5rem
          border-radius: 3px
          .num
            font-size: .5rem
            padding: 3px 5px 3px 5px
            border: 1px solid #ff5700
            color: #fff
            position: absolute
            border-radius: 10px
            background-color: #f34202
            left: 1.5rem
            top: -5px
          img
            width: 100%
            height: 100%
            border-radius: 22px
        .list-text
          padding-left: 1rem
          .bold
            line-height: 1.2rem
            color: black
          .prompt
            color: #2ccdff
            padding: 0 .5rem
          .update
            font-size: .8rem
            display: inline-block
            width: 52%
            text-align: right
          .detail
            /*width: calc(100% - 4.5rem)*/
            font-size: .8rem
            padding-top: .5rem
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            width: 88%
</style>
