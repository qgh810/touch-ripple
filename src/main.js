import { checkNode } from './utils/check'
import { showWarn } from './utils/log'
import isPC from './utils/isPC'

const MARK_CLASSNAME = 'q-touch-ripple-mark'
var ISPC = isPC()

class TouchRipple {
  constructor (el, options) {
    this.initData(el, options) && this.init()
  }

  /**
   * 检查和初始化传入参数
   */
  initData (el, options) {
    this.el = checkNode(el)
    if (!this.el) return
    options = this.checkOptions(options)
    this.options = options
    return true
  }

  /**
   * 检查并且初始化options
   */
  checkOptions (options) {
    if (typeof options === 'string') {
      options = {color: options}
    }
    options = options || {}
    let baseOptions = {
      color: 'rgba(0,0,0,0.2)',
      time: 500,
      size: 0
    }
    for (let option in baseOptions) {
      !options[option] && (options[option] = baseOptions[option])
    }
    return options
  }

  init () {
    this.setElStyle()
    this.addEventListener()
  }

  setElStyle () {
    this.el.style.position = this.el.style.position || 'relative'
  }

  addEventListener () {
    if (ISPC) {
      this.el.addEventListener('mousedown', this.onMouseDown.bind(this))
      this.el.addEventListener('mouseup', this.onMouseUp.bind(this))
    } else {
      this.el.addEventListener('touchstart', this.onMouseDown.bind(this))
      this.el.addEventListener('touchend', this.onMouseUp.bind(this))
    }
  }

  onMouseDown (e) {
    e.preventDefault()
    this.target = e.target
    let { pageX, pageY } = ISPC ? e : e.touches[0]
    this.mouseDownPosition = { pageX, pageY }
    this.showRipples()
  }

  showRipples () {
    let mark = document.createElement('div')
    mark.className = MARK_CLASSNAME
    this.setMarkStyle(mark)
    let ripples = document.createElement('div')
    this.setRipplesStyle(ripples, mark)
    mark.appendChild(ripples)
    this.el.appendChild(mark)
  }

  setMarkStyle (element) {
    HTMLElement.prototype.__defineGetter__('currentStyle', function () {
      return this.ownerDocument.defaultView.getComputedStyle(this, null);
    })
    let style = element.style
    let {width, height } = this.el.getBoundingClientRect()
    style.position = 'absolute'
    style.left = '0'
    style.top = '0'
    style.width = width + 'px'
    style.height = height + 'px'
    style.borderRadius = this.el.currentStyle.borderRadius
    style.cursor = this.target.currentStyle.cursor
    style.overflow = 'hidden'
    // style.background = 'rgba(255,0,0,0.5)'
  }

  setRipplesStyle (ripples, mark) {
    let style = ripples.style
    let { width, height, left, top } = this.el.getBoundingClientRect()
    let length = parseInt(this.options.size) || Math.max(width, height)
    style.position = 'absolute'
    let offsetLeft = this.mouseDownPosition.pageX - left - length / 2 + 'px'
    let offsetTop = this.mouseDownPosition.pageY - top - length / 2 + 'px'
    style.left = offsetLeft
    style.top = offsetTop
    style.width = style.height = length + 'px'
    style.background = this.options.color
    style.borderRadius = '50%'
    style.borderRadius = '50%'
    style.transition = `all ease ${this.options.time / 1000}s`

    style.transform = 'scale(0)'
    style.opacity = 1

    setTimeout(() => {
      style.transform = 'scale(1)'
      style.opacity = 0
      setTimeout(() => {
        this.onAnimationEnd(mark)
      }, this.options.time)
    }, 0)
  }

  onAnimationEnd (mark) {
    this.el.removeChild(mark)
  }

  onMouseUp () {
    this.el !== this.target && this.dispatchEvent('click', this.target)
  }

  dispatchEvent (eventName, el) {
    try {
      //非IE
      var evObj = document.createEvent('MouseEvents');
      evObj.initEvent(eventName, true, false);
      el.dispatchEvent(evObj);
    } catch(e) {
      //IE
      el.fireEvent(`on${eventName}`);
    }
  }
}

module.exports = TouchRipple
