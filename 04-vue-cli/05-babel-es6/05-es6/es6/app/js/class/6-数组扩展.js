{
  //一组数据类型转成一个数组
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  //如果不传任何参数则是一个空数组
  let empty=Array.of();
  console.log('empty',empty);
}

{
  //把伪数组和集合转换成真正的数组
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  //同时还有map的用法，第二个传递函数, 相当于把之前的进行遍历并处理一下
  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  //将数组里面的所有内容用一个指定的值填充
  console.log('fill-7',[1,'a',undefined].fill(7));
  //将数组里面的内容用一个指定的值填充，从起始位置1开始到3截止
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{
  //keys返回数组中所有的下标
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  //values返回数组中所有的值
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  //既返回键，又返回值
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  //起始位置0开始，从第3个开始读取，截止位是4，表示4之前
  console.log([1,2,3,4,5].copyWithin(0,3,4));//42345
}

{
  //查找，之前要用underscore之类的完成
  //find只找到第一个符合条件的
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  //findIndex返回符合条件的第一个的下标
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  //是否包含某个值
  console.log('number',[1,2,NaN].includes(1));
  //NaN是不能判断相等的，不过这个地方是可以的
  console.log('number',[1,2,NaN].includes(NaN));
}
