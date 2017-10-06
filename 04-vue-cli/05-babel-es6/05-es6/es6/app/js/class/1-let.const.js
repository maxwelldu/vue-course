function test(){
  //块作用域, let声明的只在块作用域有效
  for(let i=1;i<3;i++){
    console.log(i);
  }
  console.log(i);

  let a = 1;
  let a = 2;
}

function last(){
  const PI=3.1415926;
  PI = 8;//Error
  //const也有块级作用域
  //声明时必须赋值
  const a;
  //值不能修改,对象是引用类型，返回的是内存中的指针，指针是不变的，对象可以改变
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


// test();
last();
