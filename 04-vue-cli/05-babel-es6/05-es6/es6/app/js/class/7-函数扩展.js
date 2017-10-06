{
  //参数的默认值
  //默认值后面不能再有没有默认值的变量
  //默认值必须要在最后面
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

{
  //作用域，y取的是前面这个参数x,如果没有x会不会取上一级的，会的
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');
}

{
  //rest参数, 把所有的参数转换成一个数组，arguments和这个类似
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  //扩展运算符，rest的逆应用
  //把数组拆散成离散的值
  console.log(...[1,2,4]);
  console.log('a',...[1,2,4]);
}

{
  //箭头函数  函数名 = 参数 => 函数体
  //有的时候适合用箭头函数，有的时候不适合
  let arrow = v => v*2; //参数是v，返回v*2的值
  //参数没有值的时候用一个空括号
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

}

{
  //尾调用
  //概念：存在于函数式编程，就是函数的最后一句话是不是函数
  //用来提升性能，觉得不断的嵌套函数的话可以使用尾调用
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x);//函数的最后一步
  }
  fx(123)
}
