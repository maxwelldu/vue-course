{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);//unicode大于0xFFFF

  console.log('s',`\u{20BB7}`);//使用大括号包起来


}


{
  let s='𠮷';
  //ES5
  console.log('length',s.length);//大于2个字节，所以这个的长度就是2
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

//ES6
  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0));//直接取4个字节,是完整的
  console.log('code0',s1.codePointAt(0).toString(16));//转换成16进制
  console.log('code1',s1.codePointAt(1));//1取的是这个字符的后两个字节
  console.log('code2',s1.codePointAt(2));//2取的是a
}

{
  //把码打印出字符, 区别在于能不能打印大于2个字节的字符
  //ES5
  console.log(String.fromCharCode("0x20bb7"));
  //ES6
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  //遍历器接口
  let str='\u{20bb7}abc';
  for(let i = 0; i < str.length; i++){
    console.log('es5',str[i]);
  }
  //遍历器
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  //判断字符串中是否包含某个字符
  console.log('includes',str.includes("c"));
  //判断字符串中是否以某个字符开始
  console.log('start',str.startsWith('str'));
  //判断字符串中是否以某个字符结束
  console.log('end',str.endsWith('ng'));
}

{
  //重复2次
  let str="abc";
  console.log(str.repeat(2));
}

{
  //模板字符串
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m);
}

{
  //ES7的草案
  //补白，比如选日期
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}

{
  //标签模板有什么用，在哪里用
  let user={
    name:'list',
    info:'hello world'
  };
  //标签模板
  //有两个作用，过滤HTML，防止XSS攻击
  //多语言的时候,根据不同的语言返回不同的内容
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  //会自动转义，在\前加上\
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
