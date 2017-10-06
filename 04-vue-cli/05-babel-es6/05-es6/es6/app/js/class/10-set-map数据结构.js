{
  //新建
  let list = new Set();
  //添加元素
  list.add(5);
  list.add(7);
  //获得大小
  console.log('size',list.size);
}

{
  //初始化的时候传入默认值
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  console.log('size',list.size);
}

{
  //添加重复的元素会不生效, 能够去重
  //之前数组去重需要自己写函数实现
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  //去重, 在转换元素的时候不会做数据类型转换
  //数字和字符串的2不是一个东西
  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);

  console.log('unique',list2);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  //判断是否有
  console.log('has',list.has('add'));
  //删除元素
  console.log('delete',list.delete('add'),list);
  //清空
  list.clear();
  console.log('list',list);
}

{
  //遍历
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);

  //遍历键
  for(let key of list.keys()){
    console.log('keys',key);
  }
  //遍历值
  for(let value of list.values()){
    console.log('value',value);
  }
  //遍历键值
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);})
}


{
  // Set和WeakSet的区别：
  // 1.WeakSet里面只能存对象
  // 2.WeakSet是弱引用，并不检查这个对象的地址是否被垃圾回收机制给回收了
  // 3.WeakSet没有clear方法
  // 4.没有size属性
  // 5.不能遍历
  let weakList = new WeakSet();

  let arg = {};

  weakList.add(arg);

  // weakList.add(2);

  console.log('weakList', weakList);
}

{
  //新建Map
  let map = new Map();
  let arr = ['123'];
  //添加元素, key是数组
  map.set(arr, 456);

  //获取值
  console.log('map',map, map.get(arr));
}

{
  //新建Map，参数为一个数组，里面有两个值，都是数组
  let map = new Map([['a',123],['b',456]]);
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
  //遍历和之前的都是一样的
}

{
  //WeakMap不能遍历
  let weakmap=new WeakMap();

  let o = {};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}

{
  // 数据结构横向对比，增，查，改，删
  let map = new Map();
  let array = [];
  // 增
  map.set('t',1);
  array.push({t:1});

  console.info('map-array',map,array);

  // 查
  let map_exist = map.has('t');//true
  let array_exist = array.find(item=>item.t);//返回值
  console.info('map-array',map_exist,array_exist);

  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array-modify',map,array);

  // 删
  map.delete('t');
  let index = array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('map-array-empty',map,array);
}

{
  // set和array的对比
  let set = new Set();
  let array = [];

  // 增
  set.add({t:1});
  array.push({t:1});

  console.info('set-array',set,array);

  // 查
  let set_exist = set.has({t:1});
  let array_exist = array.find(item=>item.t);
  console.info('set-array',set_exist,array_exist);

  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);

  // 删
  set.forEach(item=>item.t?set.delete(item):'');
  let index = array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);
}

{
  // map,set,object对比
  let item = {t:1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  // 增
  map.set('t',1);
  set.add(item);
  obj['t']=1;

  console.info('map-set-obj',obj,map,set);

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // 改
  map.set('t',2);
  item.t = 2;
  obj['t'] = 2;
  console.info('map-set-obj-modify',obj,map,set);

  // 删除
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-obj-empty',obj,map,set);
}

//能使用Map,不使用数组；如果考虑数据的唯一性使用Set，放弃使用Object和数组
