// 获取和修改百度搜索页面元素
let e1 = document.getElementById("s-hotsearch-wrapper")
e1.innerHTML = '百度很笨'

// 删除元素
let parent = e1.parentElement
parent.removeChild(e1)
