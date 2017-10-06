{
  // 声明
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2); //不相等
  //使用的时候想方便取回来，意义都一样
  //a3是配值，看是否配置过，如果配置过则使用对应的值，没配置过则会生成一个新的0w0
  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3');
  console.log(a3===a4);//相等的
}

{
  //作用
  //使用场景
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  };
  console.log('obj',obj);

  //属性为Symbol的，用for in和for of都是遍历不到的
  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

  //想要获取属性为Symbol的需要通过这个方法，返回的是数组
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

  //想要获取到所有的属性, 包含Symbol和非Symbol属性的值
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
  })
}
