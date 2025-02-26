const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const success = true;
    if (success) {
      resolve('操作成功');
    } else {
      reject('操作失败');
    }
  }, 2000);
});

promise.then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.error(error);
});

