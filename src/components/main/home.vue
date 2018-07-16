<template>
  <div class="main">
  <header class="header">
    <div class="person iconfont icon">
      <span>&#xe697;</span>
    </div>
    <div class="search">
      <div class="iconfont icon">&#xe610;</div>
      <div class="placeholder">搜索简书上的内容和朋友</div>
    </div>
  </header>
    <div class="cont">
      <mt-navbar v-model="selected" class="title">
        <mt-tab-item id="tab-container1">全部关注</mt-tab-item>
        <mt-tab-item id="tab-container2">简友圈</mt-tab-item>
        <mt-tab-item id="tab-container3">专题</mt-tab-item>
        <mt-tab-item id="tab-container4">作者</mt-tab-item>
        <mt-tab-item id="tab-container5">连载</mt-tab-item>
        <mt-tab-item id="tab-container6">文集</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <div class="scroll">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab-container1">
          <!--<mt-cell />-->
          <div class="list" v-for="n in 10" :key="n">
            <div class="list-title">
              <div class="thumb">
                <img :src="require('@assets/11.png')" />
              </div>
              <div class="list-text">
                <span class="bold">短篇小说</span><span class="prompt iconfont icon">&#xe631;</span><span class="update">9篇更新</span>
                <p class="detail">来自感冒神的判决书</p>
              </div>
            </div>
            <div class="icon-right iconfont"></div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 4" :key="n" :title="'简友圈 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 6"  :key="n" :title="'专题 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
export default {
  name: 'home',
  components: {
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem
  },
  data () {
    return {
      selected: 'tab-container1',
      Navbar: {
        fixed: true,
        value: 1,
        name: '测试'
      }
    }
  }
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
    justify-content: center
    align-items: center
    background: #fff
    padding: 1rem 0
    .person
      width: 10%
      span
        font-size: 1.8rem
        color: #6d6c6c
    .search
      width: 84%
      height: 2rem
      border-radius: 20px
      display: flex
      align-items: center
      background: #f3f3f3
      color: #888888
      .icon
        font-size: 1rem
        margin-left: 1rem
      .placeholder
        flex: 1
        font-size: .9rem
        color: #adadad
  .cont
    width: 100%
    height: calc( 100% - 64px)
    .title
      border-bottom: 1px solid #ececec
      padding: 0 5px 10px 5px
      overflow-x: auto
      .mint-tab-item
        padding: 3px 0
      .is-selected
        border-bottom: none
        color: #ffffff
        margin-bottom: 0px
        background: #ff4d4d
        border-radius: 30px
    .scroll
      width: 100%
      height: calc( 100% - 30px)
      overflow-y: auto
      .mint-tab-container
        background: #fff
        .list
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
              width: 3rem
              height:  3rem
              border-radius: 3px
              img
                width: 100%
                height: 100%
                border-radius: 3px
            .list-text
              padding-left: 1rem
              .bold
                line-height: 1.5rem
                color: black
              .prompt
                color: #00c2ff
                padding: 0 .5rem
              .update
                font-size: .8rem
              .detail
                font-size: .8rem
                padding-top: .5rem
</style>
