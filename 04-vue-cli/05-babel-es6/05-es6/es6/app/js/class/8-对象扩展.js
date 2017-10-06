{
  // 简洁表示法
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log(es5,es6);

  // 对象里面有方法时的简洁表示法
  let es5_method = {
    hello: function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello() {
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性表达式
  let a = 'b';
  let es5_obj = {
    a: 'c',
    b: 'c'
  };

  //表达式作为属性,也可以是变量
  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj);

}

{
  // 新增API
  //判断是否相等，相当于3个等号的功能
  console.log('字符串',Object.is('abc', 'abc'),'abc'==='abc');
  //数组也是引用类型
  console.log('数组',Object.is([],[]),[]===[]);
  //要拷贝的对象，第二个是要拷贝的对象
  //拷贝的属性是有限制的，这个是浅拷贝，就是如果值为引用类型只把引用地址拷贝过去
  console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

  let test = {k:123,o:456};
  for (let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

{
  // 扩展运算符
  // let {a,b,...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
