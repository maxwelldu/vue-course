{
  //二进制0B开头,小写大写都可以
  console.log('B',0B111110111);//503
  //八进制0o开头, 大小写都可以
  console.log(0o767);//503
}

{
  //是否在有效范围
  console.log('15',Number.isFinite(15));
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN));
  console.log('0',Number.isNaN(0));

}

{
  //判断是否为整数,传进来的必须要是一个数
  console.log('25',Number.isInteger(25));
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25',Number.isInteger('25'));
  console.log('25.1',Number.isInteger('25.1'));
}

{
  //-2的53次方到2的53次方里面是安全的,传进来的一定要是一个数
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}

{
  //取整数部分
  console.log(4.1,Math.trunc(4.1));
  console.log(4.9,Math.trunc(4.9));
}

{
  //判断是正数，负数还是0， 返回1 -1 0 或者 NaN
  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50'));
  console.log('foo',Math.sign('foo'));
}


{
  //立方根的计算
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
}
