{
  let a,b;
  [a,b] = [1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest] = [1,2,3,4,5,6];
  console.log(a,b,rest);
}

{
  let a,b;
  ({a,b} = {a:1,b:2})
  console.log(a,b);
}

{
  let a,b,c;
  // [a,b,c] = [1,2]; //c为undefined
  [a,b,c=3] = [1,2];//默认值就是防止右侧没有三个值的时候
  console.log(a,b,c);
}

{
  //使用场景：变量交换
  let a = 1;
  let b=2;
  [a,b] = [b,a];
  console.log(a,b);
}

{
  //使用场景：函数返回值
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b] = f();
  console.log(a,b);
}

{
  //使用场景：选择性的接受需要的变量
  function f(){
    return [1,2,3,4,5]
  }
  let a,b;
  [a,,,b] = f();
  console.log(a,b);
}

{
  //使用场景：返回的个数不确定时,和上一个可以混合使用
  function f(){
    return [1,2,3,4,5]
  }
  let a,b;
  [a,,...b] = f();
  console.log(a,b);
}

{
  //对象解构
  let o = {p:42,q:true};
  let {p,q} = o;
  console.log(p,q);
}

{
  //对象解构：赋默认值
  let {a=10,b=5} = {a:3};
  console.log(a,b);
}

{
  //使用场景：嵌套数组和对象；API返回的json数据解构
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  //别名
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}
