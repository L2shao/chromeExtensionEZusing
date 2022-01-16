const timer = setInterval(() => {
  const kw = document.getElementById('kw')
  if(kw) {
    kw.value = '张三李四'
    clearInterval(timer)
  }
}, 100)

// 下面是作用于freeOpt的
const observer = new MutationObserver()
