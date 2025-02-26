async function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      const data = { message: '这是异步获取的数据' };
      resolve(data);
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data.message);
  } catch (error) {
    console.error('操作出错:', error);
  }
}

getData();

