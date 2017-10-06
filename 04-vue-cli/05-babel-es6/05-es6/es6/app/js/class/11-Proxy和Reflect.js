{
  //例如：供应商对象, 原始对象用来存储数据
  let obj = {
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  //代理对象, 第一个是需要代理的对象，第二个是真正代理的方法，平时使用的时候使用代理对象的方法
  let monitor = new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      //把值里面的2017替换成2018
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性, 比如：只允许修改name属性
    set(target,key,value){
      if (key === 'name'){
        return target[key]=value;
      } else {
        return target[key];
      }
    },
    // 拦截key in object操作, 比如只暴露name属性，其他都不暴露
    has(target,key){
      if(key === 'name'){
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete, 比如属性是以下划线开头的允许删除，否则不允许删除
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    //保护time
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  //通过get方法返回
  console.log('get',monitor.time);

  monitor.time='2018';//修改不成功
  monitor.name='ucai';//可以修改
  //能够懂我们操作的时候不能直接操作，只能通过代理进行操作
  console.log('set',monitor.time,monitor);

  console.log('has', 'name' in monitor, 'time' in monitor);

  delete monitor.time;
  console.log('delete',monitor);

  delete monitor._r;
  console.log('delete',monitor);

  console.log('ownKeys',Object.keys(monitor));

}

{
  //对象
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  //和Proxy的用法一样,直接使用，不需要new
  console.log('Reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj, 'name'));
}


{
  //实际工作中使用
  //校验，让他与业务逻辑进行解耦
  function validator(target, validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let va = this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
            throw Error(`不能设置${key}到${value}`)
          }
        }else{
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  //过滤校验的条件
  const personValidators={
    name(val){
      //判断是否是字符串
      return typeof val==='string'
    },
    age(val){
      //判断是数字并且大于18岁
      return typeof val === 'number' && val>18
    },
    mobile(val){

    }
  }

  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      this.mobile='1111';
      return validator(this, personValidators)
    }
  }

  const person = new Person('lilei',30);//得到的是Person的一个代理对象

  console.info(person);

  person.name = 48;//修改的时候有校验
  person.name = 'Han mei mei';

  console.info(person);
  //通过代理的对象，把条件和对象完全的给隔离开, 这样代码的维护，代码的整洁度，代码的健壮性，复用性都很强
}
