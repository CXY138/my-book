import config from '@config'
import store from 'store'
import Toast from 'mint-ui/lib/toast/index'
import Indicator from 'mint-ui/lib/indicator'
import Cookie from 'js-cookie'
export default {
  methods: {
    /**
     * @purpose 判断是否是微信浏览器
     * @returns {boolean}
     */
    isWeChat () {
      let ua = window.navigator.userAgent.toLowerCase()
      // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
      if (ua.indexOf('MicroMessenger') > -1 || ua.indexOf('micromessenger') > -1) {
        return true
      }
      return false
    },
    /**
     * @purpose 获取配置
     * @param path
     */
    config (path) {
      let _config = config
      if (path.indexOf('.') < 0) {
        return _config[path]
      }
      path = path.split('.')
      path.forEach(item => {
        _config = _config[item]
      })
      return _config
    },
    /**
     * @purpose 获取cookie对象
     * @returns {*}
     */
    cookie () {
      return Cookie
    },
    /**
     * @purpose urlencode
     * @param clearString
     * @returns {string}
     */
    urlencode (clearString) {
      let output = ''
      let x = 0
      clearString = this.utf16to8(clearString.toString())
      let regex = /(^[a-zA-Z0-9-_.]*)/
      while (x < clearString.length) {
        let match = regex.exec(clearString.substr(x))
        if (match != null && match.length > 1 && match[1] !== '') {
          output += match[1]
          x += match[1].length
        } else {
          if (clearString[x] === ' ') {
            output += '+'
          } else {
            let charCode = clearString.charCodeAt(x)
            let hexVal = charCode.toString(16)
            output += '%' + (hexVal.length < 2 ? '0' : '') + hexVal.toUpperCase()
          }
          x++
        }
      }
      return output
    },
    utf16to8 (str) {
      let out, i, len, c
      out = ''
      len = str.length
      for (i = 0; i < len; i++) {
        c = str.charCodeAt(i)
        if ((c >= 0x0001) && (c <= 0x007F)) {
          out += str.charAt(i)
        } else if (c > 0x07FF) {
          out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
          out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        } else {
          out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        }
      }
      return out
    },
    /**
     * @purpose 字符串截取
     * @param str
     * @param length
     * @param ending
     */
    strCut (str = '', length = 20, ending = '...') {
      if (str.length <= length) {
        return str
      }
      return str.substr(0, length) + ending
    },
    storage () {
      return store
    },
    /**
     * 检测一个元素是否是某个数组的元素
     * @param ele
     * @param array
     * @returns {boolean}
     */
    inArray (ele, array) {
      if ((array instanceof Array) !== true) {
        throw new Error('第二个参数的类型必须是数组!')
      }
      return array.indexOf(ele) > -1
    },
    /**
     * @purpose 全局toast
     * @param msg 显示信息
     * @param time 显示时长
     * @param callback 关闭时的回调
     */
    toast (msg = '', time = 3, callback) {
      let _time = 3
      let _callback = () => {}
      if (typeof msg === 'object') {
        msg = JSON.stringify(msg)
      }
      if (typeof time === 'function') {
        _callback = time
      } else if (typeof time === 'number') {
        _time = time
      }
      if (typeof callback === 'function') {
        _callback = callback
      }
      let instance = Toast({
        message: msg,
        position: 'middle'
      })
      setTimeout(() => {
        instance.close()
        _callback()
      }, _time * 1000)
    },
    /**
     * 关闭loading
     */
    closeLoading () {
      Indicator.close()
      // Indicator.close()
    },
    /**
     * @purpose 开启loading
     * @param msg
     * @param type
     */
    showLoading (msg, type) {
      let __type = 3
      if (typeof msg === 'number') {
        __type = msg
      }
      if (typeof type === 'number') {
        __type = type
      }
      let _type = {
        1: 'snake',
        2: 'fading-circle',
        3: 'double-bounce',
        4: 'triple-bounce'
      }
      Indicator.open({
        msg: msg,
        spinnerType: _type[__type]
      })
    },
    /**
     * 判断一个对象是否为空对象 `{}`
     * @param obj
     * @returns {boolean}
     */
    isEmptyObject (obj) {
      for (let name in obj) {
        return false
      }
      return true
    },
    getType (obj) {
      // toString会返回对应不同的标签的构造函数
      let toString = Object.prototype.toString
      let map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
      }
      if (obj instanceof Element) {
        return 'element'
      }
      return map[toString.call(obj)]
    },

    /**
     * 对象深拷贝
     * @param data
     * @returns {{}}
     */
    deepClone (data) {
      let obj = {}
      let originQueue = [data]
      let copyQueue = [obj]
      // 以下两个队列用来保存复制过程中访问过的对象，以此来避免对象环的问题（对象的某个属性值是对象本身）
      let visitQueue = []
      let copyVisitQueue = []
      while (originQueue.length > 0) {
        let _data = originQueue.shift()
        let _obj = copyQueue.shift()
        visitQueue.push(_data)
        copyVisitQueue.push(_obj)
        for (let key in _data) {
          let _value = _data[key]
          if (typeof _value !== 'object') {
            _obj[key] = _value
          } else {
            // 使用indexOf可以发现数组中是否存在相同的对象(实现indexOf的难点就在于对象比较)
            let index = visitQueue.indexOf(_value)
            if (index >= 0) {
              _obj[key] = copyVisitQueue[index]
            }
            originQueue.push(_value)
            _obj[key] = {}
            copyQueue.push(_obj[key])
          }
        }
      }
      return obj
    },
    /**
     * @introduction: 剪切URL路径，组装需要规格的图片地址 目前只支持阿里云OSS
     * @date: 2015-03-26 12：58
     * @param:url String 图片地址
     * @param:width Number 图片宽度
     * @param:height Number 图片高度
     * @returns {*}
     */
    cutImg (url, width, height, type = 1) {
      switch (parseInt(type)) {
        case 1 :
          if (parseInt(width) && parseInt(height)) {
            // 按比例裁剪
            url = url + '?x-oss-process=image/resize,w_' + width + ',h_' + height + '/quality,q_100'
          }
          break
        case 2 :
          // 按照宽度缩放
          if (parseInt(width)) {
            url = url + '?x-oss-process=image/resize,w_' + width
          }
          break
        case 3 :
          // 按照高度缩放
          if (parseInt(height)) {
            url = url + '?x-oss-process=image/resize,h_' + height
          }
          break
        default:
          return url
      }
      return url
    },
    /**
     * 获取图片完整路径
     * @param path 图片路径
     * @param type oss或tencent
     */
    completePath (path, type = 'oss') {
      if (type === 'oss') {
        return config.AliOssPictureCdn + path
      } else if (type === 'tencent') {
        return config.TencentPictureCdn + path
      }
    },

    /**
     * 路由跳转函数
     * @param path
     * @param type 跳转方式, false: 内部路由, true: 外部url
     * @param replace 是否记录历史记录, false: 记录, true: 不记录
     */
    jump (path, type = false, replace = false) {
      if (typeof path === 'object') {
        if (replace) {
          this.$router.replace(path)
        } else {
          this.$router.push(path)
        }
      } else {
        if (type) {
          if (replace) {
            window.location.replace(path)
          } else {
            window.location.href = path
          }
        } else if (typeof path === 'number') {
          window.history.go(path)
        } else {
          // 因为线上多目录的问题,在这里统一添加一个路由前缀
          if (path.indexOf('/') === 0) {
            path = `${config.routePrefix}${path}`
          } else {
            path = `${config.routePrefix}/${path}`
          }
          if (replace) {
            this.$router.replace(path)
          } else {
            this.$router.push(path)
          }
        }
      }
    },
    /**
     * @description 接收url的get参数
     * @param key
     * @param url
     * @returns {*}
     */
    getValueFromUrl (key, url = window.location.href) {
      let _data
      let data = {}
      if (url.indexOf('?') === -1) {
        return ''
      }
      _data = url.split('?')
      _data = _data[1]
      _data = _data.split('&')
      let _data_
      for (let i in _data) {
        _data_ = _data[i].split('=')
        data[decodeURI(_data_[0])] = decodeURI(_data_[1])
      }
      if (!data[key]) {
        return ''
      }
      if (key && data[key]) {
        return data[key]
      }
      return data
    },
    /**
     * 拨打电话
     * @param phoneNumber
     */
    call (phoneNumber) {
      if (!phoneNumber) {
        this.toast('未找到电话号码!')
        return false
      }
      window.location.href = 'tel://' + phoneNumber
    }
  }
}
