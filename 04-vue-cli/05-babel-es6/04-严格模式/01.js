/*
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

严格模式主要有以下限制。

变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错
不能使用前缀0表示八进制数，否则报错
不能删除不可删除的属性，否则报错
不能删除变量delete prop，会报错，只能删除属性delete global[prop]
eval不会在它的外层作用域引入变量
eval和arguments不能被重新赋值
arguments不会自动反映函数参数的变化
不能使用arguments.callee
不能使用arguments.caller
禁止this指向全局对象
不能使用fn.caller和fn.arguments获取函数调用的堆栈
增加了保留字（比如protected、static和interface）
上面这些限制，模块都必须遵守。由于严格模式是 ES5 引入的，不属于 ES6，所以请参阅相关 ES5 书籍，本书不再详细介绍了。

其中，尤其需要注意this的限制。ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。
*/
(function(){
  'use strict';
  // 假如有一个全局变量叫做mistypedVariable
  // mistypedVaraible = 17; // 因为变量名拼写错误, 相当于使用未声明的变量
  // 这一行代码就会抛出 ReferenceError


  // 给不可写属性赋值
  // var obj1 = {};
  // Object.defineProperty(obj1, "x", { value: 42, writable: false });
  // obj1.x = 9; // 抛出TypeError错误

  // 给只读属性赋值
  // var obj2 = { get x() { return 17; } };
  // obj2.x = 5; // 抛出TypeError错误

  // 给不可扩展对象的新属性赋值
  // var fixed = {};
  // Object.preventExtensions(fixed);
  // fixed.newProp = "ohai"; // 抛出TypeError错误


  // delete Object.prototype; // 抛出TypeError错误


  // function sum(a, a, c){ // !!! 语法错误
    // return a + b + c; // 代码运行到这里会出错
  // }


  // var x;
  // delete x; // !!! 语法错误

  // eval("var y; delete y;"); // !!! 语法错误


})();
