// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }
/*
在index.js中导入
import {A, test, Hello} from '17.js';
console.log(A, test, Hello);
*/

//当导出的内容太多的时候难道要一一的导出吗
//这个文件虽然导出了很多，但是我只关注一个
// import {A} from '17.js';
// 如果导入的时候要按照名称一个一个对应很累
// import * as lesson from '17.js';
// console.log(lesson.A, lesson.test);

//导入的时候不用*号需要和导出的东西一致
//如果希望导入的时候自定义名字
let A=123;
let test=function(){
  console.log('test');
}
class Hello{
  test(){
    console.log('class');
  }
}

//把引入的名字交给导入方
export default {
  A,
  test,
  Hello
}
//推荐这种，不会因为误操作不小心把一些内容导出了
//引入的时候名称自定义，非常简洁
import lesson17 from '17.js';
console.log(lesson17.A);
