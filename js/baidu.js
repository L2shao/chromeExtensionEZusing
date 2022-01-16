// 下面是作用于freeOpt的

function autoGetOTP (dom) {
  chrome.storage.local.get(['userInfo'], function (result) {
    console.log(result.userInfo)
    if(result.userInfo){
      $('#account').val(result.userInfo.account)
      $('#pwd').val(result.userInfo.pwd)
      $('#secretKey').val(result.userInfo.secretKey)
    }
  })
}

let timer = setInterval(() => {
  autoGetOTP()
}, 30000)

const body = document.getElementsByTagName('body')[0]
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  const targetDom = document.getElementById('kw')
  if(targetDom) {
    autoGetOTP(targetDom)
    observer.disconnect()
  }
};
const observer = new MutationObserver(callback)
observer.observe(body, {
  attributes: false, childList: true, subtree: true
})

