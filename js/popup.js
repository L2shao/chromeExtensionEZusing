$(document).ready(function () {
  autofillUserinfo()
})
document.addEventListener('visibilitychange', function () {
  autofillUserinfo()
})

function autofillUserinfo() {
  if(document.visibilityState !== 'hidden') {
    chrome.storage.local.get(['userInfo'], function (result) {
      console.log(result.userInfo)
      if(result.userInfo){
        $('#account').val(result.userInfo.account)
        $('#pwd').val(result.userInfo.pwd)
        $('#secretKey').val(result.userInfo.secretKey)
      }
    })
  }
}

$('#save').on('click', function () {
  const account = $('#account').val()
  const pwd = $('#pwd').val()
  const secretKey = $('#secretKey').val()
  const json = {
    account,
    pwd,
    secretKey,
  }
  setUserInfo(json)
})

$('#clear').on('click', function () {
  $('#account').val('')
  $('#pwd').val('')
  $('#secretKey').val('')
})

$('#hide').on('click', function () {
  $('#form').toggle()
})

function setStorage(storage, callback) {
  chrome.storage.local.set(storage, function () {
    typeof callback == "function" && callback()
  })
}

function setUserInfo(info) {
  setStorage({
    userInfo: info
  })
}
