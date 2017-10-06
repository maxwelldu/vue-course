{
  // 基本定义, 普通的回调函数的方式
  let ajax = function(callback){
    console.log('执行');
    setTimeout(function () { //模拟ajax
      callback && callback.call()
    }, 1000);
  };
  //调用, 如果比较复杂，顺序是一个问题，维护性变复杂
  ajax(function(){
    console.log('timeout1');
  })
}

{
  //Promise的用法, 和ES5中是一样的，只是方便维护
  let ajax = function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };
  //得到promise对象，并调用.then去传递回调
  ajax().then(function(){
    console.log('promise','timeout2');
  });
}

{
  let ajax = function(){
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  //promise对于复杂的时候可以使用串联的方式链式调用
  ajax()
    .then(function(){
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
    .then(function(){
    console.log('timeout3');
  })
}

{
  //如果在中间出错了，怎么捕获这个错误
  let ajax = function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}

{
  //实用场景
  // 所有图片加载完再添加到页面
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src = src;
      img.onload = function(){
        resolve(img);
      }
      img.onerror = function(err){
        reject(err);
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }

  //高级的用法
  //表示把多个Promise实例当一个Promise实例，当所有的状态都完成之后才会返回一个promise对象， 然后触发.then
  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)

}

{
  //哪个下载速度快就把谁添加到页面
  // 有一个图片加载完就添加到页面
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src = src;
      img.onload = function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(img){
    let p=document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p)
  }

  //有一个Promise的状态先改变则立马返回一个promise对象，不管其他的了
  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)

}
