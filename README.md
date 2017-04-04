## touch-ripple

触摸涟漪反馈效果, 支持 颜色自定义,涟漪直径自定义和涟漪速度自定义, 不影响原有事件, 兼容移动端<br>
[查看DEMO](http://qgh810.github.io/src/touch-ripple/index.html)<br>
web多数的体验效果不佳是因为很多交互没有及时给出反馈, 特别是处理异步逻辑的时候用户需要等待, 如果按钮点击后没及时给出反馈就会让页面有卡顿的感觉,这个小插件就是为了解决触发某些动作之前的按钮反馈效果<br>

<img src="https://github.com/qgh810/qgh810.github.io/blob/master/src/touch-ripple/assets/images/demo.gif?raw=true" width="250" />

### 安装方法
-  方式一
```bash
npm install touch-ripple --save
```

- 方式二

```bash
下载项目中的dist/touch-ripple.min.js, 然后用script标签插入到你的项目中, 如下
这种方式可以通过window.TouchRipple访问
```

```html
<script type="text/javascript" src="dist/touch-ripple.min.js"></script>
```

<br>

### 使用方法

```js
import TouchRipple from 'touch-ripple'

// 最简单的使用方法
new TouchRipple('.btn')

// 如果需要定义涟漪颜色可以这样初始化
new TouchRipple('.btn', 'rgba(0,0,0,0.2)')

// 如果还有其它设置 请这样写
new TouchRipple('.btn', {
  time: 500, // 涟漪散发时间
  color: 'rgba(0,0,0,0.2)',
  size: 200
}
```

### 参数说明
AnimateText接收两个参数, 例如: new AnimateText(element, options)

| 参数 | 类型 | 是否必填 | 描述 |
| :---: |  :--- |  :---: |  :--- |
| element | String or Object | 是 | 可以是选择器或者dom节点对象(请保证这个节点内只有文本而没有其它节点) |
| options | String or Object | 否 | 如果第二个参数是字符串, 则当作动画时间处理, 如果有其他参数, 以对象格式传递, 具体每个属性的描述请看下方的 options说明 |

<br>

###### options说明

第二个参数options详细说明

| 参数 | 类型 | 默认值 | 是否必填 | 描述 |
| :---: |  :--- |  :---: |  :---: |  :--- |
| color | String | rgba('0,0,0,0.2') | 否 | 涟漪颜色 |
| size | Number | element宽和高的较大值 | 否 | 涟漪直径 |
| time | Number | 500 | 否 | 涟漪扩散时间 |
