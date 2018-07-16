<template>
  <div class="main">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="toolbar">
      <div class="item"
           :class="{selected: selected === 'main.home'}"
           @click="jump({name: 'main.home'})">
        <div class="iconfont icon">
          <span class="active">&#xe600;</span>
          <span class="un-active">&#xe600;</span>
        </div>
        <div class="name">关注</div>
      </div>
      <div class="item"
           :class="{selected: selected === 'main.found'}"
           @click="jump({name: 'main.found'})">
        <div class="iconfont icon">
          <span class="active">&#xe746;</span>
          <span class="un-active">&#xe746;</span>
        </div>
        <div class="name">发现</div>
      </div>
      <div class="item">
        <div class="iconfont icon">
          <span class="unactive add">&#xe636;</span>
        </div>
      </div>
      <div class="item"
           :class="{selected: selected === 'main.message'}"
           @click="jump({name: 'main.message'})">
        <div class="iconfont icon">
          <span class="active">&#xe639;</span>
          <span class="un-active">&#xe639;</span>
        </div>
        <div class="num">6</div>
        <div class="name">消息</div>
      </div>
      <div class="item"
           :class="{selected: selected === 'main.mine'}"
           @click="jump({name: 'main.mine'})">
        <div class="iconfont icon">
          <span class="active">&#xe62a;</span>
          <span class="un-active">&#xe62a;</span>
        </div>
        <div class="name">我的</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: 'main.mine'
    }
  },
  watch: {
    $route (route) {
      this.selected = route.name
    }
  },
  created () {
    this.selected = this.$route.name
  }
}
</script>

<style scoped lang="sass">
  .main
    width: 100%
    height: 100%
    .content
      width: 100%
      height: calc(100% - 50px)
    .toolbar
      width: 100%
      height: 50px
      display: flex
      align-items: center
      background: #fff
      .item
        flex: 1
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        font-weight: bold
        -webkit-tap-highlight-color: transparent
        position: relative
        .icon
          font-size: 1.5rem
          color: #b1b1b1
          .active
            color: #e8291e
            display: none
          .add
            font-size: 35px
            color: #de7474
        .num
          font-size: .5rem
          padding: 3px 5px 3px 5px
          border: 1px solid #ff5700
          color: #fff
          position: absolute
          border-radius: 20px
          background-color: #f34202
          left: 2.5rem
          top: 0px
        .name
          font-size: .7rem
          margin-top: .2rem
          color: #b1b1b1
        &.selected
          .icon
            .active
              display: block
            .un-active
              display: none
          .name
            color: #e8291e
</style>
