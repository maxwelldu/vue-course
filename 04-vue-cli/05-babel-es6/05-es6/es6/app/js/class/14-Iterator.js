{
  let arr = ['hello','world'];
  //Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环结构使用。
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  //给对象自定义一个iterator接口
  //先遍历对象中的start, 再遍历对象中的end
  let obj = {
    start: [1,3,2],
    end: [7,9,8],
    [Symbol.iterator](){
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next() {
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  for(let key of obj){
    console.log(key);
  }
}
//无论你想遍历什么样的对象都可以按照上面这种方式去定义

{
  let arr=['hello','world'];
  for(let value of arr){//背后是iterator接口
    console.log('value',value);
  }
}
