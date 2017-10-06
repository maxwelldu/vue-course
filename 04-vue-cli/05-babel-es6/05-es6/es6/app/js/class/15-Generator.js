{
  // genertaor基本定义, 函数后面带星号
  let tell = function* (){
    yield 'a';//函数体中有yield
    yield 'b';
    return 'c'
  };

  let k = tell();//使用，这个时候是没有执行的

  console.log(k.next());//执行到yield停止
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  //Generator和Iterator接口
  //Generator也可以作为Iterator接口的返回值
  //因为Iterator里面默认也就是调用next方法
  let obj = {};
  obj[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  //什么时候有他的优势，就是状态机
  //比如一个对象只有A,B,C三种状态，他永远都是在A,B,C之间
  let state = function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next());//A
  console.log(status.next());//B
  console.log(status.next());//C
  console.log(status.next());//A
  console.log(status.next());//B
}

//Async, 把星号去掉，加上async, yield换成await
// {
//   let state = async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }
//

{
  //什么时候用Generator能够发挥强大的作用
  //抽奖次数限制，后端有限制，前端也要做限制
  //之前的话是设置一个全局变量来存储这个次数，但是是不安全的，并且也多建了一个变量
  //抽奖的逻辑和次数的校验是隔离开的，这个就是Generator的好处
  let draw = function(count){
    //具体抽奖逻辑
    console.info(`剩余${count}次`)
  }

  let residue = function* (count){
    while (count>0) {
      count--;
      yield draw(count);
    }
  }

  let star = residue(5);//正常情况下是服务器端传递过来的值，几次，现在模拟一个5次;
  let btn = document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    star.next();
  },false)
}

{
  // 长轮询
  // 服务器端的数据定期的去变化，我们前端需要定时的去取这个状态, 因为http是无状态的连接
  // 我们可以通过长轮询和websocket, 由于websocket的兼容性不好，所以长轮询还是比较普遍的什么活动
  // 通过Generator可以把这个长轮询变的比较优雅, 把业务逻辑和长轮询区分开
  //模拟接口的请求
  let ajax = function* (){
    yield new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve({code:0});//测试的时候把这个0改成1
      }, 200);
    })
  }

  //轮询
  let pull = function(){
    //generator的实例化
    let genertaor = ajax();
    let step = genertaor.next();//让generator运行, 返回一个promise实例
    //这个value就是promise的实例, d表示拿到的数据 {code:0}
    step.value.then(function(d){
      //如果拿到的数据不是新的，我们一秒后会再去请求一次
      if(d.code!=0){
        setTimeout(function () {
          console.info('wait');
          pull()
        }, 1000);
      }else{
        //查询结束，打印即可
        console.info(d);
      }
    })
  }

  pull();
}
