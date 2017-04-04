
export function checkNode (el) {
  HTMLElement.prototype.__defineGetter__('currentStyle', function () {
    return this.ownerDocument.defaultView.getComputedStyle(this, null);
  })
  let result = el
  if (!result) {
    return console.error('找不到当前节点', el)
  }
  if (typeof el === 'string') {
    let domName = el
    result = document.querySelector(domName)
    if (!result) {
      return console.error('找不到当前节点', el)
    }
  } else if (typeof el === 'object') {
    if (!el.nodeName) {
      return console.error('找不到当前节点', el)
    }
  }
  return result
}
