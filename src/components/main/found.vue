<template>
  <div class="main">
    <div class="header">
      <mt-navbar v-model="selected" class="title">
        <mt-tab-item id="tab-container1"><span style="font-size: 17px">推荐</span></mt-tab-item>
        <mt-tab-item id="tab-container2"><span style="font-size: 17px">连载</span></mt-tab-item>
        <mt-tab-item id="tab-container3"><span style="font-size: 17px">专题</span></mt-tab-item>
        <div class="search iconfont icon">&#xe610;</div>
      </mt-navbar>
    </div>
      <!-- tab-container -->
    <div class="cont">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab-container1">
          <!--<mt-cell />-->
          <div class="nav">
            <div class="nav-list" v-for="i in 7" :key="i">
              <div class="img-box"><img :src="require('@assets/icon.png')" /></div>
              <div class="hot">热门话题</div>
            </div>
          </div>
          <div class="text-cont">
          <div class="list" v-for="n in 5" :key="n">
            <div class="list-title">
              <div class="list-text">
                <span class="bold">父亲节，无处安放的思念</span>
                <p class="detail">我的爸爸爸爸爸爸巴巴爸爸爸爸爸爸爸爸爸爸爸爸爸爸爸爸爱爸爸爸爸八佰伴阿布巴巴爸爸爸爸爸爸</p>
              </div>
              <div class="thumb">
                <img :src="require('@assets/11.png')" />
              </div>
            </div>
            <div class="comments">
              <div class="com-text"><span>井底女蛙</span></div>
              <div class="com-text"><span class="iconfont icon">&#xe618;</span><span>119</span></div>
              <div class="com-text"><span class="iconfont icon">&#xe601;</span><span>223</span></div>
              <div class="com-text"><span class="iconfont icon">&#xe640;</span><span>223</span></div>
            </div>
          </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div class="main-swipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item><img :src="require('@assets/lz1.png')" /></mt-swipe-item>
              <mt-swipe-item><img :src="require('@assets/lz2.png')" /></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="swipe-nav">
            <div class="nav-list" v-for="i in 10" :key="i">
              <div class="img-box"><img :src="require('@assets/7ri.png')" /></div>
              <div class="hot">7日热门</div>
            </div>
          </div>
          <div class="list">
            <div class="list-cont">
              <div class="list-title">
                <div class="left">
                  <span class="prompt iconfont icon">&#xe615;</span>
                  <span class="bold">我关注的连载</span>
                </div>
                <div class="list-text">
                  <span class="prompt iconfont icon">&#xe638;</span>
                </div>
              </div>
            </div>
          </div>
          <div class="focus-nav">
            <div class="nav-list" v-for="i in 10" :key="i">
              <div class="img-box"><img :src="require('@assets/focus.png')" /></div>
              <div class="hot">7日热门</div>
              <div class="focus-comments">
                <div class="com-text"><span class="iconfont icon">&#xe618;</span><span>119</span></div>
                <div class="com-text"><span class="iconfont icon">&#xe601;</span><span>223</span></div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <div class="main-swipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item><img :src="require('@assets/zt3.png')" /></mt-swipe-item>
              <mt-swipe-item><img :src="require('@assets/zt4.png')" /></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="swipe-nav">
            <div class="nav-list" v-for="i in 10" :key="i">
              <div class="img-box"><img :src="require('@assets/zt1.png')" /></div>
              <div class="hot">关注专题</div>
            </div>
          </div>
          <div class="list">
            <div class="list-cont">
              <div class="list-title">
                <div class="left">
                  <span class="prompt project iconfont icon">&#xe611;</span>
                  <span class="bold">我关注的专题</span>
                </div>
                <div class="list-text">
                  <span class="prompt iconfont icon">&#xe638;</span>
                </div>
              </div>
            </div>
          </div>
          <div class="focus-nav">
            <div class="nav-list" v-for="i in 10" :key="i">
              <div class="img-box"><img :src="require('@assets/zt2.png')" /></div>
              <div class="hot">7日热门</div>
              <div class="focus-comments">
                <div class="com-text"><span class="iconfont icon">&#xe618;</span><span>119</span></div>
                <div class="com-text"><span class="iconfont icon">&#xe601;</span><span>223</span></div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem, Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'found',
  components: {
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Swipe,
    SwipeItem
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
      .title
        border-bottom: 1px solid #ececec
        overflow-x: auto
        padding: 12px 20% 5px
        .search
          position: absolute
          right: 1rem
          color: gray
          font-size: 20px
        .mint-tab-item
          padding: 3px 0
          font-size: 17px
        .is-selected
          border-bottom: none
          margin-bottom: 0px
          color: #ff4d4d
          border-bottom: 2px solid #ff4d4d
          padding-bottom: .5rem
      .mint-tab-container
        background: #fff
    .cont
        width: 100%
        height: calc( 100% - 48px)
        .nav
          width: 100%
          overflow-x: auto
          padding: 1rem .5rem
          display: flex
          border-bottom: 1px solid #ececec
          display: -webkit-box
          background: #fff
          .nav-list
            width: 20%
            display: flex
            align-items: center
            flex-direction: column
            .img-box
              width: 2rem
              height: 2rem
              img
                width: 100%
                height: 100%
            .hot
              font-size: .9rem
              color: #0a0a0a
              padding-top: 1rem
        .main-swipe
          width: 100%
          height: 12rem
          img
            width: 100%
            height: 100%
        .swipe-nav
          width: 100%
          overflow-x: auto
          padding: 1rem .5rem
          display: flex
          border-bottom: 1px solid #ececec
          background: #fff
          flex-wrap: wrap
          padding: 1rem 0
          .nav-list
            width: 20%
            display: flex
            align-items: center
            flex-direction: column
            .img-box
              width: 2rem
              height: 2rem
              img
                width: 100%
                height: 100%
            .hot
              font-size: .9rem
              color: #0a0a0a
              padding: 1rem 0
        .list
          margin: 1rem 0
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
                  color: #09a8f7
                  font-size: 22px
                .project
                  color: #ffb90b
              .list-text
                padding-left: 1rem
                .prompt
                  color: #bebbbe
                  padding: 0 .5rem
        .focus-nav
          width: 100%
          overflow-x: auto
          padding: 1rem .5rem
          display: flex
          border-bottom: 1px solid #ececec
          background: #fff
          flex-wrap: wrap
          padding: 1rem 0
          .nav-list
            width: 33%
            display: flex
            align-items: center
            flex-direction: column
            .img-box
              width: 6rem
              height: 7rem
              img
                width: 100%
                height: 100%
            .hot
              font-size: .9rem
              color: #0a0a0a
              padding: .5rem 0 .5rem
            .focus-comments
              display: flex
              justify-content: space-between
              padding-bottom: 1rem
              .com-text
                padding-right: .5rem
                span
                  font-size: .5rem
                  color: gray
        .text-cont
          margin-top: .5rem
          width: 100%
          height: calc( 100% - 143px)
          overflow-y: auto
          .list
            color: #afafaf
            padding: .8rem 1rem
            border-bottom: 1px solid #ececec
            background: #fff
            .list-title
              display: flex
              justify-content: space-between
              .thumb
                position: relative
                width: 4rem
                height:  4rem
                border-radius: 3px
                img
                  width: 100%
                  height: 100%
                  border-radius: 3px
              .list-text
                width: 80%
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                .bold
                  line-height: 1.5rem
                  color: black
                  font-weight: bold
                .detail
                  font-size: .8rem
                  padding-top: .2rem
                  line-height: 1.3rem
            .comments
              display: flex
              line-height: 2rem
              .com-text
                padding-right: .5rem
                span
                  font-size: .9rem
</style>
